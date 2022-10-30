import jsonpatch from 'fast-json-patch';
import { useMutation, UseMutateFunction, useQueryClient} from 'react-query'
import { queryKeys } from 'react-query/constants';

import type { User } from '../../../../../shared/types';
import { axiosInstance, getJWTHeader } from '../../../axiosInstance';
import { useUser } from './useUser';

// for when we need a server function
async function patchUserOnServer(
  newData: User | null,
  originalData: User | null,
 ): Promise<User | null> {
  if (!newData || !originalData) return null;
  // create a patch for the difference between newData and originalData
  const patch = jsonpatch.compare(originalData, newData);

  // send patched data to the server
  const { data } = await axiosInstance.patch(
    `/user/${originalData.id}`,
    { patch },
    {
      headers: getJWTHeader(originalData),
    },
  );
  return data.user;
 }

export function usePatchUser(): UseMutateFunction<User, unknown, User, unknown> {
  const { user, updateUser } = useUser();

  const queryClient = useQueryClient();

  const { mutate: patchUser } = useMutation(
    (newUserData: User) => patchUserOnServer(newUserData,user),
    {
      // onMutate return context that is passed to onError
      onMutate: async (newData: User | null) => {
        // cancel any outgoing queries for user data, 
        // so old server data doesn't overwrite our optimistic update
        queryClient.cancelQueries(queryKeys.user);

        // snapshot of previous user value
        const previousUserData: User = queryClient.getQueryData(queryKeys.user);

        // optimistically update the cache with new user value
        updateUser(newData);

        // return context object with snapshot value
        return { previousUserData };
      },
      onError: (error, newData, context) => {
        // roll back cache to saved value
        if(context.previousUserData){
          updateUser(context.previousUserData);
        }
      },
      onSuccess: (userData: User | null) => {
        if(user) updateUser(userData)
      },
      onSettled: () => {
        // invalidate user query to make sure we're in sync with server data
        // show the most up to date data
        queryClient.invalidateQueries(queryKeys.user);
      },
    },
  );

  return patchUser;
}

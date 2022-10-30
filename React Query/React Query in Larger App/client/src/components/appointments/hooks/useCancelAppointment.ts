import { Appointment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/useCustomToast';
import { useMutation, UseMutateFunction, useQueryClient } from 'react-query'
import { queryClient } from 'react-query/queryClient';


// for when server call is needed
async function removeAppointmentUser(appointment: Appointment): Promise<void> {
  const patchData = [{ op: 'remove', path: '/userId' }];
  await axiosInstance.patch(`/appointment/${appointment.id}`, {
    data: patchData,
  });
}


export function useCancelAppointment(): UseMutateFunction<void, unknown, Appointment, unknown> {
  const toast = useCustomToast();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (appointment) => removeAppointmentUser(appointment),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.appointments]);
      }
    }
  )

  return mutate;
}

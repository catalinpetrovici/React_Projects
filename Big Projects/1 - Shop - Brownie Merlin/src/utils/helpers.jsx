export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('ro-RO', {
    style: 'currency',
    currency: 'RON',
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = () => {};

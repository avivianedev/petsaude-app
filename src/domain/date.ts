export const formatDisplayDate = (text: string) => {
  const [year, month, day] = text.split('-');
  const dateFormatted = `${day}/${month}/${year}`;
  return dateFormatted;
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const dateFormatted = `${year}-${month}-${day}`;

  return dateFormatted;
};

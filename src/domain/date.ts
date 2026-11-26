export const formatDisplayDate = (text: string) => {
  const [year, month, day] = text.split('-');
  const dateFormatted = `${day}/${month}/${year}`;
  return dateFormatted;
};

const calculateDuration = (start, end = null) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth() + 1;

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}

export default calculateDuration;

const getYearWord = (n) => {
  if (n % 10 === 1 && n % 100 !== 11) return 'год';
  if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return 'года';
  return 'лет';
}

const getMonthWord = (n) => {
  if (n % 10 === 1 && n % 100 !== 11) return 'месяц';
  if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return 'месяца';
  return 'месяцев';
}

const formatDuration = ({ years, months }) => {
  const y = years
    ? `${years} ${getYearWord(years)}`
    : '';

  const m = months
    ? `${months} ${getMonthWord(months)}`
    : '';

  return [y, m].filter(Boolean).join(' и ');
}

export default formatDuration;

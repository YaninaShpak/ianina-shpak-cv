import calculateDuration from "./calculate-duration";
import formatDuration from "./format-duration";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
}

const formatPeriod = (start, end) => {
  const duration = calculateDuration(start, end);

  const startStr = formatDate(start);
  const endStr = end ? formatDate(end) : 'наст. время';

  return `${startStr} - ${endStr} (${formatDuration(duration)})`;
}

export default formatPeriod;

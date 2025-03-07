function isWeekend(date) {
  const dayOffWeek = date.format('dddd');
  return dayOffWeek === 'Saturday' || dayOffWeek === 'Sunday';
}

export default isWeekend;
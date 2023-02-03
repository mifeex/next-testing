
/**
 * Returns ('2022-09-30') => { dayName: 'Mon', day: '30', monthName: 'September' }
 */

const useDateParams = () => {
  return (dateString: string) => {
    const date = new Date(dateString);
    return {
      dayName: `date.day_names.${date.getUTCDay()}`,
      day: date.getUTCDate(),
      monthName: `date.months_names.${date.getUTCMonth()}`,
      monthNameShort: `date.months_names_short.${date.getUTCMonth()}`,
    };
  };
};

export default useDateParams;

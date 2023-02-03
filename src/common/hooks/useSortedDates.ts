import * as React from 'react';
import lineupData from '@/common/data/lineupData';

const useSortedDates = () => {
  const sortedData = lineupData.sort((a, b) => (a.date < b.date ? -1 : 1));

  const uniqueDates = React.useMemo(() => {
    const dates = sortedData.map((item) => item.date);
    //@ts-ignore
    return [...new Set(dates)];
  }, [sortedData]);

  return { sortedData, uniqueDates };
};

export default useSortedDates;

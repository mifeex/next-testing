import * as React from "react";

type Props = {
  dates: string[];
  currentDate: string | null;
  selectDate(date: string): void;
  className?: string;
};

const DatesNavigator = ({
  dates,
  currentDate,
  selectDate,
  className,
}: Props) => {
  return (
    <div>
      {dates.map((date: typeof dates[number]) => (
        <a href={`#${date}`} onClick={() => selectDate(date)} key={date}></a>
      ))}
    </div>
  );
};

export default DatesNavigator;

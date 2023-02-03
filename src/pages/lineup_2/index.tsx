import * as React from "react";
import LineupThumbs from "./LineupThumbs";
import lineupData from "../../common/data/lineupData";
import { getDate } from "@/common/utils";
import useSortedDates from "@/common/hooks/useSortedDates";
import LineupMeta from "./LineupMeta";

const Lineup = () => {
  const { uniqueDates, sortedData } = useSortedDates();

  const [currentDate, setCurrentDate] = React.useState<string>(uniqueDates[0]);
  const node = React.useRef<HTMLDivElement>(null);

  const groupedCards = React.useMemo(
    () =>
      uniqueDates.map((date: string) => {
        const dryCards = sortedData.filter((item) => item.date === date);

        dryCards.sort((a, b) => {
          if (a.location === b.location) {
            return a.name > b.name ? 1 : -1;
          }

          return a.location === "organic stage" ? 1 : -1;
        });

        return { date, cards: dryCards };
      }),
    [lineupData]
  );

  return (
    <div>
      <LineupMeta />
      <div>
        {groupedCards.map(({ date, cards }) => (
          <React.Fragment key={date}>
            <div id={date}>{getDate(date)}</div>
            <LineupThumbs cards={cards} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Lineup;

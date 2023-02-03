import * as React from "react";
import Image from "next/image";
import { LineupCard } from "../../../common/data/lineupData";
import { getDate } from "@/common/utils";
import cn from "@/common/cn";
import styles from "./style.module.css";

type Props = {
  card: LineupCard;
};

type TagProps = {
  className: string;
  key: string;
  to?: string;
};

const block = cn("lineup-thumb");

const LineupThumb = ({ card }: Props) => {
  const { id: artistId, name, surname, imgSrc, location, date, live } = card;

  const [isLoading, setIsLoading] = React.useState(true);
  const imgAlt = [name, surname, location, getDate(date)]
    .filter((str) => Boolean(str))
    .join(" ");

  const tagProps: TagProps = {
    className: block(),
    key: artistId,
  };

  const Tag = artistId.includes("secret") ? "div" : "div";

  // if (!artistId.includes('secret')) {
  //   tagProps.to = generatePath(ROUTES.artist, { artistId });
  // }

  return (
    // eslint-disable-next-line
    // @ts-ignore (`To` is optional but always exist for link)
    <Tag {...tagProps} className={styles["lineup-thumb"]}>
      <div className={styles["imgae-container"]}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          placeholder="blur"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className={block("info")}>
        <div className={block("name")}>
          <span className={block("name-wrapper")}>{name}</span>
          {surname && <span className={block("name-wrapper")}>{surname}</span>}
          {live && <span className={block("name-wrapper")}>live</span>}
        </div>
        <div className={block("aux")}>
          {location && <span className={block("aux-wrapper")}>{location}</span>}
          <span className={block("aux-wrapper")}>{getDate(date)}</span>
        </div>
      </div>
    </Tag>
  );
};

export default LineupThumb;

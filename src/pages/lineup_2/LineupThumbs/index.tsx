import * as React from 'react';
import LineupThumb from '../LineupThumb';
import { LineupCard } from '../lineupData';
import styles from './style.module.css';

type Props = {
  cards: LineupCard[];
};


const LineupThumbs = ({ cards }: Props) => {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <LineupThumb card={card} key={card.id} />
      ))}
    </div>
  );
};

export default LineupThumbs;

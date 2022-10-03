import React from 'react';
import s from './cards.module.css';
export interface ICards {
  id?: number;
  name: string;
  year?: string;
  plot?: string;
  image?: string;
}
const Cards = (props: { cards: ICards }): JSX.Element => {
  const item = props.cards;
  return (
    <div className={s.card}>
      <div className={s.image}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={s.title}>
        <h1
          style={{
            fontSize: 25,
            margin: 0,
          }}
        >
          {item.name}
        </h1>
        <p>{item.year}</p>
      </div>
      <div className={s.plot}>{item.plot}</div>
    </div>
  );
};

export default Cards;

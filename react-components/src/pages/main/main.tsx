import Cards from 'components/Cards/cards';
import Search from 'components/SearchBar/search';
import React from 'react';
import { ICards } from '../../components/Cards/cards';

interface IProps {
  callback: (e: { target: { value: string } }) => void;
  dataArr: ICards[];
}

const MainPage = ({ callback, dataArr }: IProps) => {
  const arr = dataArr.map((card) => {
    return <Cards key={card.id} cards={card} />;
  });
  return (
    <>
      <Search callback={callback} />
      {arr};
    </>
  );
};

export default MainPage;

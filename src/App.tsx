import React from 'react';
import './App.css';
import { ICards } from './components/Cards/cards';
import MainPage from 'pages/main/main';
import HeaderApp from './components/header/header';

import avengers from './assets/img/avengers.jpg';
import topGun from './assets/img/topgun.jpg';
import leon from './assets/img/leon.jpg';
import fightClub from './assets/img/fightClub.jpg';
import interstellar from './assets/img/interstellar.jpg';
import readyPlayerOne from './assets/img/rpo.jpg';
import constantine from './assets/img/constantine.jpg';
import godfather from './assets/img/godfather.jpg';
import malena from './assets/img/malena.jpg';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from 'pages/pageNotFound/pageNoutFound';
import AboutUs from 'pages/about/about';

class App extends React.Component<unknown, { data: ICards[]; term: string }> {
  lc: JSON;
  constructor(props: unknown) {
    super(props);
    this.lc = JSON.parse(localStorage.getItem('term')!);

    this.state = {
      data: [
        {
          id: 1,
          name: 'The Avengers',
          year: '2012',
          plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          image: avengers,
        },
        {
          id: 2,
          name: 'Top Gun: Maverick',
          year: '2022',
          plot: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
          image: topGun,
        },
        {
          id: 3,
          name: 'Leon',
          year: '1994',
          plot: "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
          image: leon,
        },
        {
          id: 4,
          name: 'Fight Club',
          year: '1999',
          plot: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
          image: fightClub,
        },
        {
          id: 5,
          name: 'Interstellar',
          year: '2014',
          plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          image: interstellar,
        },
        {
          id: 6,
          name: 'Ready Player One',
          year: '2018',
          plot: 'When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.',
          image: readyPlayerOne,
        },
        {
          id: 7,
          name: 'The Godfather',
          year: '1972',
          plot: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
          image: godfather,
        },
        {
          id: 8,
          name: 'Malèna',
          year: '2000',
          plot: 'Amidst the war climate, a teenage boy discovering himself becomes love-stricken by Malèna, a sensual woman living in a small, narrow-minded Italian town.',
          image: malena,
        },
        {
          id: 9,
          name: 'Constantine',
          year: '2005',
          plot: "Supernatural exorcist and demonologist John Constantine helps a policewoman prove her sister's death was not a suicide, but something more.",
          image: constantine,
        },
      ],

      term: '',
    };

    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidMount() {
    const formData = JSON.parse(localStorage.getItem('term')!);
    if (formData) {
      this.setState(
        {
          term: formData,
        },
        () => {
          console.log('newState', this.state);
          localStorage.setItem('form', JSON.stringify(this.state));
        }
      );
    }
  }

  onChangeInput = (e: { target: { value: string } }) => {
    localStorage.setItem('term', JSON.stringify(e.target.value));
    const res = JSON.parse(localStorage.getItem('term')!);
    this.setState({
      term: res,
    });
  };

  render() {
    const { data, term } = this.state;

    const arr2 = data.filter((item) => {
      if (term?.length === 0) {
        return item;
      }

      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
    return (
      <div
        className="App"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          background: 'rgb(230, 230, 230)',
        }}
      >
        <HeaderApp />

        <Routes>
          <Route path="/" element={<MainPage callback={this.onChangeInput} dataArr={arr2} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;

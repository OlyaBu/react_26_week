import React from 'react';
import './App.css';
import './components/Heroes.css';
import Heroes from './components/Heroes';
import { getRoles } from '@testing-library/react';

const array= [
  { name: "Бэтмен",
   url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLs8OTgTBC22PAUuICe_l-5MzVcZvycZzoW9ctwbwqyWDFZ4JDhGjVa5zbRCAl_AT6OSY&usqp=CAU",
    realname: "Брюс Уэйн",
    universe: "DC comics",
    friends: "Робин, Бэтгерл",
    superpower: "интеллект,ловкость",
 id:"1",
 rate: JSON.parse(localStorage.getItem("1 rating")) || "",

  },

  { name: "Супермен",
    url: "https://cdnstatic.rg.ru/uploads/images/129/34/22/super.jpg",
    realname: "Кларк Кент",
    universe: "DC comics",
    friends: "собака",
    superpower: "полет",
    id:"2",
    rate: JSON.parse(localStorage.getItem("2 rating")) || "",

 
  },

  { name: "Железный человек",
    url: "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/56b2a921ff6dea56531fe2ed2f00efa0/100x64_3",
    realname: "Кларк Кент",
    universe: "Marvel Comics",
    friends: "Мстители",
    superpower: "высокий уровень интеллекта, широкие познания науки и техники",
    id:"3",
    rate: JSON.parse(localStorage.getItem("3 rating")) || "",
  },
];

class App extends React.Component {
  render() {
    return (
      <div className='App'>
{
  array.map((hero) =>
  <Heroes name={hero.name} url={hero.url} realname={hero.realname} 
  universe={hero.universe} friends={hero.friends} superpower={hero.superpower}></Heroes>
  )
}
      </div>
   
    );
  }
}
export default App;

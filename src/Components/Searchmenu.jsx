import React from 'react';
import styles from '../Styles/Mainstyle.module.css';
import { MyHoleData } from '../Context/CountryContext';
const Searchmenu = () => {
  const { FilterLithuniaArea, FilterOreaniaRegion, Sort, SortByCountryName } =
    MyHoleData();
  return (
    <div className={styles.Search_Container}>
      <div className={styles.Search_Left}>
        <button onClick={() => FilterLithuniaArea()}>
          {' '}
          smaller than Lithuania by area
        </button>
        <button onClick={() => FilterOreaniaRegion()}>“Oceania” region.</button>
      </div>
      <div className={styles.Search_Right}>
        {Sort ? (
          <button onClick={() => SortByCountryName()}>Filter Assending</button>
        ) : (
          <button onClick={() => SortByCountryName()}>Filter Dessending</button>
        )}
      </div>
    </div>
  );
};

export default Searchmenu;

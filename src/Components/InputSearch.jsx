import React from 'react';
import styles from '../Styles/Mainstyle.module.css';
import { MyHoleData } from '../Context/CountryContext';
const InputSearch = () => {
  const { setSearch, setRecords, Data } = MyHoleData();
  return (
    <div className={styles.Input_Container}>
      <input
        type="text"
        placeholder="Enter Country"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => {
          setRecords(Data);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default InputSearch;

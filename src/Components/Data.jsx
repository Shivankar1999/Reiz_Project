import React from 'react';
import styles from '../Styles/Mainstyle.module.css';
import { MyHoleData } from '../Context/CountryContext';
import DataList from '../Pages/DataList';
const Data = () => {
  const { Records, Loading } = MyHoleData();

  return (
    <div className={styles.Data_Container}>
      <div className={styles.Data_Box}>
        {Loading ? <p>Loading...</p> : <DataList Records={Records} />}
      </div>
    </div>
  );
};

export default Data;

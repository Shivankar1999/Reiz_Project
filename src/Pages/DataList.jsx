import React from 'react';
import styles from '../Styles/Mainstyle.module.css';
import { MyHoleData } from '../Context/CountryContext';
const DataList = ({ Records }) => {
  const { Search } = MyHoleData();
  return (
    <>
      {Records.filter((ele) => {
        return Search.toLowerCase() === ''
          ? ele
          : ele.name.toLowerCase().includes(Search);
      }).map((ele, i) => {
        return (
          <section className={styles.Main_Data_List} key={i}>
            <p>
              <b>Country Name :-</b>
              {ele.name}
            </p>
            <p>
              <b>Region Name :-</b>
              {ele.region}
            </p>
            <p>
              <b>Area :-</b>
              {ele.area}
            </p>
          </section>
        );
      })}
    </>
  );
};

export default DataList;

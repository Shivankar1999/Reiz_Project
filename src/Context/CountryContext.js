import React, { createContext, useContext, useState, useEffect } from 'react';
import { FetchAllCountryData } from '../API/Index';
export const CountryData = createContext();

export const MyHoleData = () => {
  return useContext(CountryData);
};

export const CountryProvider = (props) => {
  const [Data, setData] = useState([]);
  const [Records, setRecords] = useState([]);
  const [Search, setSearch] = useState('');
  const [Sort, setSort] = useState(true);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    FetchAllCountryData().then((data) => {
      setData(data);
      setRecords(data);

      console.log(data);
      setLoading(false);
    });
  }, []);

  const FilterLithuniaArea = () => {
    let LithuniaData = Data.filter(
      (ele) => ele.name.toLowerCase() === 'lithuania'
    );
    console.log(LithuniaData[0].area);
    console.log(Data, 'Global L');
    let ndata = Data.filter((ele) => LithuniaData[0].area > ele.area);
    setRecords(ndata);
  };

  const FilterOreaniaRegion = () => {
    let ndata = Data.filter((ele) => ele.region === 'Oceania');
    setRecords(ndata);
    console.log(Data, 'Global O');
  };

  const SortByCountryName = () => {
    if (Sort === false) {
      let ndata = Records.slice(0).sort((a, b) =>
        b.name.toLowerCase().localeCompare(a.name.toLowerCase())
      );
      // console.log(ndata);
      setRecords(ndata);
      setSort(true);
    }
    if (Sort === true) {
      let ndata = Records.slice(0).sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
      // console.log(ndata);
      setRecords(ndata);
      setSort(false);
    }
  };

  return (
    <CountryData.Provider
      value={{
        Data,
        Records,
        setRecords,
        Loading,
        setLoading,
        FilterLithuniaArea,
        FilterOreaniaRegion,
        Search,
        setSearch,
        setSort,
        Sort,
        SortByCountryName,
      }}
    >
      {props.children}
    </CountryData.Provider>
  );
};

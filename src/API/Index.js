export const FetchAllCountryData = async () => {
  const response = fetch(
    'https://restcountries.com/v2/all?fields=name,region,area'
  ).then((res) => res.json());
  return await response;
};

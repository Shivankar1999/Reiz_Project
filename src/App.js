import InputSearch from './Components/InputSearch';
import Searchmenu from './Components/Searchmenu';
import Data from './Components/Data';
import styles from './Styles/Mainstyle.module.css';
function App() {
  return (
    <div className={styles.Main_Container}>
      <InputSearch />
      <Searchmenu />
      <Data />
    </div>
  );
}

export default App;

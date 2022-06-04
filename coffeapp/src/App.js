import logo from './logo.svg';
import './App.css';
import CoffeeOrderTable from './modules/components/CoffeeOrderTable';
import {getCoffeaction} from './modules/actions/getCoffeaction'

function App() {
  return (
    <>
    <CoffeeOrderTable/>
    </>
  );
}

export default App;

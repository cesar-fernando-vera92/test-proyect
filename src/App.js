import './App.css';
import ItemListContainer from './components/ItemListConteiner/ItemListenerConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailConteiner />
      
    </div>
  );
}

export default App;


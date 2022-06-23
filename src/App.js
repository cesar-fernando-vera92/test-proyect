import './App.css';
import ItemListContainer from './components/ItemListConteiner';
import NavBar from './components/NavBar/index';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a mi pagina"}/>
    </div>
  );
}

export default App;

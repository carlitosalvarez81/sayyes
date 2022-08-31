
import './App.css';
import NavBar from"./components/NavBar"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          SAY YES!
        </h1>
        <NavBar/>
      </header>
      <ItemListContainer greeting="Este es el msj" />
    </div>
  );
}

export default App;

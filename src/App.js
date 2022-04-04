import './css/App.css';
import Game from './components/game';
import bg from './assets/bg.jpg';
function App() {
  return (
    <div className="App" style={{background: bg}}>
        <div className="instructions">
            <h1>Cellular-Computer</h1>
            <p>
                Connect each organelle, biomolecule or transportation system, with the corresponding PC component or function
            </p>
        </div>
      <Game />
    </div>
  );
}
// Todo: Correct pop-up (with Images) (Only images or text too? (we only say text)), images bellow functions

export default App;

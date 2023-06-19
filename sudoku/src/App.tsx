import "./App.css";
import Board from "./components/board/Board";

function App() {
  return (
    <div className="app">
      <div className="title">
        <h3>Sudoku!</h3>
        <Board></Board>
      </div>
    </div>
  );
}

export default App;

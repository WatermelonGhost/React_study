import "./App.css"; // 다른 컴포넌트에 영항을 줌
import Hello from "./component/Hello";
// import Welcome from "./component/Welcome";
// import styles from "./App.module.css"; // 다른 컴포넌트에 영향을 주지 않음

function App() {

  return (
    <div className="App">
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}

export default App;
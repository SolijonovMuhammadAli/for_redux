import { Card } from "antd";
import "./App.css";
import Action from "./redux/Action";
import Count from "./redux/Count";
//import Language from "./redux/Language";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card className="card">
          {/* <Language /> */}
          <Count />
          <Action />
        </Card>
      </header>
    </div>
  );
}

export default App;

import { Card } from 'antd';
import Hello from './components/Hello/HelloFunction';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card
        style={{ width: '50%', minWidth: 300 }}
      >
        <p>React Demo</p>
      </Card>
      <Hello
        style={{ marginTop: 50 }}
        name="TypeScript"
        enthusiasmLevel={10}
      />
    </div>
  );
}

export default App;

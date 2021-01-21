import './App.css';
import { ColorProvider } from './contexts/ColorContext'
import Container from './Container'

function App() {
  return (
    <ColorProvider>
    <div className="App">
      <Container />
    </div>
  </ColorProvider>
  );
}

export default App;

import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import DynamicClass from './components/DynamicClass';

function App() {

  const n = 8;
  const [name] = useState('Guilherme')

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS DE COMPONENTE */}
      <MyComponent />
      <p>Este paragráfo é do App.js</p>
      <p className="my-comp-paragraph">Este parágrafo é do App.js com Class.</p>
      {/* CSS INLINE STYLE */}
      <p style={{ backgroundColor: "blue", color: "white" }}>Este elemento foi estilizado de forma inline. </p>
      {/* CSS INLINE STYLE DINÂMICO */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>CSS Dinâmico (Número)</h2>
      <h2 style={name === 'Guilherme' ? { color: "green" } : { color: "pink" }}>CSS Dinâmico (Nome)</h2>
      {/* CLASSES DINÂMICAS */}
      <DynamicClass />
    </div>
  );
};

export default App;

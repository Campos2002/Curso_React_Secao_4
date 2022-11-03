import { useState } from "react"

const DynamicClass = () => {

  const [titleColor, setColor] = useState(true);

  return (
    <div>
      <h2 className={titleColor ? 'true-blue-title' : 'false-red-title'}>Este é um exemplo de Classes Dinâmicas</h2>
      <button onClick={() => setColor(false)}>Vermelho</button>
      <button onClick={() => setColor(true)}>Azul</button>
    </div>
  );
};

export default DynamicClass;
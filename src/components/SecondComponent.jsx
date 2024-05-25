import React, { useState } from 'react';

export const SecondComponent = () => {
  const [name, setName] = useState('Andrés Fernández');
  const [isChangedName, setIsChangedName] = useState(false);
  const changeName = () => {
    if (isChangedName) {
      setName('Andrés Fernández');
    } else {
      setName('Juana de Arco');
    }
    setIsChangedName(!isChangedName);
  };
  return (
    <div>
      <h2>SecondComponent</h2>
      <p>{name}</p>
      <div>
        <button className="btn" onClick={changeName}>
          Cambiar nombre
        </button>
      </div>
    </div>
  );
};

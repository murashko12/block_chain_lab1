import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function App() {
  const [data, setData] = useState('');
  const [signature, setSignature] = useState('');
  const [publicKey, setPublicKey] = useState('');

  // Загрузка открытого ключа из файла
  // const loadPublicKey = async () => {
  //   const response = await fetch('https://yadi.sk/d/oKeyFio.pub');
  //   const key = await response.text();
  //   setPublicKey(key);
  // };

  // Создание цифровой подписи
  const createSignature = () => {
    const hash = CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
    setSignature(hash);
  };

  // Проверка цифровой подписи
  const verifySignature = () => {
    const hash = CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
    console.log(hash)
    console.log(signature)
    if (hash === signature) {
      alert('Подпись верна!');
    } else {
      alert('Подпись неверна!');
    }
  };

  return (
    <div>
      <h1>Цифровая подпись</h1>
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Введите данные"
      />
      <button onClick={createSignature}>Создать подпись</button>
      <button onClick={verifySignature}>Проверить подпись</button>
      {/* <button onClick={loadPublicKey}>Загрузить открытый ключ</button> */}
      <p>Подпись: {signature}</p>
    </div>
  );
}

export default App;
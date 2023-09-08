import './App.css';

function App() {
  const cryptocurrencies = [
    { name: 'Bitcoin', price: 40000 },
    { name: 'Ethereum', price: 2800 },
    { name: 'Litecoin', price: 150 },
  ];

  

  return (
    <div className="App">
      <h1>Here is the Store</h1>
      <div className="crypto-container">
        {cryptocurrencies.map((crypto, index) => (
          <div className="crypto-card" key={index}>
            <h2>{crypto.name}</h2>
            <p>Price: ${crypto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

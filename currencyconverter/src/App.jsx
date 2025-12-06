import { useEffect, useState } from "react";
import InputBox from "../Components/InputBox";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => setRates(data.rates))
      .catch((err) => console.error("Error fetching rates:", err));
  }, []);

  useEffect(() => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return;

    const converted = (Number(amount) / rates[fromCurrency]) * rates[toCurrency];
    setResult(converted.toFixed(2));
  }, [amount, fromCurrency, toCurrency, rates]);

  return (
    <>
      <h1 className="bg-blue-500 text-center text-3xl font-bold  p-5 text-white shadow-lg">
         Currency Converter
      </h1>

      <div className="flex flex-row justify-between items-center p-6 max-w-2xl mx-auto mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl gap-6">
        
        <div className="flex flex-col space-y-4 w-2/3">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={Object.keys(rates)}
            selectedCurrency={fromCurrency}
            onAmountChange={setAmount}
            onCurrencyChange={setFromCurrency}
          />

          <InputBox
            label="To"
            amount={result || ""}
            currencyOptions={Object.keys(rates)}
            selectedCurrency={toCurrency}
            onCurrencyChange={setToCurrency}
          />

          <button
            className="mx-auto px-4 py-2 bg-black text-white rounded-full font-semibold shadow hover:bg-blue-800 transition"
            onClick={() => {
              const temp = fromCurrency;
              setFromCurrency(toCurrency);
              setToCurrency(temp);
            }}
          >
            ⇅ Swap
          </button>
        </div>

        <div className="w-1/3 text-center">
          {result && (
            <p className="text-lg font-semibold text-gray-700">
              Live Conversion: <br />
              {amount} {fromCurrency} ={" "}
              <span className="text-blue-600">{result} {toCurrency}</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

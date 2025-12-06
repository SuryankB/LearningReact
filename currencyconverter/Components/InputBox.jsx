// src/components/InputBox.jsx
export default function InputBox({
  label,
  amount,
  currencyOptions = [],
  selectedCurrency,
  onAmountChange,
  onCurrencyChange,
}) {
  return (
    <div className="flex items-end justify-between bg-white shadow-md p-4 rounded-lg mb-3 gap-4">
      <div className="flex flex-col w-2/3">
        {label && <label className="text-gray-700 font-medium mb-1">{label}</label>}

        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0"
        />
      </div>

      <div className="flex flex-col w-1/3">
        <label className="text-gray-700 font-medium mb-1">Currency</label>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="px-2 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

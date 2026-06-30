export default function NewTrade() {
  return (
    <div style={{ padding: 20 }}>
      <h1>New Trade</h1>

      <select>
        <option>XAUUSD</option>
        <option>EURUSD</option>
        <option>NAS100</option>
      </select>

      <select>
        <option>Buy</option>
        <option>Sell</option>
      </select>

      <input placeholder='Entry' />
      <input placeholder='Exit' />
      <input placeholder='SL' />
      <input placeholder='TP' />

      <button style={{ background: 'var(--primary)', color: 'white', padding: 10 }}>
        Save Trade
      </button>
    </div>
  );
}

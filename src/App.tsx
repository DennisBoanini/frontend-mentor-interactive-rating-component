import { useState } from 'react'
import './App.css'
import { Rating } from './components/Rating';
import { ThankYou } from './components/ThankYou';

function App() {
  const [rate, setRate] = useState<number>();
  return (
    <section className={'container'}>
      {!rate && <Rating onRateSelected={rate => setRate(rate)} />}
      {rate && (
        <ThankYou rate={rate} reset={() => setRate(undefined)} />
      )}
    </section>
  );
}

export default App

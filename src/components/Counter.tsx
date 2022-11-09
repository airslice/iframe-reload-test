import {useState} from 'react';

function Counter({title}:{title:number}) {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="card">
      <span className="index">{title}</span>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <iframe src='https://reearth.io'></iframe>
    </div>
  )
}

export default Counter
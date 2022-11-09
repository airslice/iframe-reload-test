import { useCallback, useState, useRef } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [list, setList] = useState([{ title: 1 }, { title: 2 }, { title: 3 }]);
  const eleCount = useRef(3);

  const lastToFirst = useCallback(() => {
    const [tar] = list.splice(list.length - 1, 1);
    list.unshift(tar);
    setList([...list]);
  }, []);

  const asyncLastToFirst = useCallback(() => {
    const [tar] = list.splice(list.length - 1, 1);
    setList([...list]);
    setTimeout(() => {
      list.unshift(tar);
      setList([...list]);
    }, 0);
  }, []);

  const firstToLast = useCallback(() => {
    const [tar] = list.splice(0, 1);
    list.push(tar);
    setList([...list]);
  }, []);

  const insert = useCallback(() => {
    eleCount.current += 1;
    const tar = {
      title: eleCount.current,
    };
    list.unshift(tar);
    setList([...list]);
  }, []);

  const append = useCallback(() => {
    eleCount.current += 1;
    const tar = {
      title: eleCount.current,
    };
    list.push(tar);
    setList([...list]);
  }, []);

  return (
    <div className="App">
      <button onClick={insert}>Insert</button>
      <button onClick={append}>Append</button>
      <button onClick={lastToFirst}>Last to first</button>
      <button onClick={firstToLast}>First to last</button>
      <button onClick={asyncLastToFirst}>Async Last to first</button>

      <div className="card">
        {list.map((l) => (
          <Counter key={l.title} title={l.title} />
        ))}
      </div>
    </div>
  );
}

export default App;

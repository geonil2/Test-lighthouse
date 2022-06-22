import logo from './logo.svg';
import './App.css';
import {useCallback, useEffect, useState, useTransition, Suspense} from "react";
import {debounce} from "lodash/function";

const SUSPENSE_CONFIG = { timeoutMs: 1000 };

function App() {
  const [text, setText] = useState('');
  const [updateData, setUpdateData] = useState('김건일');
  const [isPending, startTransition] = useTransition(SUSPENSE_CONFIG);

  const handleChange = (e) => {
    setText(e.target.value)
    delaySet(e.target.value);
  }

  // const delaySet = useCallback(
  //   debounce((text) => {
  //     setUpdateData(text)
  // }, 1000), [updateData])

  const delaySet = () => {
    startTransition(
      debounce((text) => {
        setUpdateData(text)
      }, 1000)
    )
  }

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleChange}/>
      {isPending ? <div>Loading...</div> : <div>{updateData}</div>}
      {/*<Suspense fallback={<div>로딩중~</div>}>*/}
      {/*</Suspense>*/}
    </div>
  );
}

export default App;

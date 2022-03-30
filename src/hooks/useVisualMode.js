import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace) {
      setMode((prev) => newMode);
      let replaceHistoryArr = [...history];
      replaceHistoryArr[replaceHistoryArr.length - 1] = mode;
      setHistory((prev) => replaceHistoryArr);
    } else {
      setMode((prev) => newMode);
      let newHistoryArr = [...history];
      newHistoryArr.push(newMode);
      setHistory((prev) => newHistoryArr);
    }
  }

  function back() {
    let newHistoryArr = [...history];
    newHistoryArr.pop(mode);
    setHistory((prev) => newHistoryArr);
    if (history.length > 1) {
      setMode((prev) => newHistoryArr[newHistoryArr.length - 1]);
    }
  }

  return { mode, transition, back };
}

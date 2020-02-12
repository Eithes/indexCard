import { useState, useEffect, } from 'react';

function useLStorageState(key, defaultVal) {   
  const [ LSState, seLSState ] = useState(() => {
    let initialLSState;
    try {
      initialLSState = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal));
    }
    catch(e) {
      initialLSState = defaultVal;
    }
    return initialLSState;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(LSState));
  }, [LSState]);

  console.log(LSState);

  return [LSState, seLSState];

}

export default useLStorageState;
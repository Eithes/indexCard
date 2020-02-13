import { useState, useEffect, } from 'react';

function useLStorageState(key, defaultVal) {   
  const [ LSState, setLSState ] = useState(() => {
    console.log(defaultVal);
    let initialLSState;
    try {
      initialLSState = JSON.parse(
        window.localStorage.getItem(key)) || defaultVal;
    }
    catch(e) {
      initialLSState = defaultVal;
    }
    console.log(initialLSState);
    return initialLSState;
  });

  // useEffect(() => {
  //   window.localStorage.setItem(key, JSON.stringify(LSState));
  // }, [LSState]);
  // useEffect(() => {
  //   window.localStorage.setItem(key, JSON.stringify(LSState));
  // }, []);

  console.log(LSState);

  return [LSState, setLSState];

}

export default useLStorageState;
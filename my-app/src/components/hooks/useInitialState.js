import React, { useState } from 'react';


function useInitialState(initcards) {
  const [initialCards, changeInitialCards] = useState(initcards);     
  return { initialCards, changeInitialCards }
}

export default useInitialState;





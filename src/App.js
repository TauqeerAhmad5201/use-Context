import React, {createContext} from "react";
import ChildA from './components/ChildA'

const data_name = createContext(); 
const data_gender = createContext(); 

function App(){
  const name = "Tauqeer Ahmad"
  const gender = "Male"
  return (
    <>
    <data_name.Provider value={name}>
    <data_gender.Provider value={gender}> 
    <ChildA />
    </data_gender.Provider>
    </data_name.Provider> 
    </>
  ); 
  
}

export default App; 
export {data_gender, data_name}
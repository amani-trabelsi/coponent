import React from 'react';
import './App.css';
import MyAdress from "./component/Profile/Address";
import MyName from "./component/Profile/FullName";
import MyPhoto from "./component/Profile/ProfilePhoto";

function App() {
  return (
     <div className='page'>
   <MyAdress />
   <MyName />
   <MyPhoto />

 </div>
 
   
  );
}

export default App;

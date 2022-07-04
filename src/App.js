import { useEffect, useState } from 'react';
import Content from './components/Content';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  // props
  const [ data , setData ] = useState(JSON.parse(localStorage.getItem('bank-app-data')))
  const [notLoggedIn, setNotLoggedIn] = useState(JSON.parse(localStorage.getItem('bank-app-not-logged-in')))
  
  useEffect(() => {
    localStorage.setItem('bank-app-data', JSON.stringify(data))
    const usersData = JSON.parse(localStorage.getItem('bank-users-data'))
    const indexOfDataToSave = usersData.findIndex((obj => obj.id == data.id))
    
    console.log('usersDataToSave', indexOfDataToSave)
    const newData = usersData.map((item ,index) => { return index == indexOfDataToSave ? data : item; });
    console.log(newData)

    localStorage.setItem('bank-users-data', JSON.stringify(newData))
  }, [data]);


  useEffect( () => {
    localStorage.setItem('bank-app-not-logged-in', JSON.stringify(notLoggedIn))
  }, [notLoggedIn])


  // rendering
  if(notLoggedIn){
    return (
      <div className="grid grid-cols-12 grid-rows-12 font-Quicksand min-h-screen">
        <Navbar username='' logInMode={notLoggedIn}/>
        <LogIn notLoggedIn={notLoggedIn} setNotLoggedIn={setNotLoggedIn} setData={setData}/>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-12 grid-rows-12 font-Quicksand min-h-screen">
        <Navbar username={data.username} setNotLoggedIn={setNotLoggedIn} notLoggedIn={notLoggedIn}/>
        <Sidebar />
        <Content data={data} setData={setData} />
      </div>
    );
  }

}

// localStorage.setItem('bank-app-data', JSON.stringify({
//   username: 'Joco',
//   password: '123',
//   email: 'test@test.com',
//   balance: 100000,
//   account_type: 'Savings',
//   account_number: '111111',
//   expenseItems: [],
//   id: 1
// }))
// localStorage.setItem('bank-users-data', JSON.stringify(
//   [
//     {
//       id: 1,
//       username: 'tester1',
//       password: 'tester1',
//       email: 'tester1@test.com',
//       balance: 100000,
//       account_type: 'Savings',
//       account_number: '1111',
//       expenseItems: []
//     },
//     {
//       id: 2,
//       username: 'tester2',
//       password: 'tester2',
//       email: 'tester2@test.com',
//       balance: 50000,
//       account_type: 'Savings',
//       account_number: '1234',
//       expenseItems: []
//     },
//     {
//       id: 3,
//       username: 'tester3',
//       password: 'tester3',
//       email: 'tester3@test.com',
//       balance: 1000,
//       account_type: 'Savings',
//       account_number: '5678',
//       expenseItems: []
//     },
//   ]))

export default App;

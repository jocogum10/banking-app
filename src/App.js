import { useEffect, useState } from 'react';
import Content from './components/Content';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
  // props
  const [ data , setData ] = useState(JSON.parse(localStorage.getItem('bank-app-data')))
  const [notLoggedIn, setNotLoggedIn] = useState(JSON.parse(localStorage.getItem('bank-app-not-logged-in')))
  
  useEffect(() => {
    localStorage.setItem('bank-app-data', JSON.stringify(data))
  }, [data]);


  useEffect( () => {
    localStorage.setItem('bank-app-not-logged-in', JSON.stringify(notLoggedIn))
  }, [notLoggedIn])

  // rendering
  if(notLoggedIn){
    return (
      <div className="grid grid-cols-12 grid-rows-12 font-Quicksand min-h-screen">
        <Navbar username='' logInMode={notLoggedIn}/>
        <LogIn notLoggedIn={notLoggedIn} setNotLoggedIn={setNotLoggedIn}/>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-12 grid-rows-12 font-Quicksand min-h-screen">
        <Navbar username={data.username} setNotLoggedIn={setNotLoggedIn}/>
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
//   expenseItems: []
// }))

export default App;

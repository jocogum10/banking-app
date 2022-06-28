import { useEffect, useState } from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  // variables
  const [ data, setData ] = useState({
    username: 'Joco Gum',
    password: 'test123',
    email: 'test@example.com',
    balance: '10000.00',
    account_type: 'Savings',
    account_number: '1111111',
    expenseItems: [{cost: '', reason:''},],
  })

  useEffect(() => {
    console.log('App data:', data)
  }, [data]);


  // return
  return (
    <div className="grid grid-cols-12 grid-rows-12 font-Quicksand min-h-screen">
      <Navbar username={data.username} />
      <Sidebar />
      <Content data={data} setData={setData}/>
    </div>
  );
}

export default App;

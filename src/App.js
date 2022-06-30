import { useEffect, useState } from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// console.log('Setting data...')
// localStorage.setItem('bank-app-data', JSON.stringify({
//   username: 'Joco Gum',
//   password: 'test123',
//   email: 'test@example.com',
//   balance: '100000.00',
//   account_type: 'Savings',
//   account_number: '1111111',
//   expenseItems: [/*{transaction: '', reason:''}*/],
// }));

function App() {
  // variables
  const [ data , setData ] = useState(JSON.parse(localStorage.getItem('bank-app-data')))

  useEffect(() => {
    console.log('Updating data...')
    localStorage.setItem('bank-app-data', JSON.stringify(data))
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

import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const user = {
    name : 'Carlos Joco Gumanay',
    accounts: [
      {account_type : 'Savings', account_number: '12345678', amount : '10000.00'}, 
      {account_type : 'Checking', account_number: '1234512', amount : '20000.00'}, 
      {account_type : 'Savings', account_number: '3246234', amount : '450452.00'}, 
      {account_type : 'Checking', account_number: '7896389', amount : '4527.51'}, 
      {account_type : 'Savings', account_number: '8937453', amount : '54289274.54'}, 
      {account_type : 'Checking', account_number: '83987963', amount : '7827452.96'}, 
    ],
    username: 'tester',
    password: 'test123',
    email: 'test@test.com'
  }
  return (
    <div className="grid grid-cols-12 grid-rows-12 font-Quicksand min-h-screen">
      <Navbar name={user.name} />
      <Sidebar />
      <Content accounts={user.accounts} />
    </div>
  );
}

export default App;

import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  // variables
  const user = {
    username: 'tester',
    password: 'test123',
    email: 'test@test.com',
    accounts: [
      {account_type : 'Savings', account_number: '12345678', balance : '10000.00'}, 
      {account_type : 'Checking', account_number: '1234512', balance : '20000.00'}, 
      {account_type : 'Savings', account_number: '3246234', balance : '450452.00'}, 
      {account_type : 'Checking', account_number: '7896389', balance : '4527.51'}, 
      {account_type : 'Savings', account_number: '8937453', balance : '54289274.54'}, 
      {account_type : 'Checking', account_number: '83987963', balance : '7827452.96'}, 
    ],
  }
  const expenseItem = {
    name: '',
    cost: '',
    owner: '',
  }

  // return
  return (
    <div className="grid grid-cols-12 grid-rows-12 font-Quicksand min-h-screen">
      <Navbar name={user.username} />
      <Sidebar />
      <Content accounts={user.accounts} name={user.username} />
    </div>
  );
}

export default App;

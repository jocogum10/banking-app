import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const user = {
    name : 'Carlos Joco Gumanay',
    accounts: [
      {account_type : 'Savings', account_number: '12345678', amount : '10000'}, 
      {account_type : 'Checking', account_number: '87654321', amount : '20000'}, 
    ],
  }
  return (
    <div className="grid grid-cols-12 grid-rows-12 font-Quicksand bg-emerald-100 h-screen">
      <Navbar name={user.name} />
      <Sidebar />
      <Content accounts={user.accounts} />
    </div>
  );
}

export default App;

import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const account = {
    name : 'Carlos Joco Gumanay',
    account_type : 'Savings',
    amount : '10000'
  }
  return (
    <div className="grid grid-cols-12 grid-rows-12 font-Quicksand bg-emerald-100 h-screen">
      <Navbar name={account.name} />
      <Sidebar />
      <Content account_type={account.account_type} amount={account.amount} />
    </div>
  );
}

export default App;

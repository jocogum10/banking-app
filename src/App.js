import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const user = {
    name : 'Carlos Joco Gumanay',
    account: [{account_type : 'Savings', amount : '10000'}],
  }
  return (
    <div className="grid grid-cols-12 grid-rows-12 font-Quicksand bg-emerald-100 h-screen">
      <Navbar name={user.name} />
      <Sidebar />
      <Content account={user.account} />
    </div>
  );
}

export default App;

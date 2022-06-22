import Content from './components/Content';
import Logo from './components/Logo';
import Sidebar from './components/Sidebar';

function App() {
  const account = {
    name: 'Carlos',
    
  }
  return (
    <div className="grid grid-cols-16 grid-rows-16 font-Quicksand bg-emerald-100 h-screen">
      <Logo />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import Content from './components/Content';
import DataNotification from './components/DataNotification';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
  // props
  const [ data , setData ] = useState(JSON.parse(localStorage.getItem('bank-app-data')))
  const [notificationVisible, setNotificationVisible] = useState(false)

  useEffect(() => {
    localStorage.setItem('bank-app-data', JSON.stringify(data))
  }, [data]);

  useEffect(() => {
    setNotificationVisible(true)
  }, [notificationVisible]);

  // rendering
  const notLoggedIn = false;
  if(notLoggedIn){
    return (
      <div className="flex flex-col justify-center items-center font-Quicksand w-full">
        <Navbar username='' logInMode={notLoggedIn}/>
        <LogIn />
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-12 grid-rows-12 font-Quicksand min-h-screen">
        <Navbar username={data.username} />
        <Sidebar />
        <Content data={data} setData={setData} setNotificationVisible={setNotificationVisible}/>
        <DataNotification visible={notificationVisible}/>
      </div>
    );
  }
}

export default App;

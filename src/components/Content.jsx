import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "../pages/Account";
import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";
import Payments from "../pages/Payments";
import SendMoney from "../pages/SendMoney";


function Content (props) {
    const {data: {username, balance, account_type, account_number}, setData} = props

    const homePage = <Home username={username} />
    const accountPage = <Account 
                    balance={balance} 
                    account_type={account_type} 
                    account_number={account_number} 
                    />
    const sendMoneyPage = <SendMoney balance={balance} account_type={account_type} account_number={account_number} />
    const paymentsPage = <Payments balance={balance} account_type={account_type} account_number={account_number} setData={setData}/>
    const comingSoon = <ComingSoon />

    return (
        <BrowserRouter>
            <div className="bg-emerald-100 col-span-10 row-start-2 row-span-full flex flex-wrap justify-center content-start">
                <Routes>
                    <Route path='/banking-app' element={homePage}/>
                    <Route path='/' element={homePage}/>
                    <Route path='/my-account' element={accountPage}/>
                    <Route path='/send-money' element={sendMoneyPage}/>
                    <Route path='/payments' element={paymentsPage}/>
                    <Route path='/investments' element={comingSoon}/>
                    <Route path='/account-maintenance' element={comingSoon}/>
                    <Route path='/life--health-protection' element={comingSoon}/>
                    <Route path='/other-services' element={comingSoon}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Content;
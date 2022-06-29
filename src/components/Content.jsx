import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "../pages/Account";
import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";
import Payments from "../pages/Payments";
import SendMoney from "../pages/SendMoney";


function Content (props) {
    // const {data: {username, balance, account_type, account_number}, setData} = props
    const {data, setData} = props

    const homePage = <Home username={data.username} />
    const accountPage = <Account 
                    balance={data.balance} 
                    account_type={data.account_type} 
                    account_number={data.account_number} 
                    />
    const sendMoneyPage = <SendMoney balance={data.balance} account_type={data.account_type} account_number={data.account_number} />
    const paymentsPage = <Payments data={data} setData={setData}/>
    const comingSoon = <ComingSoon />

    return (
        <BrowserRouter>
            <div className="col-span-10 row-start-2 row-span-full flex flex-wrap justify-center content-start">
                <Routes>
                    <Route path='/banking-app' element={homePage}/>
                    <Route path='/' element={homePage}/>
                    <Route path='/my-account' element={accountPage}/>
                    <Route path='/send-money' element={sendMoneyPage}/>
                    <Route path='/payments' element={paymentsPage}/>
                    <Route path='/deposit' element={comingSoon}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Content;
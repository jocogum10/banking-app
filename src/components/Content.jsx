import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Account from "../pages/Account";
import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";
import Withdraw from "../pages/Withdraw";
import SendMoney from "../pages/SendMoney";
import Deposit from "../pages/Deposit";
import AccountMaintenance from "../pages/AccountMaintenance";
import LogIn from "./LogIn";




function Content (props) {
    const {data, setData, notLoggedIn, setNotLoggedIn } = props



    const homePage = <Home username={data.username} />
    const accountPage = <Account 
                    balance={data.balance} 
                    account_type={data.account_type} 
                    account_number={data.account_number} 
                    />
    const sendMoneyPage = <SendMoney balance={data.balance} account_type={data.account_type} account_number={data.account_number} />
    const withdrawPage = <Withdraw data={data} setData={setData} />
    const depositPage = <Deposit data={data} setData={setData} />

    const accountMaintenancePage = <AccountMaintenance data={data} setData={setData}/>

    // const logInPage = <LogIn notLoggedIn={notLoggedIn} setNotLoggedIn={setNotLoggedIn} setData={setData}/>
    const comingSoon = <ComingSoon />


    return (
        <BrowserRouter>
            <div className="bg-red-100 col-span-10 row-start-2 row-span-full flex flex-wrap justify-center content-start">
                <Routes>
                    <Route path='/banking-app' element={homePage}/>
                    {/* <Route path='/log-in' element={logInPage}/> */}
                    <Route path='/' element={homePage}/>
                    <Route path='/my-account' element={accountPage}/>
                    <Route path='/send-money' element={sendMoneyPage}/>
                    <Route path='/withdraw' element={withdrawPage}/>
                    <Route path='/deposit' element={depositPage}/>
                    <Route path='/account-maintenance' element={accountMaintenancePage}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Content;
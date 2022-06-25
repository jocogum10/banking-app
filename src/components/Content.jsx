import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "../pages/Account";
import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";


function Content ({name, accounts}) {
    
    const homePage = <Home name={name} />
    const accountPage = accounts.map((account) => {
        return <Account key={account.account_number} amount={account.amount} account_type={account.account_type} account_number={account.account_number}/>
    });
    const comingSoon = <ComingSoon className="text-bold flex justify-center items-center" />

    return (
        <BrowserRouter>
            <div className="bg-emerald-100 col-span-10 row-start-2 row-span-full flex flex-wrap justify-center content-start">
                <Routes>
                    <Route path='/' element={homePage}/>
                    <Route path='/my-account' element={accountPage}/>
                    <Route path='/transfer-money' element={comingSoon}/>
                    <Route path='/pay-bills' element={comingSoon}/>
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
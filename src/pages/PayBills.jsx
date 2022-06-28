import { useEffect, useState } from "react";

function PayBills (props) {
    // props
    const {accounts} = props

    // hooks
    const [selectedAccount, setSelectedAccount] = useState('');
    const [currentBalance, setCurrentBalance] = useState(0);
    useEffect(() => {
        const balance = accounts.find(account => (account.account_number === selectedAccount));
        if(balance){
            const accountBalance = balance.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            setCurrentBalance(accountBalance);
        } else {
            const firstAccount = accounts[0].balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            setCurrentBalance(firstAccount);
        }
        
    },[selectedAccount]);

    // event handlers
    function accountNumberSelected (e) {
        setSelectedAccount(e.target.value);
    }


    // rendering
    const accountNumber = accounts.map( (account) => {
        return <option className="text-emerald-900" key={account.account_number}>{account.account_number}</option>
    });

    

    return (
        <div className="container bg-emerald-300 rounded overflow-hidden m-10 p-10 flex flex-col">
            <h1 className="font-bold text-xl">Fill in the details</h1>
            <hr className="border-black" />
            <select name="account-number" className="p-1 my-1 h-10 rounded text-emerald-900" onChange={accountNumberSelected}>
                {accountNumber}
            </select>
            <span className="flex justify-between font-bold text-xl my-5">
                <p>Available Balance:</p> 
                <p>Php {currentBalance}</p>
            </span>
            <label htmlFor="amountTransfer">Amount to Pay</label>
            <input name="amountTransfer" type="number" className="appearance-none p-2 my-1 h-10 rounded placeholder-emerald-900 text-right" placeholder="0.00"/>
        </div>
    )
}

export default PayBills;
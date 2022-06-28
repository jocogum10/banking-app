import { useParams } from "react-router-dom";

function AccountDetails (props) {
    const {accounts} = props
    
    let { accountNumber } = useParams();

    const balance = accounts.find(account => (account.account_number === accountNumber));
    const accountBalance = balance.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const account = <h1 className="font-bold text-xl">{accountNumber} {accountBalance}</h1>

    return (
        <div className="container bg-emerald-300 rounded overflow-hidden m-10 p-10 flex flex-col">
            <h1 className="font-bold text-xl">Fill in the details</h1>
            <hr className="border-black" />
            <select name="account-number" className="p-1 my-1 h-10 rounded text-emerald-900">
                {accountNumber}
            </select>
            <span className="flex justify-between font-bold text-xl my-5">
                <p>Available Balance:</p> 
                <p>Php {accountBalance}</p>
            </span>
            <label htmlFor="amountTransfer">Amount to Pay</label>
            <input name="amountTransfer" type="number" className="appearance-none p-2 my-1 h-10 rounded placeholder-emerald-900 text-right" placeholder="0.00"/>
        </div>
    )
}

export default AccountDetails;
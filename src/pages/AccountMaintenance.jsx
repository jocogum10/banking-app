import { Fragment, useRef, useState } from "react";

function AccountMaintenance (props) {
    // props
    const {data, setData} = props

    //hooks
    const [clearHistoryButtonActive, setClearHistoryButtonActive] = useState(data.expenseItems.length === 0 ? false : true);

    const username = useRef(data.username);
    const password = useRef(data.password);
    const email = useRef(data.email);
    const account_number = useRef(data.account_number);
    const account_type = useRef(data.account_type);
    const historyCleared = useRef(clearHistoryButtonActive);

    // event handlers
    function saveAccountData (e) {
        e.preventDefault()
        console.log(clearHistoryButtonActive)
        const updatedData = {
            username: username.current.value ? username.current.value : data.username,
            password: password.current.value ? password.current.value : data.password,
            email: email.current.value ? email.current.value : data.email,
            balance: data.balance,
            account_type: account_type.current.value ? account_type.current.value : data.account_type,
            account_number: account_number.current.value ? account_number.current.value : data.account_number,
            expenseItems: historyCleared ? [] : data.expenseItems
        }
        console.log(updatedData)
        setData(updatedData)
    }

    function clearForm (e) {
        e.preventDefault()
        username.current.value = ''
    }

    function clearTransactionHistory (e) {
        e.preventDefault()
        setClearHistoryButtonActive(false)
    }

    // for rendering
    const formattedAmount = data.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const history = data.expenseItems.map( (data) => {
        return (
            <tr key={data.reason} className="text-center">
                <td>{data.reason}</td>
                <td>{data.transaction}</td>
            </tr>
        )
    })

    return (
            <div className="container shadow-md bg-red-300 rounded overflow-hidden m-10 p-10 flex flex-col">
                <h1 className="font-bold text-xl">Account Maintenance</h1>
                <hr className="border-black my-2" />
                <label htmlFor="username">Name:</label>
                <input name="username" type="text" className="appearance-none p-2 my-1 h-10 rounded placeholder-red-900" placeholder={data.username} ref={username} />
                <label htmlFor="password">Password:</label>
                <input name="password" type="password" className="appearance-none p-2 my-1 h-10 rounded placeholder-red-900" placeholder={data.password} ref={password}/>
                <label htmlFor="email">Email Address:</label>
                <input name="email" type="text" className="appearance-none p-2 my-1 h-10 rounded placeholder-red-900" placeholder={data.email} ref={email}/>
                <label htmlFor="account_number">Account Number:</label>
                <input name="account_number" type="text" className="appearance-none p-2 my-1 h-10 rounded placeholder-red-900 text-right" placeholder={data.account_number} ref={account_number} disabled/>
                <label htmlFor="balance">Balance:</label>
                <input name="balance" type="text" className="appearance-none p-2 my-1 h-10 rounded placeholder-red-900 text-right" placeholder={`Php ${formattedAmount}`} disabled/>
                <label htmlFor="account_type">Account Type:</label>
                <input name="account_type" type="text" className="appearance-none p-2 my-1 h-10 rounded placeholder-red-900" placeholder={data.account_type} ref={account_type} disabled/>
                <hr className="border-black my-2" />
                <span className="flex justify-around">
                <button className="bg-red-700 text-white hover:ring-2 hover:ring-red-700 my-1 rounded p-2 disabled:opacity-75 disabled:hover:ring-0" onClick={clearTransactionHistory} disabled={!clearHistoryButtonActive}>Clear Transaction History</button>
                </span>
                <hr className="border-black my-2" />
                <span className="flex justify-around">
                    <button className="bg-red-700 text-white hover:ring-2 hover:ring-red-700 my-1 rounded p-2" onClick={saveAccountData}>Save</button>
                    <button className="bg-red-700 text-white hover:ring-2 hover:ring-red-700 my-1 rounded p-2" onClick={clearForm}>Cancel</button>
                </span>

                <div className="shadow-md bg-white rounded overflow-hidden m-10 p-10 flex flex-col">
                    <h1 className="font-bold text-xl">Transaction History</h1>
                    <hr className="border-black my-2" />
                    <table className="table-auto">
                        <thead>
                            <tr>
                            <th>Reason</th>
                            <th>Transaction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history}
                        </tbody>
                    </table>
                </div>
            </div>
        
    )
}

export default AccountMaintenance;
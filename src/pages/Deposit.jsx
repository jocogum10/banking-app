import { useEffect, useRef, useState } from "react";

function Deposit (props) {
    // props
    const {data, setData} = props

    // hooks
    const [currentBalance, setCurrentBalance] = useState(data.balance)
    const [currentExpenseItems, setCurrentExpenseItems] = useState(data.expenseItems)

    const depositRef = useRef(null);
    const reasonDepositRef = useRef(null);

    useEffect( () => {
        setData( (prevData) => {
            return {
                ...prevData,
                balance: currentBalance, 
                expenseItems: currentExpenseItems
            }
        })
        depositRef.current.value = ''
        reasonDepositRef.current.value = ''
    }, [currentBalance, currentExpenseItems])


    // event handlers
    function addPayment (e) {
        e.preventDefault();
        setCurrentBalance( (prevBalance)=>{
            return (parseInt(prevBalance)+parseInt(depositRef.current.value))
        })
        setCurrentExpenseItems( (prevExpenseItems) => {
            const prevBalance = [...prevExpenseItems]
            prevBalance.push({transaction: '+'+depositRef.current.value, reason: reasonDepositRef.current.value})
            return (prevBalance)
        })
        
        
    }
    function clearForm (e) {
        e.preventDefault();
        depositRef.current.value = ''
        reasonDepositRef.current.value = ''
    }

    // for rendering
    const formattedAmount = currentBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


    return (
        <form className="container bg-emerald-300 rounded overflow-hidden m-10 p-10 flex flex-col">
            <h1 className="font-bold text-xl">Deposit</h1>
            <hr className="border-black" />
            <label htmlFor="account-number">Which account would you like to pay from:</label>
            <select name="account-number" className="p-1 my-1 h-10 rounded text-emerald-900">
                <option className="text-emerald-900">{data.account_number}</option>
            </select>
            <span className="flex justify-between font-bold text-xl my-5">
                <p>Available Balance:</p> 
                <p>Php {formattedAmount}</p>
            </span>
            <label htmlFor="amountToPay">Amount to Deposit</label>
            <input name="amountToPay" type="number" className="appearance-none p-2 my-1 h-10 rounded placeholder-emerald-900 text-right" placeholder="+Php 0.00" ref={depositRef} />
            <label htmlFor="reasonOfPayment">Reason of Deposit</label>
            <input name="reasonOfPayment" type="text" className="appearance-none p-2 my-1 h-10 rounded placeholder-emerald-900 text-right" placeholder="Reason" ref={reasonDepositRef} />
            <hr className="border-black" />
            <span className="flex justify-around">
                <button className="bg-emerald-700 text-white hover:ring-2 hover:ring-emerald-700 my-1 rounded p-2" onClick={addPayment}>Send</button>
                <button className="bg-emerald-700 text-white hover:ring-2 hover:ring-emerald-700 my-1 rounded p-2" onClick={clearForm}>Cancel</button>
            </span>
        </form>
    )
}

export default Deposit;
import { useEffect, useRef, useState } from "react";

function Payments (props) {
    // props
    const {data, setData} = props

    // hooks
    const [currentBalance, setCurrentBalance] = useState(data.balance)
    const [currentExpenseItems, setCurrentExpenseItems] = useState(data.expenseItems)

    const costRef = useRef(null);
    const reasonRef = useRef(null);

    useEffect( () => {
        setData( (prevData) => {
            return {
                ...prevData,
                balance: currentBalance, 
                expenseItems: currentExpenseItems
            }
        })
        costRef.current.value = ''
        reasonRef.current.value = ''
    }, [currentBalance, currentExpenseItems])


    // event handlers
    function addPayment (e) {
        e.preventDefault();
        setCurrentBalance( (prevBalance)=>{
            return (parseInt(prevBalance)-parseInt(costRef.current.value))
        })
        setCurrentExpenseItems( (prevExpenseItems) => {
            const prevExpense = [...prevExpenseItems]
            prevExpense.push({transaction: '-'+costRef.current.value, reason: reasonRef.current.value})
            return (prevExpense)
        })
        
        
    }
    function clearForm (e) {
        e.preventDefault();
        costRef.current.value = ''
        reasonRef.current.value = ''
    }

    // for rendering
    const formattedAmount = currentBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


    return (
        <form className="container bg-emerald-300 rounded overflow-hidden m-10 p-10 flex flex-col">
            <h1 className="font-bold text-xl">Payments</h1>
            <hr className="border-black" />
            <label htmlFor="account-number">Which account would you like to pay from:</label>
            <select name="account-number" className="p-1 my-1 h-10 rounded text-emerald-900">
                <option className="text-emerald-900">{data.account_number}</option>
            </select>
            <span className="flex justify-between font-bold text-xl my-5">
                <p>Available Balance:</p> 
                <p>Php {formattedAmount}</p>
            </span>
            <label htmlFor="amountToPay">Amount to Pay</label>
            <input name="amountToPay" type="number" className="appearance-none p-2 my-1 h-10 rounded placeholder-emerald-900 text-right" placeholder="-(Php 0.00)" ref={costRef} />
            <label htmlFor="reasonOfPayment">Reason of Payment</label>
            <input name="reasonOfPayment" type="text" className="appearance-none p-2 my-1 h-10 rounded placeholder-emerald-900 text-right" placeholder="Reason" ref={reasonRef} />
            <hr className="border-black" />
            <span className="flex justify-around">
                <button className="bg-emerald-700 text-white hover:ring-2 hover:ring-emerald-700 my-1 rounded p-2" onClick={addPayment}>Send</button>
                <button className="bg-emerald-700 text-white hover:ring-2 hover:ring-emerald-700 my-1 rounded p-2" onClick={clearForm}>Cancel</button>
            </span>
        </form>
    )
}

export default Payments;
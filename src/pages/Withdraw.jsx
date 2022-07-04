import { Fragment, useEffect, useRef, useState } from "react";
import DataNotification from '../components/DataNotification'

function Withdraw (props) {
    // props
    const {data, setData} = props

    // hooks
    const [currentBalance, setCurrentBalance] = useState(data.balance)
    const [currentExpenseItems, setCurrentExpenseItems] = useState(data.expenseItems)
    const [paymentNotificationVisible, setPaymentNotificationVisible] = useState('')

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
        console.log('setting notif', paymentNotificationVisible)
        setPaymentNotificationVisible(true)
        console.log('setting notif', paymentNotificationVisible)
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
    const setNotif = <DataNotification visible={paymentNotificationVisible}/> 

    return (
        <Fragment>
            <form className="container shadow-md bg-red-300 rounded overflow-hidden m-10 p-10 flex flex-col">
                <h1 className="font-bold text-xl">Withdraw</h1>
                <hr className="border-black my-2" />
                <label htmlFor="account-number">Which account would you like to withdraw from:</label>
                <select name="account-number" className="p-1 my-1 h-10 rounded text-red-900">
                    <option className="text-red-900 text-right">{data.account_number}</option>
                </select>
                <span className="flex justify-between font-bold text-xl my-5">
                    <p>Available Balance:</p> 
                    <p>Php {formattedAmount}</p>
                </span>
                <label htmlFor="amountToPay">Amount to Withdraw</label>
                <input name="amountToPay" type="number" className="appearance-none p-2 my-1 h-10 rounded placeholder-red-900 text-right" placeholder="-(Php 0.00)" ref={costRef} />
                <label htmlFor="reasonOfPayment">Reason of Withdrawal</label>
                <input name="reasonOfPayment" type="text" className="appearance-none p-2 my-1 h-10 rounded placeholder-red-900" placeholder="Reason" ref={reasonRef} />
                <hr className="border-black my-2" />
                <span className="flex justify-around">
                    <button className="bg-red-700 text-white hover:ring-2 hover:ring-red-700 my-1 rounded p-2" onClick={addPayment}>Send</button>
                    <button className="bg-red-700 text-white hover:ring-2 hover:ring-red-700 my-1 rounded p-2" onClick={clearForm}>Cancel</button>
                </span>
            </form>

            
            {setNotif}
        </Fragment>
        
    )
}

export default Withdraw;
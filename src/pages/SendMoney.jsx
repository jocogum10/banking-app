import { Fragment, useRef, useState } from "react";

function SendMoney (props) {
    const {balance, account_type, account_number, data} = props

    const accountBalance = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const [transferDestination, setTransferDestination] = useState('');

    const thirdPartyAccountNumber = useRef('')
    const thirdPartyAmmountToAdd = useRef('')

    const sendMoney = (e) => {
        e.preventDefault()
        console.log(thirdPartyAccountNumber.current.value)
        const thirdPartyUser = thirdPartyAccountNumber.current.value
        const amountTransfer = thirdPartyAmmountToAdd.current.value

        const usersData = JSON.parse(localStorage.getItem('bank-users-data'))
        const indexOfThirdPartyUserToSave = usersData.findIndex((obj => obj.account_number == thirdPartyUser))

        const dataOfThirdParty = usersData[indexOfThirdPartyUserToSave]
        
        console.log('dataOfThirdParty', dataOfThirdParty)
        const newData = usersData.map((item ,index) => { return index == indexOfThirdPartyUserToSave ? dataOfThirdParty : item; });
        console.log(newData)

        // localStorage.setItem('bank-users-data', JSON.stringify(newData))
    }

    const chooseTransfer = (e) => {
        {switch (e.target.value) {
            case 'own_account':
                setTransferDestination(<Fragment>
                                    <label htmlFor="account-number-destination">Which account would you like to transfer to:</label>
                                    <select name="account-number-destination" className="p-1 my-1 h-10 rounded text-red-900">
                                        Unable to process your request at the moment.
                                    </select>
                                </Fragment>)
                break;
            case 'third_party':
                setTransferDestination(<Fragment>
                    <label htmlFor="accountNumber">Account Number</label>
                    <input name="accountNumber" type="text" className="appearance-none p-2 my-1 h-10 rounded placeholder-red-900 text-right" placeholder="XXXX" ref={thirdPartyAccountNumber}/>
                </Fragment>)
                break;
            case 'another_bank':
                setTransferDestination(<Fragment>
                    <p htmlFor="account-number-destination">Unable to process your request at the moment.</p>
                </Fragment>)
                break;
            default:
                setTransferDestination('')
                
        };}
    }

    return (
        <div className="container shadow-md bg-red-300 rounded overflow-hidden m-10 p-10 flex flex-col">
            <h1 className="font-bold text-xl">Send Money</h1>
            <hr className="border-black my-2" />
            <label htmlFor="account-number">Which account would you like to send from:</label>
            <select name="account-number" className="p-1 my-1 h-10 rounded text-red-900">
                <option className="text-red-900 text-right">{account_number}</option>
            </select>
            <span className="flex justify-between font-bold text-xl my-5">
                <p>Available Balance:</p> 
                <p>Php {accountBalance}</p>
            </span>
            <label htmlFor="amountTransfer">Transfer amount</label>
            <input name="amountTransfer" type="number" className="appearance-none p-2 my-1 h-10 rounded placeholder-red-900 text-right" placeholder="0.00" ref={thirdPartyAmmountToAdd}/>
            <p htmlFor="amountTo">Transfer to:</p>
            <span>
                <span>
                    <input type="radio" id="own_account" name="transfer-destination" value="own_account" className="mr-2" onClick={chooseTransfer} />
                    <label htmlFor="own_account" className="inline">Own Account</label>
                </span>
                <span>
                    <input type="radio" id="third_party" name="transfer-destination" value="third_party" className="ml-4 mr-2" onClick={chooseTransfer} />
                    <label htmlFor="third_party">3rd Party</label>
                </span>
                <span>
                    <input type="radio" id="another_bank" name="transfer-destination" value="another_bank" className="ml-4 mr-2" onClick={chooseTransfer} />
                    <label htmlFor="another_bank">Another Bank</label>
                </span>
            </span>

            {transferDestination}

            <hr className="border-black my-2" />
            <span className="flex justify-around">
                <button className="bg-red-700 text-white hover:ring-2 hover:ring-red-700 my-1 rounded p-2" onClick={sendMoney}>Send</button>
                <button className="bg-red-700 text-white hover:ring-2 hover:ring-red-700 my-1 rounded p-2">Cancel</button>
            </span>
            
        </div>
    )
}  

export default SendMoney;
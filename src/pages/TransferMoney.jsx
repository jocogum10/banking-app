import { Fragment, useState } from "react";

function TransferMoney (props) {
    // 1 destructure needed props, any logic about props
    const {accounts} = props
    // 2 setup states
    const [transferDestination, setTransferDestination] = useState('');
    // 3 hook dependencies
    // 4 declaration of event handlers
    const chooseTransfer = (e) => {
        {switch (e.target.value) {
            case 'own_account':
                setTransferDestination(<Fragment>
                                    <label htmlFor="account-number-destination">Which account would you like to transfer to:</label>
                                    <select name="account-number-destination" className="p-1 my-1 h-10 rounded text-emerald-900">
                                        {accountNumber}
                                    </select>
                                </Fragment>)
                break;
            case 'third_party':
                setTransferDestination(<Fragment>
                    <p htmlFor="account-number-destination">Unable to process your request at the moment.</p>
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
    const accountNumber = accounts.map( (account) => {
        return <option className="text-emerald-900" key={account.account_number}>{account.account_number}</option>
    });
    // 5 control flow of jsx returns
    

    return (
        <div className="container bg-emerald-300 rounded overflow-hidden m-10 p-10 flex flex-col">
            <h1 className="font-bold text-xl">Fill in the details</h1>
            <hr className="border-black" />
            <label htmlFor="account-number">Which account would you like to transfer from:</label>
            <select name="account-number" className="p-1 my-1 h-10 rounded text-emerald-900">
                {accountNumber}
            </select>
            <label htmlFor="amountTransfer">Transfer amount</label>
            <input name="amountTransfer" type="number" className="appearance-none p-2 my-1 h-10 rounded placeholder-emerald-900 text-right" placeholder="0.00"/>
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

            <hr className="border-black" />
            <span className="flex justify-around">
                <button className="bg-emerald-700 text-white hover:ring-2 hover:ring-emerald-700 my-1 rounded p-2">Submit</button>
                <button className="bg-emerald-700 text-white hover:ring-2 hover:ring-emerald-700 my-1 rounded p-2">Cancel</button>
            </span>
            
        </div>
    )
}  

export default TransferMoney;
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Account (props) {
    const { balance, account_type, account_number } = props 

    const navigate = useNavigate();

    const [formattedAmount, setFormattedAmount] = useState((balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")))
    const formattedType = account_type.toUpperCase()


    const cardClicked = function() {
        navigate(`/account-maintenance`)
    }

    return (
        <div className="border-l-red-700 border-l-8 bg-white shadow-md max-w-sm rounded overflow-hidden m-3 min-w-[30%] hover:drop-shadow-2xl hover:ring-2 hover:ring-red-700" onClick={() => cardClicked(account_number)}>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{formattedType}</div>
                    <p className="text-xs">
                        {account_number}
                    </p>
                    <p className="text-right">
                        Php {formattedAmount}
                    </p>
                </div>
        </div>
    )
}

export default Account;
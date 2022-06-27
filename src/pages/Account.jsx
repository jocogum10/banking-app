function Account (props) {
    // 1 destructure needed props, any logic about props
    const {amount, account_type, account_number} = props
    const formattedAmount = (amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    const formattedType = account_type.toUpperCase()

  // 2 setup states
    
  // 3 hook dependencies
  // 4 declaration of event handlers
    const cardClicked = function(account_number) {
        console.log(account_number)
    }
  // 5 control flow of jsx returns

    return (
        <div className="bg-emerald-300 max-w-sm rounded overflow-hidden m-3 min-w-[30%] hover:drop-shadow-2xl hover:ring-2 hover:ring-emerald-700" onClick={() => cardClicked(account_number)}>
            <div className="px-6 py-4">
                <div className=" font-bold text-xl mb-2">{formattedType}</div>
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
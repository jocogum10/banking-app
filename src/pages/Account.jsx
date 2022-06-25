function Account ({amount, account_type, account_number}) {
    const formattedAmount = (amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    const formattedType = account_type.toUpperCase()

    return (
        <div className="bg-emerald-300 max-w-sm rounded overflow-hidden m-3 min-w-[30%] hover:drop-shadow-2xl hover:ring-2 hover:ring-emerald-700">
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
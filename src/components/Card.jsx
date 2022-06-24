function Card ({amount, account_type, account_number}) {
    const formattedAmount = (amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    const formattedType = account_type.toUpperCase()

    return (
        <div className="bg-emerald-300 max-w-sm rounded overflow-hidden shadow-lg m-3 min-w-[30%]">
            <div className="px-6 py-4">
                <div className="text-emerald-900 font-bold text-xl mb-2">{formattedType}</div>
                    <p className="text-emerald-700 text-xs">
                        {account_number}
                    </p>
                    <p className="text-emerald-900 text-right">
                        Php {formattedAmount}
                    </p>
                </div>
        </div>
    )
}

export default Card;
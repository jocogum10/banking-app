function Card ({amount, account_type}) {
    return (
        <div className="bg-emerald-300 max-w-sm rounded overflow-hidden shadow-lg row-start-2 col-start-2 col-span-3 row-span-3">
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{account_type}</div>
                <p className="text-gray-700 text-base">
                    Php {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
            </div>
        </div>
    )
}

export default Card;
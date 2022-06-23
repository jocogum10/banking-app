function Card ({amount, account_type, account_nunber}) {
    return (
        <div className="bg-emerald-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{account_type}</div>
                <p className="text-gray-700 text-base">
                        {account_nunber}
                    </p>
                    <p className="text-gray-700 text-base">
                        Php {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                </div>
        </div>
    )
}

export default Card;
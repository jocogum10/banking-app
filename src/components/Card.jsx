function Card ({amount, account_type}) {
    return (
        <div className="bg-emerald-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{account_type}</div>
            <p class="text-gray-700 text-base">
            {amount}
            </p>
      </div>
        </div>
    )
}

export default Card;
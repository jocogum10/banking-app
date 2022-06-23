
import Card from "./Card";


function Content ({account_type, amount}) {
    return (
        <div className="bg-emerald-100 col-span-11 row-start-2 row-span-full">
            <Card amount={amount} account_type={account_type} />
        </div>
    )
}

export default Content;
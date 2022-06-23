
import Card from "./Card";


function Content ({account_type, amount}) {
    return (
        <div className="bg-emerald-100 col-span-10 row-start-2 row-span-full grid grid-cols-12 grid-rows-12">
            <Card amount={amount} account_type={account_type} />
        </div>
    )
}

export default Content;
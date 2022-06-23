
import Card from "./Card";


function Content ({account}) {
    return (
        <div className="bg-emerald-100 col-span-10 row-start-2 row-span-full grid grid-cols-12 grid-rows-12">
            <Card amount={account[0].amount} account_type={account[0].account_type} />
        </div>
    )
}

export default Content;
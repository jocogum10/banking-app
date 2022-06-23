
import Card from "./Card";


function Content ({accounts}) {
    return (
        <div className="bg-emerald-100 col-span-10 row-start-2 row-span-full">
            <Card amount={accounts[0].amount} account_type={accounts[0].account_type} account_nunber={accounts[0].account_number}/>
            <Card amount={accounts[1].amount} account_type={accounts[1].account_type} account_nunber={accounts[1].account_number}/>
        </div>
    )
}

export default Content;
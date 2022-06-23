
import Card from "./Card";


function Content ({accounts}) {
    return (
        <div className="bg-emerald-100 col-span-10 row-start-2 row-span-full flex flex-wrap justify-center items-center">
            <Card amount={accounts[0].amount} account_type={accounts[0].account_type} account_nunber={accounts[0].account_number}/>
            <Card amount={accounts[1].amount} account_type={accounts[1].account_type} account_nunber={accounts[1].account_number}/>
            <Card amount={accounts[2].amount} account_type={accounts[2].account_type} account_nunber={accounts[2].account_number}/>
            <Card amount={accounts[3].amount} account_type={accounts[3].account_type} account_nunber={accounts[3].account_number}/>
            <Card amount={accounts[4].amount} account_type={accounts[4].account_type} account_nunber={accounts[4].account_number}/>
            <Card amount={accounts[5].amount} account_type={accounts[5].account_type} account_nunber={accounts[5].account_number}/>
        </div>
    )
}

export default Content;

import Card from "./Card";


function Content ({accounts}) {

    const acc = accounts.map((account) => {
        return <Card amount={account.amount} account_type={account.account_type} account_nunber={account.account_number}/>
    });
    return (
        <div className="bg-emerald-100 col-span-10 row-start-2 row-span-full flex flex-wrap justify-center items-center">
            {acc}
        </div>
    )
}

export default Content;
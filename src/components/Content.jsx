
import Card from "./Card";


function Content ({accounts}) {

    const acc = accounts.map((account) => {
        return <Card key={account.account_number} amount={account.amount} account_type={account.account_type} account_number={account.account_number}/>
    });
    return (
        <div className="bg-emerald-100 col-span-10 row-start-2 row-span-full flex flex-wrap justify-center content-start">
            {acc}
        </div>
    )
}

export default Content;
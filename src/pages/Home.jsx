
function Home ({username}) {

    return (
        <div className="container bg-emerald-300 rounded overflow-hidden m-10 p-10">
            <h1 className="font-bold text-xl leading-loose">Hi, {username}!</h1>
            <h3 className="leading-loose">Welcome to Banking App Online!</h3>
            <p className="leading-relaxed">Transactions are now more secure than ever. Starting today, fund transfers to another Banking App account will require Mobile Key authentication. Activate your Mobile Key now.</p>
            <p className="leading-relaxed">Conveniently enroll billers, recipients, and prepaid accounts through the Banking App once you update to the latest version.</p>
        </div>
    )
}

export default Home;
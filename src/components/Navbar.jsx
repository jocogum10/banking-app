function Navbar (props) {
    const { username, logInMode, setNotLoggedIn } = props


    function logOut (e) {
        e.preventDefault()
        setNotLoggedIn(true)
    }

    if(logInMode){
        return (
            <div className="border-t-red-700 border-t-8 text-red-900 col-span-full row-start-1 flex justify-between items-center shadow-lg z-20">
                <h1 className="mx-3">
                    <a href="/" >Banking App</a>
                </h1>
            </div>
        )
    } else {
        return (
            <div className="border-t-red-700 border-t-8 text-red-900 col-span-full row-start-1 flex justify-between items-center shadow-lg z-20">
                <h1 className="mx-3">
                    <a href="/" >Banking App</a>
                </h1>
                <ul className="flex justify-center items-center">
                    <li>
                        <p className="px-5 py-2 rounded mx-3">Welcome, {username}!</p>
                    </li>
                    <li>
                        <a href="/" className="px-5 py-2 hover:text-red-700 rounded cursor-pointer hover:underline" onClick={logOut}>Log Out</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;
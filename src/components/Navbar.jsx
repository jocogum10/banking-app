function Navbar (props) {
    const { username, logInMode } = props


    if(logInMode){
        return (
            <div className="border-t-red-700 border-t-8 text-red-900 flex justify-between items-center shadow-lg w-full p-5">
                <h1 className="mx-3">
                    <a href="/" >Banking App</a>
                </h1>
                <a>Home</a>
                <a>Contact Us</a>
                <a>Privacy</a>
            </div>
        )
    } else {
        return (
            <div className="border-t-red-700 border-t-8 text-red-900 col-span-full row-start-1 flex justify-between items-center shadow-lg z-20">
                <h1 className="mx-3">
                    <a href="/" >Banking App</a>
                </h1>
                <p className="mx-3">Welcome, {username}!</p>
            </div>
        )
    }
}

export default Navbar;
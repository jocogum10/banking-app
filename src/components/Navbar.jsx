function Navbar (props) {
    const { username } = props
    return (
        <div className="border-t-red-700 border-t-8 text-red-900 col-span-full row-start-1 flex justify-between items-center shadow-lg z-20">
            <h1 className="mx-3">
                <a href="/" >Banking App</a>
            </h1>
            <h1 className="mx-3">Welcome, {username}!</h1>
        </div>
        
    )
}

export default Navbar;
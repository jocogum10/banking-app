function Navbar (props) {
    const { username } = props
    return (
        <div className="bg-emerald-100 text-emerald-900 col-span-full row-start-1 flex justify-between items-center drop-shadow-md z-10">
            <h1 className="mx-3">
                <a href="/" >Banking App</a>
            </h1>
            <h1 className="mx-3">Welcome, {username}!</h1>
        </div>
        
    )
}

export default Navbar;
function Navbar ({name}) {
    return (
        <div className="bg-emerald-300 col-span-full row-star-1 flex justify-between items-center">
            <h1 className="mx-3">Banking App</h1>
            <h1 className="mx-3">Welcome, {name}!</h1>
        </div>
        
    )
}

export default Navbar;
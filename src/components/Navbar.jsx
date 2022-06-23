function Navbar ({name}) {
    return (
        <div className="bg-emerald-200 col-span-full row-start-1 flex justify-between items-center shadow-2xl">
            <h1 className="mx-3">Banking App</h1>
            <h1 className="mx-3">Welcome, {name}!</h1>
        </div>
        
    )
}

export default Navbar;
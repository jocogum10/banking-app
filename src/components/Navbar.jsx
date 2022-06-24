function Navbar ({name}) {
    return (
        <div className="bg-emerald-100 text-emerald-900 col-span-full row-start-1 flex justify-between items-center drop-shadow-md z-10">
            <h1 className="mx-3">Banking App</h1>
            <h1 className="mx-3">Welcome, {name}!</h1>
        </div>
        
    )
}

export default Navbar;
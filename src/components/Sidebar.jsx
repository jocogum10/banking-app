import {HandIcon, HomeIcon} from '@heroicons/react/solid'

function Sidebar () {
    const sideBarText = [
        'Home',
        'My Account',
        'Transfer Money',
        'Payments / Load',
        'Investments',
        'Account Maintenance',
        'Health and Life Protection',
        'Other Services'
    ]
    const icons = [
        
    ]
    const sideBarLinks = sideBarText.map((text) => {
        return (
            <div className="p-2 m-1 bg-emerald-300 rounded shadow-lg hover:bg-emerald-700 hover:text-white flex justify-start items-start">
                <HomeIcon className='h-5 w-5'/>
                <p>{text}</p>
            </div>
            
        )
    })
    
    return (
        <div className="bg-emerald-100 col-span-2 row-start-2 row-span-full drop-shadow-md min-w-min">
            {sideBarLinks}
        </div>
        
    )
}

export default Sidebar;
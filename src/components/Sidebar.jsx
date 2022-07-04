import {HomeIcon, ShoppingBagIcon, SwitchHorizontalIcon, DocumentRemoveIcon, DocumentAddIcon, UserCircleIcon} from '@heroicons/react/solid'

function Sidebar () {
    // links
    const sideBarInfo = [
        {icon: <HomeIcon className='h-5 w-5' />, text: 'Home', route: '/'},
        {icon: <ShoppingBagIcon className='h-5 w-5' />, text: 'My Account', route: '/my-account'},
        {icon: <SwitchHorizontalIcon className='h-5 w-5' />, text: 'Send Money', route: '/send-money'},
        {icon: <DocumentRemoveIcon className='h-5 w-5' />, text: 'Withdraw', route: '/withdraw'},
        {icon: <DocumentAddIcon className='h-5 w-5' />, text: 'Deposit', route: '/deposit'},
        {icon: <UserCircleIcon className='h-5 w-5' />, text: 'Account Maintenance', route: '/account-maintenance'},
    ]
    const sideBarLinks = sideBarInfo.map((text) => {
        return (
            <a href={text.route} key={text.text} className="p-2 m-2 bg-red-300 rounded hover:bg-red-700 hover:text-white flex justify-start items-center shadow-2xl z-10">
                {text.icon}
                <p className='m-1'>{text.text}</p>
            </a>
        )
    })
    
    return (
        <div className="col-span-2 row-start-2 row-span-full drop-shadow-md min-w-min">
            {sideBarLinks}
        </div>
        
    )
}

export default Sidebar;
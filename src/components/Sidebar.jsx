import {HomeIcon, ShoppingBagIcon, SwitchHorizontalIcon, DocumentRemoveIcon, DocumentAddIcon} from '@heroicons/react/solid'

function Sidebar () {
    // links
    const sideBarInfo = [
        {icon: <HomeIcon className='h-5 w-5' />, text: 'Home', route: '/'},
        {icon: <ShoppingBagIcon className='h-5 w-5' />, text: 'My Account', route: '/my-account'},
        {icon: <SwitchHorizontalIcon className='h-5 w-5' />, text: 'Send Money', route: '/send-money'},
        {icon: <DocumentRemoveIcon className='h-5 w-5' />, text: 'Payments', route: '/payments'},
        {icon: <DocumentAddIcon className='h-5 w-5' />, text: 'Deposit', route: '/deposit'},
    ]
    const sideBarLinks = sideBarInfo.map((text) => {
        return (
            <a href={text.route} key={text.text} className="p-2 m-1 bg-emerald-300 rounded shadow-lg hover:bg-emerald-700 hover:text-white flex justify-start items-center">
                {text.icon}
                <p className='m-1'>{text.text}</p>
            </a>
        )
    })
    
    return (
        <div className="bg-emerald-100 col-span-2 row-start-2 row-span-full drop-shadow-md min-w-min">
            {sideBarLinks}
        </div>
        
    )
}

export default Sidebar;
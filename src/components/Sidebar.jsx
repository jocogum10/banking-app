// import {HomeIcon, ShoppingBagIcon, SwitchHorizontalIcon, DocumentTextIcon, ChartBarIcon, UserIcon, ShieldCheckIcon, ViewListIcon} from '@heroicons/react/solid'
import {HomeIcon, ShoppingBagIcon, SwitchHorizontalIcon, DocumentTextIcon } from '@heroicons/react/solid'

function Sidebar () {
    // links
    const sideBarInfo = [
        {icon: <HomeIcon className='h-5 w-5' />, text: 'Home', route: '/'},
        {icon: <ShoppingBagIcon className='h-5 w-5' />, text: 'My Account', route: '/my-account'},
        {icon: <DocumentTextIcon className='h-5 w-5' />, text: 'Payments', route: '/pay-bills'},
        {icon: <SwitchHorizontalIcon className='h-5 w-5' />, text: 'Send Money', route: '/transfer-money'},
        // {icon: <ChartBarIcon className='h-5 w-5' />, text: 'Investments', route: '/investments'},
        // {icon: <UserIcon className='h-5 w-5' />, text: 'Account Maintenance', route: '/account-maintenance'},
        // {icon: <ShieldCheckIcon className='h-5 w-5' />, text: 'Health and Life Protection', route: '/life--health-protection'},
        // {icon: <ViewListIcon className='h-5 w-5' />, text: 'Other Services', route: '/other-services'}
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
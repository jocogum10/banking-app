import { useRef } from "react";

function LogIn (props) {
    // props
    const { setNotLoggedIn, setData } = props

    // hooks
    const emailValue = useRef(null);
    const passwordValue = useRef(null);

    // variables
    // get bank-app-data
    const usersData = JSON.parse(localStorage.getItem('bank-users-data'))


    // event handlers
    function logIn (e) {
        e.preventDefault();
        const userEmail = emailValue.current.value
        const userPassword = passwordValue.current.value
        if (usersData.some((userData) => (userData.email === userEmail & userData.password === userPassword))) {
            console.log('successfully logged in')
            setNotLoggedIn(false)
            const loggedInUser = usersData.filter(data => {
                return data.email === userEmail
            })
            console.log(loggedInUser[0])
            setData(loggedInUser[0])
        } else {
            console.log('user not found')
        }
    }

    return (
        <div className="bg-red-100 col-span-full row-start-2 row-span-full">
            <form className="shadow-md bg-red-300 rounded overflow-hidden m-10 p-10 flex flex-col md:w-3/6 lg:w-2/6 ">
                <h1 className="font-bold text-xl ">Login</h1>
                <hr className="border-black my-2 " />

                <label htmlFor="email">Email</label>
                <input name="email" type="email" className="appearance-none p-2 my-1 h-10 rounded placeholder-red-900 text-right" ref={emailValue} />
                <label htmlFor="password">Password</label>
                <input name="password" type="password" className="appearance-none p-2 my-1 h-10 rounded placeholder-red-900 text-right" ref={passwordValue}/>
                
                <hr className="border-black my-2" />
                <span className="flex justify-around">
                    <button className="bg-red-700 text-white hover:ring-2 hover:ring-red-700 my-1 rounded p-2" onClick={logIn}>Log In</button>
                </span>
            </form>
        </div>
        
    )
}

export default LogIn;
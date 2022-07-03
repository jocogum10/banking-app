import { Fragment, useEffect, useState } from "react"

function DataNotification (props) {
    const { visible } = props

    const [visibleNotif, setVisibleNotif] = useState(visible);

    function closeNotif (e) {
        e.preventDefault()
        setVisibleNotif(false)
    }
    
    if(visibleNotif){
        return (
            <div className="border-l-green-700 border-l-8 bg-white shadow-md rounded overflow-hidden m-3 p-5 z-40 fixed bottom-0 right-0">
                <p>Data Successfully Saved!</p>
                <button className="absolute top-0 right-1 hover:ring-1" onClick={closeNotif}>X</button>
            </div>
        )
    } else {
        return (
            <Fragment></Fragment>
        )
    }
}

export default DataNotification;
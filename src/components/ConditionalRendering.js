import React from "react"; 

function ConditionalRendering () {

    const [isShown, setIsShown] = React.useState(false)
    const [messages, setMessages] = React.useState([])

    //let cond1 = true
    //let cond2 = true
    //if (cond1 && cond2) {
    //    console.log('I have been run')
    //}

    function toggleShown () {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div className="row">
            <div className="col-sm-12">
                <h1>Conditional Rendering</h1>
            </div>
            <div className="col-sm-4">
                {isShown && <p>Hello I'm rendering!</p>}
                {/* If we ever need to change text like this button, use Ternary */}
                <button onClick={toggleShown} > {isShown ? "Hide" : "Show"} Text</button>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    {messages.length > 0 ? <h3>You have {messages.length} unread {messages.length > 1 ? 'messages.' : 'message.'}</h3> : <h3>You're all caught up!</h3>}
                    {/* {messages.length > 0 && <h3>You have {messages.length} unread messages</h3>} */}
                </div>
            </div>
        </div>
    )

}

export default ConditionalRendering
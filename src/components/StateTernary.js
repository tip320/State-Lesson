import React from "react";

function StateTernary() {
    const [isGoingOut, setIsGoingOut] = React.useState(false)

    function changeMind () {

        setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
    }

    return(
        <div className="row">
            <div className="col-sm-12">
                <h1>State Ternary Practice</h1>
            </div>
            <div className="col-sm-6">
                <h3 onClick={changeMind}>Am I Going Out?</h3>
            </div>
            <div className="col-sm-6">
                <h5>{isGoingOut ? "Yes" : "No"}</h5>
            </div>
        </div>
    )
}

export default StateTernary
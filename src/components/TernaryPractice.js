import React from "react";

function TernaryPractice () {


    const murderIf = true;
    const murderName = "Jason"
    //let answer = murderIf === true ? "Yes" : "No"
    //second way of ternary op
    let answer = murderIf ? "Yes" : "No"

    let killer = murderName == "Butler" ? "He's the killer" : "You shant the killer"



    return(
        <div className="row">
            <div className="col-sm-12 text-center">
                <h1>Ternary Practice</h1>
            </div>
            <div className="col-sm-4">
                <h2>Was there a murder in Savannah?</h2>
                <h4>{answer}</h4>
                <h5>{killer}</h5>
            </div>
        </div>
    )

}

export default TernaryPractice
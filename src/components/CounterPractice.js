import React from "react"

function CounterPractice () {
    const [count, setCount] = React.useState(0);

    function add() {

        //First way to pass new Values to useState.
      //  setCount(function(prevCount) {
      //      return prevCount +1
      //  })  

        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)

    }


    return (
        <div className="row">
            <div className="col-sm-12">
                <h1>Counter Practice</h1>
            </div>
            <div className="col-sm-4">
                <input onClick={add} type="button" value="Add" />  
            </div>
            <div className="col-sm-4">
                <h3>Current Number: {count} </h3>
            </div>
            <div className="col-sm-4">
                <input onClick={subtract} type="button" value="Subtract" />          

            </div>
        </div>
    )
}

export default CounterPractice
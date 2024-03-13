import React, {useState} from "react";

function State() {
    //one way to call STATE
    const [result, setResult] = React.useState('No');
    //second way to call STATE
    ///const resultsecond = useState();
    console.log(result);

    function changeAnswer () {

            setResult('Yes')


    }

    return(
        <div className="row">
            <div className="col-sm-12">
                <h3 onClick={changeAnswer}>Is State important?</h3>
            </div>
            <div className="col-sm-12">
                <h5>{result}</h5>
            </div>
        </div>
    )

}




export default State
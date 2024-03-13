import React from "react";



function UseEffect() {
const [starWarsData, setStarWarsData] = React.useState([])


React.useEffect(function() {


})


    return(
        <div className="row">
            <div className="col-sm-12">
                <h1>Hello useEffect</h1>
            </div>
            <div>
                <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            </div>
        </div>

    )


}

export default UseEffect

import React from "react";


function MappingUpdate() {
    const thingsArray = ['Thing 1', 'Thing 2'];
    const thingsElements = thingsArray.map(
        (thing) => <p>{thing}</p>
    )

    function addItem() {
        const newThingText = 'Thing ${thingsArray.length + 1}';
        thingsArray.push(newThingText);
        console.log(thingsArray)
    }




    return(
        <div className="row">
            <div className="col-sm-12">
                <button onClick={addItem}>Add Item</button>
                {thingsElements}
            </div>
        </div>
    )
}

export default MappingUpdate
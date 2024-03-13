import React from 'react'

function ComplexObjectFavorite(props) {
    console.log(props)
    //first way to utilize Ternary V
    let favorite = props.colored ? "favoriteTrue" : "favoriteFalse";
    //Second way 
    //  <div onClick="" className={`text-center ${props.colored ? "favoriteTrue" : "favoriteFalse"}`}>x</div>


    return(
            <div>
                {/* TERNARY operator can be utilized inside classNames as well!
                DOn't forget about the Template Literals to be able to write other classNames inside
                */}
                <div onClick={props.handleClick} className={`text-center ${favorite}`}>x</div>
            </div>
    )
}

function ComplexObject() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (555) 555-5555",
        email: "jDoe420@yahoo.com",
        isFavorite: true
    })


    function toggleFavorite() {
        //... spread operator does the same as arrays. 
        //...prevContact grabs entire Object inside state.
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return(
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-12">
                    <h1>Complex Objects</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3>{contact.firstName} {contact.lastName}</h3>
                    {/* contact.isFavorite passing boolean(TRUE/FALSE) value 
                        colored is going to be the props name.
                        handleClick={} is the way we pass functions (ie.toggleFavorite) to child components
                        and if needing to pass FUNCTIONS to them name props attribute "handleClick"
                    */}
                   <ComplexObjectFavorite colored={contact.isFavorite} handleClick={toggleFavorite} />
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                </div>
            </div>
        </div>
    )
}



function ComplexArray() {

    //const thingsArray = ['Thing 1', 'Thing 2'];
    const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2'])


    const thingsElements = thingsArray.map(
        (thing) => <p>{thing}</p>
    ) 

    function addItem() {
        const newThingText = `Thing ${thingsArray.length + 1}`

        //NEVER DO THIS EVER V
        //thingsArray.push(newThingText)
        //WE NEVER DIRECTLY MODIFY OUR STATE VALUE 
        //USE setNAME variable!

        //when setting new State Value
        //if we depend on the old version of our State(Value/array) we typically think about callback function 
        //... = spread operator !!What is does = Get entire current array.
        setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])


        //SETTING NEW VALUE OPTION
        //IN THIS CASE DON't SET NEW VALUE
        //setThingsArray(['Thing 1', 'Thing 2', 'Thing 3'])
        console.log(thingsArray)
    }

    return(
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-12">
                    <h2>Complex State Array</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <button onClick={addItem}>Add Item</button>
                </div>
                <div className="col-sm-12">
                    {thingsArray}
                </div>
            </div>
        </div>
    )
}


function ComplexState() {

    return(

        <div className="row">
            <div className="col-sm-12 text-center">
                <h1>Complex State</h1>
            </div>
            <ComplexArray />
            <ComplexObject />
        </div>
    )
}

export default ComplexState
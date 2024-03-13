import React from "react";

function Forms () {
    const [formDataAll, setFormDataAll] = React.useState([])
    const [formData, setFormData] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        comments:"",
        isFriendly: false,
        comments:"",
        employment:"",
        favColor:""
    })

console.log(formData)

    function handleEvent(event) {
        //event.target.value = grabbing HTML value from the current element
        //ie. input First Name text box
        //console.log(event.target.value)
        setFormData(event.target.value)
    }

    function handleFormData (event) {

        setFormData(prevFormData => {
            return {
                ...prevFormData, 
                //ES6 Computed Properties
                // [event.target.name] : event.target.value
                [name] : type ==='checkbox' ? checked : value
            }
        })
    }

function handleSubmit(event) {
    event.preventDefault()

    console.log(formData)

}

    return (
        <div className="row">
            <div className="col-sm-12">
                <h1>Forms</h1>
            </div>
            <div className="col-sm-6">
                <form onSubmit={handleSubmit}>
                    {/* onChange = Anythime there is a change in the value or typed in the element. handleEvent will function */}
                    <input type="text" placeholder="First Name" name="firstName" id="" onChange={handleEvent}  value={formData.firstName} />
                    <input type="text" placeholder="Last Name" name="lastName" id="" onChange={handleEvent}    value={formData.lastName} />
                    <input type="email" placeholder="E-mail" name="email" id="" onChange={handleEvent}         value={formData.email} />
                    <textarea name="comments" placeholder="Comments" onChange={handleEvent} value={formData.comments} id="" cols="30" rows="10"></textarea>
                    <input type="checkbox" id='isFriendly' name="isFriendly" value={formData.isFriendly} checked={formData.isFriendly} onChange={handleEvent} />
                    <label htmlFor="isFriendly">Are you friendly?</label>

                    <fieldset>
                        <legend>What is your current employment?</legend>
                       
                        <input type="radio" name="employment" id="unemployed" value="unemployed" onChange={handleEvent} checked={formData.employment === "unemployed"} />
                        <label htmlFor="unemployed">Unemployed</label>
                        <br />
                        <input type="radio" name="employment" id="full-time" value="full-time" onChange={handleEvent} checked={formData.employment === "full-time"} />
                        <label htmlFor="full-time">Full-time</label>
                        <br />
                        <input type="radio" name="employment" id="part-time" value="part-time" onChange={handleEvent} checked={formData.employment === "part-time"} />
                        <label htmlFor="part-time">Part-time</label>
                        <br />
                    </fieldset>

                    <br />
                    <label htmlFor="favColor">What's your favorite color?</label>
                    <br />
                    <select name="favColor" id="favColor" value={formData.favColor} onChange={handleEvent}>
                        <option value="Red">Red</option>
                        <option value="Orange">Orange</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Indigo">Indigo</option>
                        <option value="Violet">Violet</option>
                    </select>
                    <br />
                    <br />
                    <button>Submit</button>


                </form>
            </div>
        </div>
    )

}

export default Forms
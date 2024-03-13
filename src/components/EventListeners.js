

function EventListeners () {

function handleClick () {
    console.log('Clicked')
}

function imgHover () {
    console.log('Hovered the img')
}

    return(
        <div className="row">
            <div className="col-sm-12">
                <img onMouseEnter={imgHover} src="https://picsum.photos/640/360" alt="" />
            </div>
            <div className="col-sm-12">
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    )

}

export default EventListeners
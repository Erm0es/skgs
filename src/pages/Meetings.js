import "../styling/meetings.css"

export default function Meetings(props) {
    return (

        <div className="MeetingCard-hugger">
            <h1 className="MeetingCard-h1">{props.header}</h1>
            <div className="MeetingCard-div">
                <img className="MeetingCard-img" src={props.img} />
                <div className="MeetingCard-text-div">
                    <p className="MeetingCard-date">{props.date}</p>
                    <p className="MeetingCard-location">{props.location}</p>
                    <h2 className="MeetingCard-h2">{props.secondHeader}</h2>
                    <p className="MeetingCard-agenda">{props.agenda}</p>
                    <span className="MeetingCard-span">{props.span}</span>
                </div>
            </div>
        </div>


    )
    
}
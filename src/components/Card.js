export default function Card(props){
    return (<div className="card">
        <img src={props.imageUrl} className="cardImage"/>
        <div className="cardContent">
            <div className="location">
                <img className="locationIcon" src="./images/placeholder.png"/>
                <p className="country">{props.location}</p>
                <a target="_blank" href={props.mapUrl} className="link" >View In Google Maps</a>
            </div>
            <h1 className="name">{props.title}</h1>
            <p className="duration">{props.startDate} - {props.endDate}</p>
            <section className="description">{props.description}</section>
        </div>
    </div>)
}
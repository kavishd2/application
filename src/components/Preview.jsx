export default function Preview({experience, general}) {
    return (
        <div className = "resume">
            <h1>{general.fullName}</h1>
            <h4>{general.email} | {general.phone} | <a>{general.link}</a></h4>
            <h2>WORK EXPERIENCE</h2>
            {experience.map((item, index)=>
                <div key={index}>
                    <div className="experienceHeader">
                        <h3>{item.company} - <em>{item.position}</em></h3>
                        <h3>{item.startDate} - {item.endDate}</h3>
                    </div>
                    <p>{item.description}</p>
                </div>
            )}
        </div>
    )
}
export default function ExperienceItem({item, index, handleChange, removeExperience}) {
    return (
        <div>
            <div>
                <label>Company:</label>
                <input type="text" value={item.company} onChange={(e)=>handleChange(index, "company", e.target.value)}/>
            </div>
            <div>
                <label>Position:</label>
                <input type="text" value={item.position} onChange={(e)=>handleChange(index, "position", e.target.value)}/>
            </div>
            <div>
                <label>Start Date:</label>
                <input type="text" value={item.startDate} onChange={(e)=>handleChange(index, "startDate", e.target.value)}/>
            </div>
            <div>
                <label>End Date:</label>
                <input type="text" value={item.endDate} onChange={(e)=>handleChange(index, "endDate", e.target.value)}/>
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={item.description} onChange={(e)=>handleChange(index, "description", e.target.value)}/>
            </div>
            <button onClick={()=>removeExperience(index)}>Remove Experience</button>
        </div>
    );
}
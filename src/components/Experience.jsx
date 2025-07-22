import ExperienceItem from "./ExperienceItem"

export default function Experience({experience, setExperience}) {
    const handleChange = (index, field, value) => {
        const updated = [...experience];
        updated[index][field] = value;
        setExperience(updated);
    }

    const addExperience = () => {
        setExperience([...experience, {company: '', position: '', startDate: '', endDate: '', description: ''}]);
    }

    const removeExperience = (index) => {
        const updated = [...experience];
        updated.splice(index,1)
        setExperience(updated);
    }
    
    return (
        <div className="experience">
            <h2>Experience</h2>
            {experience.map((item,index)=> <ExperienceItem key={index} index={index} item={item} handleChange={handleChange} removeExperience={removeExperience}/>)}
            <button onClick={addExperience}>Add Experience</button>
        </div>
    )
}
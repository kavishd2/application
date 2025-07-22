export default function General({general,setGeneral}) {
    return (
        <div className="general">
            <h2>General Info</h2>
            <div>
                <label>Full Name:</label>
                <input type="text" value={general.fullName} onChange={(e)=>setGeneral({...general, fullName: e.target.value})}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={general.email} onChange={(e)=>setGeneral({...general, email: e.target.value})}/>
            </div>
            <div>
                <label>Phone:</label>
                <input type="tel" value={general.phone} onChange={(e)=>setGeneral({...general, phone: e.target.value})}/>
            </div>
            <div>
                <label>Link:</label>
                <input type="text" value={general.link} onChange={(e)=>setGeneral({...general, link: e.target.value})}/>
            </div>
        </div>
    );
}
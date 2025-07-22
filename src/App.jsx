import { useState } from 'react'
import './styles/App.css'
import General from "./components/General"
import Experience from "./components/Experience"
import Preview from './components/Preview';

export default function App() {
  const [general, setGeneral] = useState({fullName:'', email:'', phone:'', link:''});
  const [experience, setExperience] = useState([{company: '', position: '', startDate: '', endDate: '', description: ''}]);

  return (
    <div className = "main">
      <h1>CV Application</h1>
      <div className = "app">
        <div className = "user">
          <General general={general} setGeneral={setGeneral}/>
          <Experience experience={experience} setExperience={setExperience}/>
        </div>
        <Preview general={general} experience={experience}/>
      </div>
    </div>
  )
}
import { useState } from 'react';

function Education() {
  const [educationInfo, setEducationInfo] = useState({
    school: '',
    degree: '',
    graduationYear: ''
  });
  const [isFilled, setIsFilled] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
        setIsFilled(true);
  }

  const handleEdit = () => {
    setIsFilled(false);
  }
  return (
    <div className="bg-slate-700 p-4 m-4 rounded">
      <h1 className="text-2xl font-mono uppercase font-bold text-white text-center my-4">Education History</h1>
      {!isFilled ? (
        <form className="display flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <input
          placeholder='School'
          type="text"
          value={educationInfo.school}
          onChange={e => setEducationInfo({...educationInfo, school: e.target.value})}
        />
        <input
          placeholder='Degree'
          type="text"
          value={educationInfo.degree}
          onChange={e => setEducationInfo({...educationInfo, degree: e.target.value})}
        />
        <input
          placeholder='Graduation Year'
          type="text"
          value={educationInfo.graduationYear}
          onChange={e => setEducationInfo({...educationInfo, graduationYear: e.target.value})}
        />
        <button type="submit" className="bg-amber-600 px-1 rounded my-1 w-20 self-center">Submit</button>
      </form> 
      ) : (
        <div className="text-white display flex flex-col justify-center">
        <p>School: {educationInfo.school}</p>
        <p>Degree: {educationInfo.degree}</p>
        <p>Graduation Year: {educationInfo.graduationYear}</p>
        <button onClick={handleEdit} className="bg-gray-500 px-1 rounded my-1 w-20 self-center">Edit</button>
      </div>
      )}    
    </div>
  );
}

export default Education
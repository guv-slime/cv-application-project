import { useState } from 'react';

function Work() {
  const [workInfo, setWorkInfo] = useState({
    company: '',
    position: '',
    years: ''
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
      <h1 className="text-2xl font-mono uppercase font-bold text-white text-center my-4">Work History</h1>
      {!isFilled ? (
        <form className="display flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <input
          placeholder='Company'
          type="text"
          value={workInfo.company}
          onChange={e => setWorkInfo({...workInfo, company: e.target.value})}
        />
        <input
          placeholder='Position'
          type="text"
          value={workInfo.position}
          onChange={e => setWorkInfo({...workInfo, position: e.target.value})}
        />
        <input
          placeholder='Years'
          type="text"
          value={workInfo.years}
          onChange={e => setWorkInfo({...workInfo, years: e.target.value})}
        />
        <button type="submit" className="bg-amber-600 px-1 rounded my-1 w-20 self-center">Submit</button>
      </form> 
      ) : (
        <div className="text-white display flex flex-col justify-center">
        <p>Company: {workInfo.company}</p>
        <p>Position: {workInfo.position}</p>
        <p>Years: {workInfo.years}</p>
        <button onClick={handleEdit} className="bg-gray-500 px-1 rounded my-1 w-20 self-center">Edit</button>
      </div>
      )}    
    </div>
  );
}

export default Work
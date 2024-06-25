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
    <div className="bg-slate-700 p-4 m-4 rounded h-[225px] relative">
      <h1 className="text-2xl font-mono uppercase font-bold text-white text-center my-4">Work History</h1>
      {!isFilled ? (
        <form className="display flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <input
          className="rounded-sm pl-1"
          placeholder='Company'
          type="text"
          value={workInfo.company}
          onChange={e => setWorkInfo({...workInfo, company: e.target.value})}
        />
        <input
          className="rounded-sm pl-1"
          placeholder='Position'
          type="text"
          value={workInfo.position}
          onChange={e => setWorkInfo({...workInfo, position: e.target.value})}
        />
        <input
          className="rounded-sm pl-1"
          placeholder='Years'
          type="text"
          value={workInfo.years}
          onChange={e => setWorkInfo({...workInfo, years: e.target.value})}
        />
        <button type="submit" className="absolute bottom-0 right-0 bg-amber-600 px-1 rounded m-4 w-20">Submit</button>
      </form> 
      ) : (
        <div className="text-white display flex flex-col justify-center text-lg">
        <p>Company: {workInfo.company}</p>
        <p>Position: {workInfo.position}</p>
        <p>Years: {workInfo.years}</p>
        <button onClick={handleEdit} className="absolute bottom-0 right-0 bg-gray-500 px-1 m-4 rounded w-20 text-base">Edit</button>
      </div>
      )}    
    </div>
  );
}

export default Work
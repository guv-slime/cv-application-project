import { useState } from 'react';

function General() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
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
      <h1 className="text-2xl font-mono uppercase font-bold text-white text-center my-4">General Information</h1>
      {!isFilled ? (
        <form className="display flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <input
          className="rounded-sm pl-1"
          placeholder='Name'
          type="text"
          value={generalInfo.name}
          onChange={e => setGeneralInfo({...generalInfo, name: e.target.value})}
        />
        <input
          className="rounded-sm pl-1"
          placeholder='Email'
          type="text"
          value={generalInfo.email}
          onChange={e => setGeneralInfo({...generalInfo, email: e.target.value})}
        />
        <input
          className="rounded-sm pl-1"
          placeholder='Phone'
          type="text"
          value={generalInfo.phone}
          onChange={e => setGeneralInfo({...generalInfo, phone: e.target.value})}
        />
        <button type="submit" className="absolute bottom-0 right-0 bg-amber-600 px-1 rounded m-4 w-20">Submit</button>
      </form> 
      ) : (
        <div className="text-white display flex flex-col justify-center text-lg">
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
        <button onClick={handleEdit} className="absolute bottom-0 right-0 bg-gray-500 px-1 m-4 rounded w-20 text-base">Edit</button>
      </div>
      )}    
    </div>
  );
}

export default General
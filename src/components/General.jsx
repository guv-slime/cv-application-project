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
    <div className="bg-slate-700 p-4 m-4 rounded">
      <h1 className="text-2xl font-mono uppercase font-bold text-white text-center my-4">General Info Component</h1>
      {!isFilled ? (
        <form className="display flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <input
          placeholder='Name'
          type="text"
          value={generalInfo.name}
          onChange={e => setGeneralInfo({...generalInfo, name: e.target.value})}
        />
        <input
          placeholder='email'
          type="text"
          value={generalInfo.email}
          onChange={e => setGeneralInfo({...generalInfo, email: e.target.value})}
        />
        <input
          placeholder='phone'
          type="text"
          value={generalInfo.phone}
          onChange={e => setGeneralInfo({...generalInfo, phone: e.target.value})}
        />
        <button type="submit" className="bg-amber-600 px-1 rounded my-1 w-20 self-center">Submit</button>
      </form> 
      ) : (
        <div className="text-white display flex flex-col justify-center">
        <p>Name: {generalInfo.name}</p>
        <p>email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
        <button onClick={handleEdit} className="bg-gray-500 px-1 rounded my-1 w-20 self-center">Edit</button>
      </div>
      )}    
    </div>
  );
}

export default General
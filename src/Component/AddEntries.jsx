import React ,{useState} from 'react';
// import Layout from './Layout';

const AddEntries = () => {
    
    const [title ,setTitle] = useState('');
    const [location,setLocation] = useState('');
    const [date,setDate] = useState("")
    const [description, setDescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    const newEntry = { id: Date.now(), title, location, date, description };
    localStorage.setItem('entries', JSON.stringify([...entries, newEntry]));
    history.push('/view');
    
  };

  return (
    
        <div className='add-entry-container'>
      <h1>Add New Entry</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type='text' className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div>
          <label>Location</label>
          <input type='text' className="form-control" value={location} onChange={(e)=>setLocation(e.target.value)} />
        </div>
        <div>
          <label>Date</label>
          <input type='text' className="form-control" value={date} onChange={(e)=>setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add Entry</button>
      </form>
    </div>

  );
};

export default AddEntries;

import React, {useState,useEffect} from 'react'
// import Layout from './Layout'

const ViewEntries = () => {
const [entries, setEntries] = useState([]);

useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    setEntries(storedEntries);
  }, []);

  const deleteEntry = (id) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
  };

  const handleEdit = (id) => {
    const newTitle = prompt('Enter new title');
    const newLocation = prompt('Enter new location');
    const newDate = prompt('Enter new date');
    const newDescription = prompt('Enter new description');
    
    const updatedEntries = entries.map(entry =>
      entry.id === id ? { ...entry, title: newTitle, location: newLocation, date: newDate, description: newDescription } : entry
    );
    
    setEntries(updatedEntries);
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
  };
   



  return (

        <div className='view-entries-container'>
      <h2>View Entries</h2>
      {entries.length === 0 ? (
        <p>No entries available. Add some entries to view them here.</p>
      ) : (
        <ul className="list-group">
          {entries.map(entry => (
            <li key={entry.id} className="list-group-item">
              <h5>{entry.title}</h5>
              <p><strong>Location:</strong> {entry.location}</p>
              <p><strong>Date:</strong> {entry.date}</p>
              <p><strong>Description:</strong> {entry.description}</p>
              <button className="btn btn-warning mr-2" onClick={() => handleEdit(entry.id)}>Edit</button>
              <button className="btn btn-danger" onClick={() => deleteEntry(entry.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
    
  )
}

export default ViewEntries
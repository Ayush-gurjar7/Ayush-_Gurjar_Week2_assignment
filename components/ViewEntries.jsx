import React from 'react';
import { Link } from 'react-router-dom';

function ViewEntries({ entries, onEdit, onDelete }) {
  if (entries.length === 0) {
    return (
      <div className="container mt-4">
        <h2>No Entries Available</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>View Entries</h2>
      <ul className="list-group">
        {entries.map((entry, index) => (
          <li key={index} className="list-group-item">
            <h5>{entry.title}</h5>
            <p><strong>Location:</strong> {entry.location}</p>
            <p><strong>Date:</strong> {entry.date}</p>
            <p><strong>Description:</strong> {entry.description}</p>
            <button className="btn btn-warning btn-sm mr-2" onClick={() => onEdit(index)}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewEntries;

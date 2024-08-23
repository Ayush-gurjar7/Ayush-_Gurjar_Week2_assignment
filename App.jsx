import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import AddEntry from './components/AddEntry.jsx';
import ViewEntries from './components/ViewEntries.jsx';

function App() {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const handleEditEntry = (index) => {
    // Implement edit functionality here
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEntry onAdd={handleAddEntry} />} />
        <Route path="/view" element={<ViewEntries entries={entries} onEdit={handleEditEntry} onDelete={handleDeleteEntry} />} />
      </Routes>
    </Router>
  );
}

export default App;

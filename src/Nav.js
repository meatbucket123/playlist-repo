import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // Import the "+" icon from react-icons/fa

export default function Nav({
  handleNewPlaylistSubmit,
  newPlaylistTitle,
  setNewPlaylistTitle,
  searchQuery,
  setSearchQuery,
  handleSearch, // Add handleSearch prop for searching functionality
}) {
  const [isInputVisible, setInputVisible] = useState(false); // State to track input visibility

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible); // Toggle input visibility
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewPlaylistSubmit(e); // Call the parent component's submit function
    setInputVisible(false); // Hide the input field after submitting
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value === '') {
      // If search query is empty, reset the search results
      handleSearch(''); // Call handleSearch with empty query to reset results
    } else {
      handleSearch(value); // Call handleSearch with the actual search query
    }
  };

  return (
    <div className="nav-container">
      <div className="nav-top-left">
        <button className="add-btn" onClick={toggleInputVisibility}>
          <FaPlus style={{ background: 'transparent', border: 'none' }} />
        </button>
      </div>
      <div className="nav-middle">
        <input
          className="search"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search songs..."
        />
      </div>
      {isInputVisible && (
        <form onSubmit={handleSubmit} className="nav-bottom">
          <input
            type="text"
            value={newPlaylistTitle}
            onChange={(e) => setNewPlaylistTitle(e.target.value)}
            placeholder="Enter playlist title"
          />
          <button type="submit">Add Playlist</button>
        </form>
      )}
    </div>
  );
}

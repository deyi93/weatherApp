import React, { useState } from 'react';
import '../App.css';
interface SearchBarProps {
  input: string;
  setInput: (val: string) => void;
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, input, setInput }) => {
  // const [input, setInput] = useState('Singapore'); // Default value
  const [error, setError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      try{
        setError('');
        await onSearch(input.trim());
        console.log(input);
      } catch (err) {
        console.log(err);
        setError('City not found. Please try again.');
      }

    }
  };

  return (
    // <form onSubmit={handleSubmit} className="search-form">
    //   <input
    //     type="text"
    //     value={input}
    //     placeholder="Search country or city here..."
    //     onChange={(e) => setInput(e.target.value)}
    //   />
    //   <button type="submit">Search</button>
    // </form>
    <div className='search-bar-div'>
      <form onSubmit={handleSubmit} className="search-bar-container">
        <div className="search-bar-inner">
          <span className="search-icon-left">📍</span>
          <input
            type="text"
            value={input}
            placeholder="Search country or city here..."
            onChange={(e) =>{
              const value = e.target.value;
              // Allow only letters, commas, and spaces
              const cleaned = value.replace(/[0-9]/g, '');
              setInput(cleaned)
            }}
            className="search-bar-input"
          />
          <button type="submit" className="search-icon-button" title="Search">
            🔍
          </button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
    
  );
};

export default SearchBar;

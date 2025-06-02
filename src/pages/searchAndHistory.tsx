import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
interface SearchHistoryProps {
  onSearch: (city: string) => Promise<void>;
  input: string;
  setInput: (val: string) => void;
}

const STORAGE_KEY = 'weatherSearchHistory';

const SearchHistory: React.FC<SearchHistoryProps> = ({ onSearch, input, setInput }) => {
  const [localInput, setLocalInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  const saveHistory = (city: string) => {
    const newHistory = [city, ...history.filter((h) => h !== city)].slice(0, 10);
    setHistory(newHistory);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
  };

  const handleSearch = async (city: string) => {
    try {
      setError('');
      setInput(city)
      await onSearch(city);
      saveHistory(city);
      setLocalInput('');   
      navigate('/');
    } catch (err) {
      setError('City not found. Please try again.');
    }
  };

  const handleDelete = (cityToDelete: string) => {
    const newHistory = history.filter((c) => c !== cityToDelete);
    setHistory(newHistory);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localInput.trim()) handleSearch(localInput.trim());
  };

  return (
    <div className="search-history-container">
      <h2 className="search-title">Search History</h2>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={localInput}
          placeholder="Search country or city here..."
          onChange={(e) =>{
            const value = e.target.value;
            // Allow only letters, commas, and spaces
            const cleaned = value.replace(/[0-9]/g, '');
            setLocalInput(cleaned)
          }}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      <h3 className="history-title">Search History</h3>
      <ul className="history-list">
        {history.map((city, index) => (
          <li key={index} className="history-item">
            <span>{city}</span>
            <div className="icon-buttons">
              <button onClick={() => handleSearch(city)} title="Search again">🔍</button>
              <button onClick={() => handleDelete(city)} title="Delete from history">🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default SearchHistory;

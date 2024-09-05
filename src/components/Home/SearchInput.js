import React, { useState } from 'react';

const SearchInput = ({ data, onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on the input value
    const filteredSuggestions = data.filter(item => {
      // Modify this condition to match any field in your data
      return item.name && item.name.toLowerCase().includes(value.toLowerCase());
    });
    setSuggestions(filteredSuggestions);
  };

  const handleSelect = (selectedItem) => {
    onSelect(selectedItem);
    setInputValue('');
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {suggestions.map((item, index) => (
          <li key={index} onClick={() => handleSelect(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;

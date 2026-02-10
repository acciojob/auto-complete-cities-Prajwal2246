import React from "react";
import { useState } from "react";

function AutoComplete({ suggestions }) {
  const [input, setInput] = useState("");

  const fiteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase()),
  );
  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Type to search..."
        onChange={(e) => setInput(e.target.value)}
      />

      {input && (
        <ul className="suggestions">
          {fiteredSuggestions.length > 0 ? (
            fiteredSuggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(item)}
                style={{ cursor: "pointer" }}
              >
                {item}
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;

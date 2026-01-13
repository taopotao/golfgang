import { useState, useRef, useEffect } from 'react';

/**
 * CourseSearch - Simple course name input
 * 
 * This is a basic version. If you have Google Places Autocomplete,
 * replace this with your CourseAutocomplete component.
 */
export default function CourseSearch({ value, onSelect }) {
  const [inputValue, setInputValue] = useState(value || '');

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    // Call onSelect with the new value
    onSelect?.({
      name: newValue,
      address: '',
      placeId: '',
    });
  };

  const handleClear = () => {
    setInputValue('');
    onSelect?.({
      name: '',
      address: '',
      placeId: '',
    });
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        className="input"
        placeholder="Enter course name"
        value={inputValue}
        onChange={handleChange}
        style={{ paddingRight: inputValue ? 36 : undefined }}
      />
      {inputValue && (
        <button
          type="button"
          onClick={handleClear}
          style={{
            position: 'absolute',
            right: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 16,
            color: 'var(--color-text-tertiary)',
            padding: 4,
            lineHeight: 1,
          }}
          aria-label="Clear"
        >
          ✕
        </button>
      )}
    </div>
  );
}
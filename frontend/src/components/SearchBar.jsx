import { useState } from 'react'

function SearchBar({ placeholder = 'Search games...', onChange }) {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
    if (onChange) onChange(e.target.value)
  }

  const handleClear = () => {
    setValue('')
    if (onChange) onChange('')
  }

  return (
    <div className="relative flex items-center w-full">
      <span className="absolute left-3 text-gray-400 text-lg">🔍</span>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full bg-secondary text-light pl-10 pr-10 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-primary transition"
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-3 text-gray-400 hover:text-light transition"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <label>
        <span>Enter movie title</span>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        ></input>
      </label>
    </div>
  );
};

export default SearchBox;

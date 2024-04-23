import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <p className={css.findField}>Find contacts by name:</p>
      <input
        type="text"
        placeholder="type..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;

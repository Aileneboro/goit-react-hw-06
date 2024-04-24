import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p className={css.findField}>Find contacts by name:</p>
      <input
        type="text"
        placeholder="type..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;

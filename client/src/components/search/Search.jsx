import "./Search.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountrie,currentPage } from "../../redux/action";

const Search = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');

	const handleChange = (event) => {
      event.preventDefault();
      const { value } = event.target;
      setSearch(value);
    }
	
	useEffect(() => {
		dispatch(getCountrie(search));
		dispatch(currentPage(1))
	},[search, dispatch]);
	
	return (
		<div className="container__search">
		<input type="text" name="search" id="" autoComplete="off" placeholder="Buscar..." onChange={handleChange}/>
		</div>
	)
}

export default Search;
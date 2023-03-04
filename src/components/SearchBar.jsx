const SearchBar = (props) => {
  
  const { onSearch, setSearch } = props;
  return (
    <form className="form-inline" role="search" onSubmit={onSearch}>
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control form-control-dark text-bg-dark"
          placeholder="Search..." onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="text-end">
      <button type="submit" className="btn btn-warning">
        Search
      </button>
      </div>
      
    </form>
  );
};

export default SearchBar;

const Search = () => {
    return ( 
        <div className="px-8 pt-10 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="drop-shadow-sm">
                <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/>
                </svg>
                </span>
                <input className="text-xs placeholder:text-slate-400 block bg-white w-full border border-indigo-50 rounded-md py-4 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for a country..." type="text" name="search"/>
                </label>
            </div>
            <div>
              <select className=" bg-slate-500 ">
                <option>Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="Africa">America</option>
                <option value="Africa">Asia</option>
                <option value="Africa">Europe</option>
                <option value="Africa">Oceania</option>
              </select>
            </div>
        </div>
     );
}
 
export default Search;
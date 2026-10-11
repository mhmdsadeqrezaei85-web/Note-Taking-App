import { NewNoteIcon, SearchIcon } from "./icons"

function SearchBar(){
    return(
        <div className="flex items-center justify-between place-content-center mt-4">
            <div className="flex items-center  h-12 w-6xl rounded-2xl border-gray-300 border-2 pl-4"><SearchIcon/></div>
            <button className="flex justify-center items-center text-white h-12 w-48 bg-blue-950 rounded-2xl"><NewNoteIcon/></button>
        </div>
    )
}

export default SearchBar
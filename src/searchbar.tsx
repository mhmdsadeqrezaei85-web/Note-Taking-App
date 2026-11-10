import { useState } from "react";
import AddNote from "./addNote"
import AddNoteButton from "./AddNoteButton";
import { NewNoteIcon, SearchIcon } from "./icons"



function SearchBar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="flex items-center justify-between place-content-center mt-4">
            <div className="flex items-center  h-12 w-6xl rounded-2xl border-gray-300 border-2 pl-4"><SearchIcon/></div>
            <div><AddNoteButton onClick={() => setIsOpen(true)}/>{isOpen && <AddNote onClose={()=>setIsOpen(false)}/>} </div>
        </div>
    )
}

export default SearchBar
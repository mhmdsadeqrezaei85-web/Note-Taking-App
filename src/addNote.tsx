import { useState } from "react";
import { Close } from "./icons";


type Props = {
    onClose: () => void;}

function AddNote({onClose}:Props){
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-1/6 h-3/6 bg-gray-500 rounded-2xl">
                <div onClick={onClose} className="flex justify-end my-1.5 mx-2"><Close/></div>
            </div>
        </div>
    )
}

export default AddNote
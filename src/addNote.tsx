import { useDispatch,useSelector } from "react-redux";
import type { AppDispatch,RootState } from "./Store";
import { OpenTheBox,CloseTheBox,SelectedOption } from "../NoteTypeBox";


// type Props = {
//     onClose: () => void;}

function AddNote(){
    const dispatch = useDispatch<AppDispatch>()
    const {isOpen, SelectOption } = useSelector(
    (state: RootState) => state.typeBox
    )
    const Options = ["Job","Home","Others"]
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="flex flex-col w-1/6 h-3/6 bg-gray-500 rounded-2xl">
                <input 
                className="bg-white mx-4 p-2 rounded-xl mt-4"
                placeholder="Note Tittle"
                />
                <textarea
                className="bg-white mx-4 rounded-xl h-36 mt-4 p-2"
                placeholder="Explanations..."
                />

                <button className="w-full p-3 border rounded-lg flex justify-between" onClick={()=>dispatch(OpenTheBox())}>{SelectOption}</button>
                {isOpen && (
                    <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg">

                        {Options.map((option)=>(
                            <div key={option} className="p-3 hover:bg-gray-100 cursor-pointer" onClick={()=>dispatch(SelectedOption(option))}></div>
                        ))

                        }

                    </div>
                )}

                <div className="flex mt-auto mb-3">
                    <button onClick={()=>dispatch(CloseTheBox())} className="flex-1 rounded-2xl bg-amber-400 mx-4">Cancel</button>
                    <button className="flex-1 bg-fuchsia-600 rounded-2xl mx-4">Create</button>
                </div>
            </div>
        </div>
    )
}

export default AddNote
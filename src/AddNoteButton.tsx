import { NewNoteIcon } from "./icons";

type AddNoteButtonProps = {
  onClick: () => void;
};

function AddNoteButton({ onClick }: AddNoteButtonProps) {
  return (
    <button className="flex justify-center items-center text-white h-12 w-48 bg-blue-950 rounded-2xl" onClick={onClick}>
        <NewNoteIcon/>
    </button>
  );
}

export default AddNoteButton;

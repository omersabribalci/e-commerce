import editorsPick1 from "../../assets/editors-pick/editors-pick-1.jpg";
import editorsPick2 from "../../assets/editors-pick/editors-pick-2.jpg";
import editorsPick3 from "../../assets/editors-pick/editors-pick-3.png";
import editorsPick4 from "../../assets/editors-pick/editors-pick-4.jpg";

const Button = ({ text }) => {
  return (
    <button className="bg-bg-light absolute bottom-6 left-6 h-12 min-w-20 text-text text-h5 font-bold cursor-pointer hover:bg-hover transition-colors duration-400">
      {text}
    </button>
  );
};

const EditorsPick = () => {
  return (
    <div className="px-10.25 py-20 xl:px-48.75 bg-gray-light-1">
      <h3 className="text-h3 text-text font-bold text-center">EDITOR’S PICK</h3>
      <p className="text-center mt-2.5 text-text-secondary mb-12">
        Problems trying to resolve the conflict between
      </p>
      <div className="flex flex-col gap-7.5 sm:flex-row sm:h-125">
        <div className="relative w-full h-125 sm:h-full sm:flex-2 min-w-0">
          <img
            src={editorsPick1}
            alt="MEN"
            className="w-full h-full object-cover"
          />
          <Button text={"MEN"} />
        </div>
        <div className="relative w-full h-125 sm:h-full sm:flex-1 min-w-0">
          <img
            src={editorsPick2}
            alt="WOMEN"
            className="w-full h-full object-cover"
          />
          <Button text={"WOMEN"} />
        </div>
        <div className="flex flex-col gap-7.5 w-full sm:flex-1 sm:h-full min-w-0">
          <div className="relative w-full h-58.75 sm:flex-1 min-h-0">
            <img
              src={editorsPick3}
              alt="ACCESSORIES"
              className="w-full h-full object-cover"
            />
            <Button text={"ACCESSORIES"} />
          </div>
          <div className="relative w-full h-58.75 sm:flex-1 min-h-0">
            <img
              src={editorsPick4}
              alt="KIDS"
              className="w-full h-full object-cover"
            />
            <Button text={"KIDS"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;

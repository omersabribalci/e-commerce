import { LoaderCircle } from "lucide-react";

const Loading = ({ className = "w-dvw h-dvh" }) => {
  return (
    <div className={`flex items-center justify-center text-center ${className}`}>
      <LoaderCircle className="animate-spin text-primary mx-auto" size={40} />
    </div>
  );
};

export default Loading;

import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center text-center w-dvw h-dvh">
      <LoaderCircle className="animate-spin text-primary mx-auto" size={40} />
    </div>
  );
};

export default Loading;

import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div>
      <LoaderCircle className="animate-spin text-primary" size={40} />
    </div>
  );
};

export default Loading;

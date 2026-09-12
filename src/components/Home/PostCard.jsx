import { CalendarClock, ChartArea, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const PostCard = ({ post }) => {
  return (
    <div className="bg-bg-light shadow-light flex flex-col max-w-80 max-h-150 transition-transform duration-300 hover:scale-105">
      <div className="relative h-75">
        <img src={post?.image} />
        <button className="absolute left-5 top-5 px-2.5 bg-danger text-h6 text-text-light font-bold rounded-[3px]">
          NEW
        </button>
      </div>

      <div className="p-6.25 flex flex-col gap-2.5">
        <div className="flex flex-row gap-3.75">
          <p className="text-small text-disabled">Google</p>
          <p className="text-small text-text-secondary">Trending</p>
          <p className="text-small text-text-secondary">New</p>
        </div>
        <h4 className="text-h4 text-text">{post?.title}</h4>
        <p className="text-paragraph text-text-secondary">{post.description}</p>
        <div className="flex flex-row justify-between py-3.75">
          <div className="flex flex-row items-center gap-1.25">
            <CalendarClock className="text-primary w-4 h-4" />
            <p className="text-small text-text-secondary">
              {post?.date?.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="flex flex-row items-center gap-1.25">
            <ChartArea className="text-secondary-1 w-4 h-4" />
            <p className="text-small text-text-secondary">
              {post?.commentCount} comments
            </p>
          </div>
        </div>

        <Link className="text-h6 text-text-secondary font-bold flex flex-row transition-transform duration-300 hover:scale-105 cursor-pointer origin-left">
          Learn More
          <ChevronRight strokeWidth={2} className="text-primary" />
        </Link>
      </div>
    </div>
  );
};

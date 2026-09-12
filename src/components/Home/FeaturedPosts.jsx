import { posts } from "../../data/posts";
import { PostCard } from "./PostCard";

const FeaturedPosts = () => {
  return (
    <div className="flex flex-col gap-20 py-20 px-[42.5px] lg:px-48.75 lg:py-28 items-center">
      <div className="flex flex-col gap-2.5 items-center text-center">
        <h6 className="text-h6 text-primary font-bold">Practice Advice</h6>
        <h2 className="text-h2 text-text font-bold">Featured Products</h2>
        <p className="text-paragraph text-text-secondary">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-7.5">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;

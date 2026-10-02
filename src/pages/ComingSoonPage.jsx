import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import PageContent from "../layouts/PageContent";

const ComingSoonPage = ({ collection }) => {
  return (
    <PageContent>
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-small font-bold uppercase tracking-widest text-primary">
          Coming soon
        </p>
        <h1 className="mt-4 text-h2 font-bold text-text">
          {collection} is on its way.
        </h1>
        <p className="mt-4 max-w-lg text-paragraph text-text-secondary">
          We're putting the finishing touches on this collection. Check back
          soon; in the meantime, explore what is already in store.
        </p>
        <Link
          to="/shop"
          className="mt-8 rounded-md bg-primary px-6 py-3 font-bold text-text-light transition-colors hover:bg-hover"
        >
          Explore the Shop
        </Link>
      </Container>
    </PageContent>
  );
};

export default ComingSoonPage;

import { Link } from "react-router-dom";

import Container from "../ui/Container";

const Categories = ({ categories }) => {
  return (
    <section className="bg-gray-light-1">
      <Container className="flex flex-col items-center lg:flex-row gap-3.75 py-6 lg:pb-12 justify-center">
        {categories.map((category) => (
          <Link
            to={`/shop/${category.gender === "k" ? "kadin" : "erkek"}/${category.code.split(":")[1]}/${category.id}`}
            key={category.id}
            className="relative transition-transform duration-300 hover:scale-105"
          >
            <img
              src={category?.img}
              alt={category?.title}
              className="w-full h-75 object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h5 className="text-h5 text-text-light font-bold rounded-sm">
                {category.gender === "k" ? "KADIN" : "ERKEK"}{" "}
                {category?.title.toUpperCase()}
              </h5>
              {/* <p className="text-paragraph text-text-light">
                {category?.rating} rating
              </p> */}
            </div>
          </Link>
        ))}
      </Container>
    </section>
  );
};

export default Categories;

import Container from "../ui/Container";

const Video = () => {
  return (
    <Container className="py-20 lg:py-28 flex justify-center items-center text-center">
      <iframe
        className="border h-75 lg:h-135 w-full aspect-video rounded-2xl"
        title="About Us Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        src="https://www.youtube.com/embed/nqye02H_H6I"
        frameBorder="0"
      ></iframe>
    </Container>
  );
};

export default Video;

const Video = () => {
  return (
    <div className="py-20 lg:py-28 px-13.5 lg:px-56.25 flex justify-center items-center text-center aspect-video">
      <iframe
        className="border h-75 lg:h-135 w-full aspect-video rounded-2xl"
        title="About Us Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        src="https://www.youtube.com/embed/nqye02H_H6I"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Video;

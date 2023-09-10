const Heading = ({ header, paragraph }) => {
  return (
    <div className="info-heading capitalize">
      <h1 className="text-blue-950 text-md font-bold ">{header}</h1>
      <span className="sub-heading text-gray-400 tracking-wide max-w-sm md:max-w-0">
        {paragraph}
      </span>
    </div>
  );
};

export default Heading;

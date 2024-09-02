const List = ({ list }) => {
  const { src, description } = list;
  return (
    <>
      <figure>
        <div className="img-wrap">
          <img src={src} />
        </div>
        <figcaption>{description}</figcaption>
      </figure>
    </>
  );
};
export default List;

import useFetchData from "../customHooks/useFetchData";

function GenresList() {
  const { data } = useFetchData("/genres"); // passing endpoint as "/genres"
  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenresList;

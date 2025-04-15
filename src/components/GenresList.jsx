import useFetchGenres from "../customHooks/useFetchGenres";

function GenresList() {
  const { genres } = useFetchGenres();
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenresList;

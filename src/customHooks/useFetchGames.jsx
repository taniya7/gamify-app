import { useEffect, useState } from "react";
import ClientAPI from "../services/ClientAPI";
import { CanceledError } from "axios";

function useFetchGames() {
  // creating custom hook to fetch games API data
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController(); // creating instance of 'AbortController()' should be inside 'useEffect()'

    ClientAPI.get("/games", { signal: controller.signal }) // passing '{ signal: controller.signal }' as property to get request
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          // error catching if it is 'cancelled/aborted' error
          console.log("Cancelled!");
          return;
        }
        setError(err.message);
        console.log(err.message);
      });

    return () => controller.abort(); // cleaning up previous API data
  }, []);

  return { games, error }; // returning 'games' and 'error' as objects
}

export default useFetchGames;

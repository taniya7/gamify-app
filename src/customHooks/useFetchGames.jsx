import { useEffect, useState } from "react";
import ClientAPI from "../services/ClientAPI";
import { CanceledError } from "axios";

function useFetchGames() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false); // defining loader using 'useState'

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true); // when api is called 'loader' is set 'true'
    console.log("Loader started");
    ClientAPI.get("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          console.log("Cancelled!");
          return;
        }
        setError(err.message);
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false); // when data is fetched 'loader' is set 'false'
        console.log("Loader ended");
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading }; // 'isLoading' is returned
}

export default useFetchGames;

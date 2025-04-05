import { useEffect, useState } from "react";
import ClientAPI from "../services/ClientAPI";
import { CanceledError } from "axios";

function useFetchGames() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

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
      });

    return () => controller.abort();
  }, []);

  return { games, error };
}

export default useFetchGames;

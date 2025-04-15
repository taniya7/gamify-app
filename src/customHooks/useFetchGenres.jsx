import { useEffect, useState } from "react";
import ClientAPI from "../services/ClientAPI";
import { CanceledError } from "axios";

function useFetchGenres() {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    ClientAPI.get("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        console.log("Genres : ", res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          console.log("Canceled");
          return;
        }
        setError(err.message);
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
}

export default useFetchGenres;

import { useEffect, useState } from "react";
import ClientAPI from "../services/ClientAPI";
import { CanceledError } from "axios";

function useFetchData(endpoint) {
  // function will take 'endpoint' as parameter which can be "/games" or "/genres"
  const [data, setData] = useState([]); // fetching particular endpoint data
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    ClientAPI.get(endpoint, { signal: controller.signal }) // calling endpoint
      .then((res) => {
        setData(res.data.results);
        console.log(endpoint, " data : ", res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          console.log("Canceled");
          return;
        }
        setError(err.message);
        console.log(endpoint, " error : ", err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading }; // returning particular endpoint data
}

export default useFetchData;

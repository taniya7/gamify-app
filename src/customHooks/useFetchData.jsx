import { useEffect, useState } from "react";
import ClientAPI from "../services/ClientAPI";
import { CanceledError } from "axios";

function useFetchData(endpoint) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    ClientAPI.get(endpoint, { signal: controller.signal })
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

  return { data, error, isLoading };
}
export default useFetchData;

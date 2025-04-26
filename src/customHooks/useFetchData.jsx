import { useEffect, useState } from "react";
import ClientAPI from "../services/ClientAPI";
import { CanceledError } from "axios";

function useFetchData(endpoint, requestConfig, deps) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      // Axios GET with a params object containing the genre’s ID. Axios serializes that into a query string (e.g ?genres=4) and sends it as a HTTP request.
      // Backend code filters the games based on genre id and gives filtered games to frontend.
      setLoading(true);
      ClientAPI.get(endpoint, { signal: controller.signal, ...requestConfig }) // spreading 'requestConfig' object to get updated value
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
    },
    deps ? [...deps] : [] // spreading 'deps' array to get updated value only when 'deps' contains a valid value
  );

  return { data, error, isLoading };
}
export default useFetchData;




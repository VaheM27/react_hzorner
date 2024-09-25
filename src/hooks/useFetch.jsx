import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch({ baseURL, target }) {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios({
      baseURL,
      url: target,
    })
      .then((res) => setState(res?.data))
      .finally(() => setLoading(false));
  }, [baseURL, target]);
  return [state, loading];
}

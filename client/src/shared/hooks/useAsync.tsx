import { useEffect, useState } from "react";

export default function useAsync(asyncFunction) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // This function received whatever data that we want to send.
  const execute = async (...args) => {
      try {
        setLoading(true);
        setError(null);

        // We let the fn that they sent us execute it here with their params and, we wait here for their response.
        const result = await asyncFunction(...args);

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

  return { execute, data, loading, error };
}

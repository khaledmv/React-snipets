import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading ] = useState(false);

    useEffect(() => {
        const fechData = async () => {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        fechData();
    }, [url]);

  return { data, loading };
}

export default useFetch
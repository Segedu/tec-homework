import { useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(getData, [])

    function getData() {
        fetch(url)
            .then(res => res.json())
            .then(data => { setIsLoading(false), setData(data) }
            ).catch(error => { setError(error) })
    }
    return [data, error, isLoading];
}

export default useFetch
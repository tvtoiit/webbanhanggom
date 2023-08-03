import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loadedData, setLoadedData] = useState(true);
    const [isloadData, setIsLoadedData] = useState(false);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source();
        let isMounted = true;

        async function fetchData() {
            try {
                const res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                });

                let data = res && res.data ? res.data : [];

                if (data && data.length > 0 && isMounted && isloadData === true) {
                    data = data.map((item) => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    });
                    data.reverse();
                }

                setData(data);
                setLoadedData(false);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.log('Request canceled', e.message);
                } else {
                    console.log(e.name, e.message);
                }
            }
        }

        fetchData();

        return () => {
            isMounted = false;
            ourRequest.cancel();
        };
    }, [url, isloadData]);

    return {
        data,
        loadedData,
    };
};

export default useFetch;

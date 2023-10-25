import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    //bằng componentDidMound
    useEffect(() => {
        try {
            async function fetchData() {
                // let res = await axios.get(url);
                // let data = res && res.data && res.data.locations ? res.data.locations : [];
                // // if (data && data.length > 0) {
                // //     data.map(item => {
                // //         item.Date = moment(item.Date).format('DD/MM/YYYY');
                // //         return item;
                // //     });
                // //     data = data.reverse();
                // // }
                // setData(data);
                setIsLoading(false);
                setIsError(false);
            }

            fetchData();
        }
        catch (e) {
            setIsError(true);
            setIsLoading(false);
            // alert(e.message);
            // console.log('>>> Check ex: ', e);
            // console.log('>>> Check error name: ', e.name);
            // console.log('>>> Check error message: ', e.message);
        }
    }, []);

    return {
        data, isLoading, isError
    }
}

export default useFetch;
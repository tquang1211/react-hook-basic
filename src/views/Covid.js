import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    //bằng componentDidMound
    useEffect(async () => {
        try {
            // let res = await axios.get('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true');
            // let data = res && res.data && res.data.locations ? res.data.locations : [];

            // // if (data && data.length > 0) {
            // //     data.map(item => {
            // //         item.Date = moment(item.Date).format('DD/MM/YYYY');
            // //         return item;
            // //     });
            // //     data = data.reverse();
            // // }

            // setDataCovid(data);
            setIsLoading(false);
            setIsError(false);
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

    return (
        <>
            <h3>Covid 19 tracking:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Country name</th>
                        <th>Cases</th>
                        <th>Death</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isError === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.name}>
                                    <td>{item.name}</td>
                                    <td>{item.cases}</td>
                                    <td>{item.death}</td>
                                    <td>{item.recovered}</td>
                                </tr>
                            );
                        })
                    }
                    {
                        isLoading === true &&
                        <tr>
                            <td colspan='5' style={{ 'textAlign': "center" }}>Loading data...</td>
                        </tr>
                    }
                    {
                        isError === true &&
                        <tr>
                            <td colspan='5' style={{ 'textAlign': "center" }}>Something wrong...</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Covid;
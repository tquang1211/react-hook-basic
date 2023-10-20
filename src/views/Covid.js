import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([]);
    //bằng componentDidMound
    useEffect(async () => {
        //let res = await axios.get('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true');
        //let data = res && res.data && res.data.locations ? res.data.locations : [];

        //if (data && data.length > 0) {
        // data.map(item => {
        //     item.Date = moment(item.Date).format('DD/MM/YYYY');
        //     return item;
        // });
        //}

        //setDataCovid(data);
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
                        dataCovid && dataCovid.length > 0 &&
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
                </tbody>
            </table>
        </>
    )
}

export default Covid;
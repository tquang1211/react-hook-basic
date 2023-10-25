import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";

const Covid = () => {

    const { data: dataCovid, isLoading, isError } = useFetch('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true');
    //let dataCovid = useFetch('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true').data;

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
                            <td colSpan='5' style={{ 'textAlign': "center" }}>Loading data...</td>
                        </tr>
                    }
                    {
                        isError === true &&
                        <tr>
                            <td colSpan='5' style={{ 'textAlign': "center" }}>Something wrong...</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Covid;
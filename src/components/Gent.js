import React,{useEffect, useState} from 'react'
import api from '../api/api'

//import component
import Map from './BaseMap'

const Gent = () => {

    const MINUTE_MS = 60000;
    const [dataGent, setDataGent] = useState();
    useEffect(() => {
        api
        .get("")
        .then((res) => {
            setDataGent(res.data.records);
            console.log(res.data.records);
        })
        .catch(() => { });
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            api
            .get("")
            .then((res) => {
                setDataGent(res.data.records);
                console.log("a",res.data.records);
            })
            .catch(() => { });
        }, MINUTE_MS);
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])

    return (
        <Map lng="3.72" lat="51.05" data={dataGent}/>
    )
}

export default Gent


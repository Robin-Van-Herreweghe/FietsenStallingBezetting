import axios from 'axios';

const instance = axios.create({
    baseURL: "https://data.stad.gent/api/records/1.0/search/?dataset=real-time-bezettingen-fietsenstallingen-gent&q=&rows=10&facet=facilityname",
    // baseURL: "https://localhost:44310/api",

    // cancel token
    // CancelToken: axios.CancelToken,
    // isCancel: axios.isCancel
});

export default instance;
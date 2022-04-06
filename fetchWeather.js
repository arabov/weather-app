import React from 'react';
import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "1a074aca2046b2c8fc2adb77a89269c6";

export const fetchWeather = async ( query )  =>  {
    const  { data } = await  axios.get(URL ,{
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key, 
        }
    })

    return data;
}
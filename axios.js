import axios from 'axios';

const ThailandTimeline = async()=>{
    try{
        const response = await axios.get('http://worldtimeapi.org/api/timezone/Asia/Bangkok');
        const { utc_datetime } = response.data;
        const utcDate = new Date(utc_datetime);
        return{
            hh: (utcDate.getUTCHours() +7),
            mm: utcDate.getUTCMinutes() ,
            ss: utcDate.getUTCSeconds() ,
            days: utcDate.getUTCDate(),
            months: utcDate.getUTCMonth() + 1,
            years: utcDate.getUTCFullYear(),
            zones: utcDate.getTimezoneOffset() / -60,
        };
    }catch(err){
        console.error('Error',err);
        throw err;
    }
};

export default ThailandTimeline;
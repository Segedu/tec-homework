import { useEffect } from "react";
import moment from 'moment';

const SetDateOnTitle = () => {

    useEffect(() => {
        setInterval(() => {
            document.title = moment().format("DD/MM/YYYY, HH:MM:SS")
        }, 1000)
    }, [])

    return (<p>Hello look at the title</p>)
}

export default SetDateOnTitle;
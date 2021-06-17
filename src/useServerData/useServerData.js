import {useState, useEffect } from 'react';
import axios from 'axios';


const useServerData = ({url, isButtonClick}) => {

    

/* кастомный хук содержит другие хуки)) */
    const [contactData, setContactData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = () => {

    }

    useEffect(() => {
      if(!isButtonClick){
        return
      }
        axios.get(url).then((res) => {
              //console.log(res)
              setContactData(res.data)
              setIsLoading(false)
            })
      }, [])
    

    return[{contactData, isLoading, setContactData, setIsLoading }, getData ]
}
export default useServerData;
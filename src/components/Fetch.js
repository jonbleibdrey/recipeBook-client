import axios from 'axios'
import React, {useEffect, useState} from 'react'


const Fetch = () => {
    const [info, setInfo] = useState(null)

    useEffect(() => {
       axios.get("https://rails-jonathanb-heroku-test.herokuapp.com/")
       .then((response) => {
       setInfo(response.data)
      });
    }, [])

    return (
        <div>
            {info && info.map(e => console.log(e))}
        </div>
    )
}

export default Fetch

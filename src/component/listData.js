import  React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from "react-router-dom"

export const ListData = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        getData()
    },[])
    
    const getData = async() =>{
        const responsed = await axios.get('https://majestic-chaja-697966.netlify.app/.netlify/functions/api/item')
        setData(responsed.data)
        console.log(responsed.data)
    }
    const deleteData = async(id) =>{
        try {
            await axios.delete(`https://majestic-chaja-697966.netlify.app/.netlify/functions/api/item/${id}`,data,
            {headers: {
                'Content-Type': 'application/json',
            },
        })
            getData();
        } catch (error) {
            console.log(error)
        }
    }   
  return (
    <div>
        {data.map((item) => {
            <div className='container'>
                <div className='name'>
                    <p>{item.name}</p>
                </div>
                <div className='description'>
                    <p>{item.description}</p>
                </div>
            </div>
        })}
    </div>
  )
}

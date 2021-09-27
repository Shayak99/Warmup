import React,{useState,useEffect} from 'react';
import {getUsers} from "./fetch/getdetails";
import Api from "./api_routes"
import {useParams} from "react-router-dom"

function Comments() {

    const[data, setData] = useState();
    const {id} = useParams();
  
    useEffect(() =>{
        async function get(){
            const response = getUsers(`${Api.posts}/${id}/comments`);
            setData(response);
        }
        get()
    },[data])
    // console.log("respons",data)

    return (
        
        <div>
            {data && data.map((item ,ind) => (
                <div key={ind}>
               Name : {item.name}
               Email : {item.email}
               Body : {item.body}
                </div>
            ))}
        </div>
    )
}

export default Comments

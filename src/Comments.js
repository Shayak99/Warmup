import React,{useState,useEffect} from 'react';
import {getUsers} from "./fetch/getdetails";
import Api from "./api_routes"
import {useParams} from "react-router-dom"

function Comments() {

    const[data, setData] = useState();
    const {id} = useParams();
  
    useEffect(() =>{
        async function get(){
            const response = await getUsers(`${Api.posts}/${id}/comments`);
            setData(response);
        }
        get()
    },[])
    // data.map(i => console.log(i.postId))

    return (
        <>
        <div className="font-bold text-2xl text-center">-- Comments --</div>
        <div className="flex flex-wrap">
            {data && data.map((item ,ind) => (
            <div key={ind} className="m-10 hover:bg-gray-100 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
               PostId : {item.postId} <br/>
               Name : {item.name} <br/> 
               Email : {item.email}
                </div>
            ))}
        </div>
        </>
    )
}

export default Comments

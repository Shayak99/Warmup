import React,{useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Home from "./Home";
import {getUsers,find} from "./fetch/getdetails";
import Api from "./api_routes"
import Comments from "./Comments";

function SinglePost({ userdata}) {

    const {id} = useParams();
    const [data, setData] = useState();
    // console.log("respons",data)
    // const similarpost = post.find(item => item.id == id)
    // const similarpost = find(post,id);
   

    useEffect(() => {
        async function get(){
            const response = await getUsers(`${Api.posts}/${id}`)
            setData(response)
        }
        get()
    },[])
    // console.log("data", data);
    // console.log("id", id)
    // console.log("similar", similarpost)
    // console.log("data.title", data.body.substring(0,10),"...")
    

    return (
        <>
        <Home/>
        <div className="m-10 font-semibold hover:bg-gray-100 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
            Title : {data.title} <br/>
            Body :  {data.body.substring(0,70)}.... 
        </div>
        {/* <Comments id={id}/> */}
        </>
        )
}

export default SinglePost

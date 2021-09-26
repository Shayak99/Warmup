import React from 'react';
import {useParams} from "react-router-dom";

function SinglePost({post, userdata}) {

    const {id} = useParams();
    const similarpost = post.find(item => item.id == id)
    // const similaruser = userdata.find(item => item.id == similarpost.userId);

    console.log("post", similarpost);
    // console.log("user", similaruser);

    return (
        <div className="m-10 hover:bg-gray-100 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
            Title : {similarpost.title} <br/>
            Body :  {similarpost.body.substring(0,70)}... 
        </div>)
}

export default SinglePost

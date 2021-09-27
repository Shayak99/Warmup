import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Home from "./Home";
import { getUsers, find } from "./fetch/getdetails";
import Api from "./api_routes";
import Comments from "./Comments";

function SinglePost({ post }) {
  const { id } = useParams();
  // const [data, setData] = useState();
  // console.log("respons",data)
  // const similarpost = post.find(item => item.id == id)
  const similarpost = find(post, id);

  // useEffect(() => {
  //     async function get(){
  //         const response = await getUsers(`${Api.posts}/${id}`)
  //         setData(response)
  //     }
  //     get()
  // },[])

  console.log("post", post);

  return (
    <>
      <Home />
      <div className="m-10 font-semibold hover:bg-gray-100 py-8 px-8 max-w-5xl mx-auto bg-white rounded-xl space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
        <div className="text-xl px-3">Title:</div> {similarpost.title}
        <div className="text-xl px-4"> Body: </div> {similarpost.body}
      </div>
      <Comments id={id}/>
    </>
  );
}

export default SinglePost;

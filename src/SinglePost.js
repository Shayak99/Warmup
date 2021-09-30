import React from "react";
import { useParams } from "react-router-dom";
import Home from "./Home";
import {  findUser } from "./fetch/getdetails";
// import Api from "./api_routes";
import Comments from "./Comments";

function SinglePost({ post }) {
  const { id } = useParams();
  // const [data, setData] = useState({});
  // console.log("respons",data)
  // const similarpost = post.find(item => item.id == id)
  const similarpost = findUser(post, id);

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
      <h1 className="bg-black text-white text-2xl m-10 max-w-sm mx-auto rounded-lg font-bold p-4 text-center">Single Post</h1>
      <div className="m-9 hover:bg-gray-100 py-8 px-8 max-w-5xl mx-auto bg-white rounded-xl shadow-xl space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
        <div className="text-xl px-3"><span className="font-semibold">Title: </span></div><span className="text-gray-500"> {similarpost.title}</span>
        <div className="text-xl px-4"><span className="font-semibold"> Body:</span> </div><span className="text-gray-500"> {similarpost.body}</span>
      </div>
      <Comments id={id}/>
    </>
  );
}

export default SinglePost;

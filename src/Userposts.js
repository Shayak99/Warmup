import React, { useState, useEffect } from "react";
import { getUsers } from "./fetch/getdetails";
import Api from "./fetch/api_routes";
import { useParams, Link } from "react-router-dom";
import Home from "./Home";

function Userposts({ data }) {
  const [posts, setPost] = useState();
  const { id } = useParams();

  async function getPost() {
    const response = await getUsers(`${Api.users}/${id}/posts`);
    // const result = await response.json();
    // console.log("result", result);
    setPost(response);
  }

  useEffect(() => {
    getPost();
  }, []);

  // console.log("posts",posts);
  // console.log("data",data);
  // console.log("posts", posts)
  // console.log("api", `${Api.users}/${id}/posts`)

  const similar = data.find((item) => Number(item.id) === Number(id));
  console.log("similar", similar);

  return (
    <>
      <Home />
      <div className="mx-8 my-9">
        <div className="font-bold bg-black p-5 max-w-sm mx-auto rounded-lg text-xl text-center  text-white">
          Posts by ~~ {similar.name}
        </div>
        <div className="flex flex-wrap">
          {posts &&
            posts.map((item, key) => (
              <div className="m-9 hover:bg-gray-100 py-8 px-8 max-w-lg bg-white rounded-xl shadow-md  sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
                <Link
                  to={`/post/${id}`}
                  key={key}
                  className="mt-3 bg-blue-400 p-3 font-bold rounded-lg text-white"
                >
                  {" "}
                  Click to See{" "}
                </Link>
                <div className="flex flex-wrap">
                  <div className="p-2 "> <span className="font-semibold">UserId :</span> <span className="text-gray-500">{item.userId}</span> </div>
                  <div className="p-2"> <span className="font-semibold">Id : </span><span className="text-gray-500">{item.id}</span> </div>
                  <div className="p-2"><span className="font-bold"> Title : </span><span className="text-gray-500">{item.title}</span> </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Userposts;

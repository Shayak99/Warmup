import React, { useState, useEffect } from "react";
// import { getUsers } from "./fetch/getdetails";
import Api from "./api_routes";
import { useParams, Link } from "react-router-dom";
import Home from "./Home";

function Userposts({ data }) {
  const [posts, setPost] = useState();
  const { id } = useParams();

  async function get() {
    const response = await fetch(`${Api.users}/${id}/posts`);
    const result = await response.json();
    console.log("result", result);
    setPost(result);
  }

  useEffect(() => {
    get();
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
      <span className="font-bold bg-blue-500 p-5 rounded-lg text-xl text-center ml-20 text-white">
        {" "}
        Posts by {similar.name}{" "}
      </span>
      <div className="flex flex-wrap">
        {posts &&
          posts.map((item, key) => (
            <Link
              to={`/post/${id}`}
              key={key}
              className="m-10 hover:bg-gray-100 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6"
            >
              UserId : {item.userId} <br />
              Id : {item.id} <br />
              Title : {item.title}
            </Link>
          ))}
      </div>
    </div>
    </>
  );
}

export default Userposts;

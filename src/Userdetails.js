import React from "react";
import { useParams, Link } from "react-router-dom";
import { findUser } from "./fetch/getdetails";
import Home from "./Home";

function Userdetails({ data }) {
  const { id } = useParams();
  console.log(data);

  // const similar = data.find((item) => item.id == id);
  const similar = findUser(data, id) || {
    username: "Oops! not found"
  }
  //   console.log("same", similar);

  return (
    <>
      <Home />
      <h2 className="text-2xl text-white font-bold p-4 m-9 max-w-3xl mx-auto rounded-xl shadow-2xl bg-black text-center">
      --  User details --
      </h2>
      <div className="flex m-10 ">
        <div className="p-20">
          <div className="max-w-lg rounded-lg p-4 overflow-hidden bg-white shadow-2xl">
            <div className="px-9 py-4">
              <div className="font-bold text-xl mb-2">
                UserName : {similar.username}
              </div>
              <p className="text-gray-700 text-sm">
                Street : {similar.address.street} <br />
                City : {similar.address.city}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {" "}
                Id : {similar.id}{" "}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {" "}
                Company CatchPhrase : {similar.company.catchPhrase}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Cell : {similar.phone}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
        <Link
          to={`/posts/${similar.id}`}
        >
          <div className="text-center text-xl text-black font-bold rounded m-2 p-3 h-12 outline-none   hover:text-white hover:bg-blue-500">Posts</div>
        </Link>
        <Link
          to={`/albums/${similar.id}`}
        >
          <div className="text-center text-xl text-black font-bold rounded m-2 p-3 h-12  hover:text-white hover:bg-blue-500">Albums</div>
        </Link>
        </div>
      </div>
    </>
  );
}

export default Userdetails;

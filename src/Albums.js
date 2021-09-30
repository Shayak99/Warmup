import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Api from "./fetch/api_routes";
import { getUsers, findUser } from "./fetch/getdetails";
import Home from "./Home"

function Albums({ data }) {
  const { id } = useParams();
  const [albums, setAlbums] = useState();

  useEffect(() => {
    async function get() {
      const response = await getUsers(`${Api.users}/${id}/albums`);
      // const result = await response.json();
      setAlbums(response);
    }
    get();
  });

  const similar = findUser(data, id) || {
    username : "Oops! not found"
  };

  return (
    <>
    <Home />
    <div className="bg-white rounded-lg m-10 text-center text-3xl font-bold p-3">
        Album Pics
      </div>
      <div className="bg-gray-800 text-xl max-w-lg mx-auto text-center text-white font-bold rounded-xl p-3">
        By ~~ {similar.username}
      </div>
      <div className="flex flex-wrap justify-center items-center m-5">
        {albums &&
          albums.map((item,ind) => (
            <div key={ind} className=" hover:bg-gray-100 p-8 m-5 max-w-xs bg-white rounded-xl shadow-md  sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
              <div className="flex flex-wrap">
                <div className="p-2"><span className="font-semibold">Id : </span><span className="text-gray-600">{item.id}</span></div>
                <div className="p-2"><span className="font-semibold">Title : </span><span className="text-gray-600">{item.title}</span></div>
                <Link to={`/album/${item.id}`}>
                <div className="bg-blue-400 rounded-xl text-sm text-center text-white font-bold p-3">
                  Click to Open
                </div>
              </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Albums;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Api from "./api_routes";


function Albums({ data }) {
  const { id } = useParams();
  const [albums, setAlbums] = useState();

  useEffect(() => {
    async function get() {
      const response = await fetch(`${Api.users}/${id}/albums`);
      const result = await response.json();
      setAlbums(result);
    }
    get();
  });

  return (
      <>
      <div className="bg-white m-10 text-center text-3xl font-bold">Album Pics</div>
    <div className="flex flex-wrap">
      {albums &&
        albums.map((item) => (
          <div className="m-10 hover:bg-gray-100 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
            {item.id}
            {item.title}
            <Link to={`/album/${item.id}`}>
                <div className="bg-blue-400 rounded-xl text-center text-white font-bold p-3 ml-2">Click to Open</div>
            </Link>
          </div>
        ))}
    </div>
    </>
  );
}

export default Albums;

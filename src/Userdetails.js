import React from "react";
import { useParams, Link } from "react-router-dom";


function Userdetails({ data }) {
  const { id } = useParams();
  console.log(data);

  const similar = data.find((item) => item.id == id);
//   console.log("same", similar);

  return (
  <div className="flex m-10">
      <div className="p-10">  
    <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg">
      <div className="px-9 py-4">
        <div className="font-bold text-xl mb-2">UserName : {similar.username}</div>
        <p className="text-gray-700 text-sm">
        Street : {similar.address.street} <br/>
      City : {similar.address.city}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">  Id : {similar.id} </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Company CatchPhrase : {similar.company.catchPhrase}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cell : {similar.phone}</span>
      </div>
    </div>
  </div>
  <Link to={`/posts/${similar.id}`} className="text-center text-xl text-black font-bold rounded py-2 mt-20 w-2/12 h-12 focus:outline-none border-2 border-blue-500 hover:text-white hover:bg-blue-500">
  <p >Posts</p>
  </Link>
  <Link to={`/albums/${similar.id}`} className="text-center text-xl text-black font-bold rounded py-2 mt-20 ml-5 w-2/12 h-12 focus:outline-none border-2 border-blue-500 hover:text-white hover:bg-blue-500">
  <p >Albums</p>
  </Link>
  </div>
  );
}

export default Userdetails;

import React, { useState, useEffect } from "react";
import { getUsers } from "./fetch/getdetails";
import Api from "./fetch/api_routes";
import { useParams } from "react-router-dom";

function Comments() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function get() {
      const response = await getUsers(`${Api.posts}/${id}/comments`);
      setData(response);
    }
    get();
  }, []);
  // data.map(i => console.log(i.postId))

  return (
    <div className="m-8 mt-16">
      <h1 className="bg-black text-white text-2xl font-bold p-3 m-20 max-w-sm mx-auto rounded-2xl  text-center">
        ~~ Comments ~~
      </h1>
      <div className="flex flex-wrap justify-center">
        {/*   */}
        {data &&
          data.map((item, ind) => (
            <div key={ind} className=" hover:bg-gray-100 p-8 m-5 w-2/5 bg-white rounded-xl shadow-md  sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
              <div className="flex flex-wrap">
                <div className="p-2 ">
                  {" "}
                  <span className="font-semibold">PostId :</span>{" "}
                  <span className="text-gray-600">{item.postId}</span>{" "}
                </div>
                <div className="p-2">
                  {" "}
                  <span className="font-semibold">Name : </span>
                  <span className="text-gray-600">{item.name}</span>{" "}
                </div>
                <div className="p-2">
                  <span className="font-semibold"> Email : </span>
                  <span className="text-gray-600">{item.email}</span>{" "}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Comments;

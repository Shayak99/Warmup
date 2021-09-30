import React from "react";
import {Link} from "react-router-dom";
import Home from "./Home"

function Users({data}) {
    // console.log("data",data);

    return (
        <>
        <Home />
        <div className=" text-4xl uppercase  p-3 max-w-2xl rounded-xl shadow-xl mx-auto text-center font-bold bg-white text-blue-900">Lists of Users</div>
        <div className="flex flex-wrap">
           {data.length && data.map((items) => (
               <div className="m-10 flex py-8 max-w-lg px-8  mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
               <div className="hover:text-purple-500 pt-3 "> <Link to={`/users/${items.id}`}><span className="font-semibold">Name : </span>
               <span className="text-gray-600 hover:text-blue-600">{items.name}</span> </Link> </div>
                <div> <span className="font-semibold">  Em@il : </span><span className="text-gray-600">{items.email} </span> </div>
                 <div> <span className="font-semibold"> Web$ite : </span> <span className="text-gray-600">{items.website} </span> </div>
               {/* {console.log(items.id)} */}
               </div>
           ))}
        </div>
        </>
    )
}

export default Users

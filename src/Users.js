import React from "react";
import {Link} from "react-router-dom";
import Home from "./Home"

function Users({data}) {
    // console.log("data",data);

    return (
        <>
        <Home />
        <div className="h-15 text-5xl uppercase ml-5 mr-5 mt-5 p-3 text-center font-bold bg-white text-blue-900">Lists of Users</div>
        <div className="flex flex-wrap">
           {data && data.map((items) => (
               <div className="m-10 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
                <Link to={`/users/${items.id}`} className="hover:text-blue-400">   Name : {items.name} <br/></Link>
                   Em@il : {items.email}<br/>
                   Web$ite : {items.website}<br/>
               {/* {console.log(items.id)} */}
               </div>
           ))}
        </div>
        </>
    )
}

export default Users

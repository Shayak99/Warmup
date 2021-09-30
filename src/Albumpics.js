import React,{useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Api from "./fetch/api_routes";
import {getUsers} from "./fetch/getdetails";
import Home from "./Home";


function Albumpics() {

    const[data, setData] = useState();
    const {id} = useParams();
    async function getPics() {
        const response = await getUsers(`${Api.albums}/${id}/photos`);
        // const result = await response.json();
        setData(response);
    }

    useEffect(()=>{   
        getPics();
    },[])

    return (
        <>
        <Home />
        <div className="bg-black text-center max-w-sm mx-auto rounded-xl shadow-xl font-bold text-white p-4 mb-9 text-2xl">~~ Pictures ~~</div>
        <div className="flex flex-wrap justify-center">
            {data && data.map((item,ind) => (
                <div key={ind} className=" hover:bg-gray-100 p-8 m-5 max-w-xs bg-white rounded-xl shadow-md  sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
                <div className="flex flex-wrap justify-center items-center">
                  <div className="p-2"><span className="font-semibold">Title : </span><span className="text-gray-600">{item.title}</span></div>
                      <a className="bg-blue-500 rounded-xl text-center text-sm text-white font-bold p-3" target="_blank" rel="noreferrer" href={item.url}>Hit Me</a>
                </div>
              </div>
            ))}
        </div>
        </>
    )
}

export default Albumpics

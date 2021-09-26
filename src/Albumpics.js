import React,{useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Api from "./api_routes";


function Albumpics() {

    const[data, setData] = useState();
    const {id} = useParams();

    useEffect(()=>{
        async function get() {
            const response = await fetch(`${Api.albums}/${id}/photos`);
            const result = await response.json();
            setData(result);
        }
        get();
    })

    return (
        <>
        <div className="bg-white hover:bg-gray-50 text-center ml-4 mr-4 mt-3 font-bold p-4 text-3xl">Pictures</div>
        <div className="flex flex-wrap">
            {data && data.map(item => (
                <div className="m-10 hover:bg-gray-100 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
                    {item.title}
                    <a className="bg-blue-400 rounded-xl text-center text-white font-bold p-3 ml-2" target="_blank" href={item.url}>Click</a>
                </div>
            ))}
        </div>
        </>
    )
}

export default Albumpics

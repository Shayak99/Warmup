import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="text-xl rounded-lg w-40 m-4 cursor-pointer text-white text-center font-bold p-4 bg-gray-600">
           <Link to={"/"}> Home</Link>
        </div>
    )
}

export default Home

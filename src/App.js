import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./Users";
import { getUsers } from "./fetch/getdetails";
import Api from "./api_routes";
import Userdetails from "./Userdetails";
import Userposts from "./Userposts";
import SinglePost from "./SinglePost";
import Albums from "./Albums";
import Albumpics from "./Albumpics";

function App() {
  const [userdata, setUserdata] = useState({});
  const [post, setPost] = useState({});

  useEffect(() => {
    async function get() {
      const res = await getUsers(Api.users);
      const postdata = await getUsers(Api.posts);
      // console.log(res.map(it => console.log(it.id)));
      setUserdata(res);
      setPost(postdata);
    }
    get();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users">
          <Users data={userdata} />
        </Route>
        <Route exact path="/users/:id">
          <Userdetails data={userdata} />
        </Route>
        <Route exact path="/posts/:id">
          <Userposts data={userdata} />
        </Route>
        <Route path="/post/:id">
          <SinglePost post={post} data={userdata} />
        </Route>
        <Route exact path="/albums/:id">
          <Albums data={userdata} />
        </Route>
        <Route exact path="/album/:id">
          <Albumpics />
        </Route>
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="m-10 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
      <div className="text-center space-y-2 sm:text-left">
        <p className="text-gray-600 font-bold text-center">Userdetails</p>
        <Link to="/users">
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 
          hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Click to start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;

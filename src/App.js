import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./Users";
import {  Usersdata, Postsdata } from "./fetch/getdetails";
import Api from "./fetch/api_routes";
import Userdetails from "./Userdetails";
import Userposts from "./Userposts";
import SinglePost from "./SinglePost";
import Albums from "./Albums";
import Albumpics from "./Albumpics";

function App() {
  const [userdata, setUserdata] = useState({});
  const [post, setPost] = useState({});

  const getData = async () => {
    const posts = await Postsdata;
    const users = await Usersdata;
    // console.log("pos", posts);
    setPost(posts);
    setUserdata(users);
  };

  useEffect(() => {
    getData();
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
        <Route exact path="/post/:id">
          <SinglePost post={post} />
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
    <div className="mt-20 py-8 px-8 max-w-lg mx-auto bg-white rounded-xl shadow-2xl space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-3 sm:space-x-6">
      <p className="text-black text-3xl p-6 font-bold text-center">
        Userdetails
      </p>
      <Link to="/users">
        <button
          className="p-4 ml-3 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 
          hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Click to start
        </button>
      </Link>
    </div>
  );
};

export default App;

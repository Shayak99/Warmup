// import promiseMemoize from "promise-memoize";
import Api from "./api_routes";

export const getUsers = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};


 export const Usersdata =  getUsers(Api.users);
 export const Postsdata =  getUsers(Api.posts);


export const findUser = (arr, id2) => {
  let data = arr.find((item) => Number(item.id) === Number(id2));
  return data;
};

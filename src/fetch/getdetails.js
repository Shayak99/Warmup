// import promiseMemoize from "promise-memoize";


export const getUsers =  (async (url) =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
})

export const find = (arr, id) => {
    const data = arr.find(item => item.id == id);
    return data;
}

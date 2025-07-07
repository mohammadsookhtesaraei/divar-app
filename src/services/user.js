import api from "../configs/api";



const getProfile=()=>api.get("user/whoami").then((response)=> response || false);
const getPosts=()=>api.get("post/my");
const deletePost=(id)=>api.delete(`post/delete/${id}`)

export {getProfile,getPosts,deletePost}
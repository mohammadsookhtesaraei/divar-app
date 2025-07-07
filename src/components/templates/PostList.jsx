
import { useQuery} from "@tanstack/react-query"
import {getPosts} from "../../services/user"
import {sp} from "../../utils/Number"

import Loader from "../modules/Loader"

import styles from "./PostList.module.css"


const PostList = () => {
   
    const {data,isPending,refetch}=useQuery({
        queryKey:["my-post-list"],
        queryFn:getPosts,
        
    });

    console.log(data?.data.posts);
   
  return (
    <div className={styles.list}>
      {
        isPending ? <Loader/> : (
            <>
            {data.data.posts.map((post)=>(
                <div key={post._id} className={styles.post}>
                    <img src={`${import.meta.env.VITE_BASE_URL}${post.images}`} />
                     <div>
                        <p>{post.options.title}</p>
                        <span>{post.options.content}</span>
                     </div>
                     <div className={styles.price}>
                        <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                        <span>{sp(post.amount)}</span>
                     </div>
                </div>
            ))}
            </>
        )
      }
    </div>
  )
}

export default PostList
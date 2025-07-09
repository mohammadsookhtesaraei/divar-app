
import {sp} from "../../utils/Number";
import styles from "./Main.module.css"

const Main = ({posts}) => {

  const  baseURL=import.meta.env.VITE_BASE_URL;

  return (
    <div className={styles.container}>
      {posts.data.posts.map((post)=>(
        <div key={post._id} className={styles.card}>

         <div className={styles.info}>
           <p>{post.options.title}</p>

           <div>
            <p>{sp(post.amount)}</p>
            <span>{post.options.city}</span>
           </div>

         </div>
         
         <img src={`${baseURL}${post.images[0]}`} />

        </div>
      ))}
    </div>
  )
}

export default Main
import { useQuery } from "@tanstack/react-query"
import { getCategory} from "../../services/admin"
import Loader from "../../components/modules/Loader"
import styles from "./CategoryList.module.css"

const CategoryList = () => {

    const {data,ispendding}=useQuery({
        queryKey:["get-category"],
        queryFn:getCategory,
        
    });

    

  

  return (
    <div className={styles.list}>
    {ispendding ? <Loader/> : data?.data.map((i)=><div key={i._id}>
        <img src={`${i.icon}.svg`} />
    <h5>{i.name}</h5> 
    <p>slug:{i.slug}</p>
    </div>)}
    </div>
  )
}

export default CategoryList;
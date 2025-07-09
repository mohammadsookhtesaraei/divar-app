import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";

import styles from "./SideBar.module.css";

const SideBar = () => {
      const { data } = useQuery({
    queryKey: ["get-category"],
    queryFn: getCategory,
  });
  return (
    <div className={styles.sidebar}>
        <h4>دسته ها</h4>
        <ul>
            {data?.data.map((category)=>(
                <li key={category._id}>
                    <img src={`${category.icon}.svg`} />
                    <p>{category.name}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SideBar
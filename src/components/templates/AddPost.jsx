import { useQuery } from "@tanstack/react-query"
import { getCategory} from "../../services/admin"

const AddPost = () => {
        const {data}=useQuery({
        queryKey:["get-category"],
        queryFn:getCategory,
        
    });


  return (
    <form>
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان آگهی</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content"></textarea>
      <label htmlFor="amount">مبلغ</label>
      <input type="text" name="amount" id="amount" />
      <label htmlFor="city">شهر</label>
      <input type="text" id="city" name="city" />
      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category">
        {data?.data.map((i)=><option key={i._id} value={i._id}>{i.name}</option>)}
      </select>
      <label htmlFor="images">عکس</label>
      <input type="file" name="images" id="images" />
    </form>
  )
}

export default AddPost
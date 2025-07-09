import { useQuery } from "@tanstack/react-query";

import {getCategory} from "../services/admin";

import { getAllPost } from "../services/user";
import Loader from "../components/modules/Loader";
import Main from "../components/templates/Main";
import SideBar from "../components/templates/SideBar";

const HomePage = () => {
  const { data: post, isPending: postLoading } = useQuery({
    queryKey: ["post-list"],
    queryFn: getAllPost,
  });

  const { data: categories, isPending: categoryLoading } = useQuery({
    queryKey: ["get-category"],
    queryFn: getCategory,
  });

  return (
    <>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={{ display: "flex" }}>
          <SideBar categories={categories} />
          <Main posts={post} />
        </div>
      )}
    </>
  );
};

export default HomePage;

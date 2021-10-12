import React from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/dist/client/router";
import { posts } from "../profile";

const Post = () => {
  const router = useRouter();
  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];
  return (
    <Layout footer={false}>
      <div className="text-center">
        <img
          src={currentPost.imgURL}
          alt=""
          className="img-fluid"
          style={{ width: "50%" }}
        />
        <p className="my-3">{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default Post;

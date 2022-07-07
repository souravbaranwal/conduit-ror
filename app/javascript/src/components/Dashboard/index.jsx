import React, { useState, useEffect } from "react";

import postsApi from "apis/posts";
import Container from "components/Container";
import PageLoader from "components/PageLoader";
import Post from "components/Post";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await postsApi.list();
      setPosts(response.data.posts);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen">
        <PageLoader />
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <Container>
        <h1 className="text-center text-xl leading-5">
          You have no posts assigned 😔
        </h1>
      </Container>
    );
  }

  return (
    <Container className="mb-10">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default Dashboard;

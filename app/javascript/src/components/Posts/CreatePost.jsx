import React, { useState } from "react";

import postsApi from "apis/posts";
import Container from "components/Container";
import PostForm from "components/Posts/Form/PostForm";

const CreatePost = ({ history }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      await postsApi.create({ post: { title, description } });
      setLoading(false);
      history.push("/dashboard");
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <PostForm
        setTitle={setTitle}
        setDescription={setDescription}
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default CreatePost;

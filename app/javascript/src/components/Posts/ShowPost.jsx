import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import postsApi from "apis/posts";
import Container from "components/Container";
import PageLoader from "components/PageLoader";

import Post from "../Post";

const ShowPost = () => {
  const { slug } = useParams();
  const [postDetails, setPostDetails] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  const fetchPostDetails = async () => {
    try {
      const response = await postsApi.show(slug);
      setPostDetails(response.data.post);
    } catch (error) {
      logger.error(error);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, []);

  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <h1 className="text-bb-gray border-b border-bb-gray mt-3 mb-3 pb-3 pl-3 text-lg leading-5">
        <Post post={postDetails} canEdit={true} />
      </h1>
    </Container>
  );
};

export default ShowPost;

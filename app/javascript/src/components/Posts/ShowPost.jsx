import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import postsApi from "apis/posts";
import Button from "components/Button";
import Container from "components/Container";
import PageLoader from "components/PageLoader";

import Post from "../Post";

const ShowPost = () => {
  const { slug } = useParams();
  const [postDetails, setPostDetails] = useState([]);
  const [comment, setComment] = useState("");
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
      <Post post={postDetails} canEdit={true} />

      <div className="mb-5 flex items-center justify-center">
        <div className="border w-9/12 rounded-xl bg-white p-4 shadow-md">
          <div className=" text-sm text-gray-500">comment one</div>
        </div>
      </div>
      <div className="mb-5 flex items-center justify-center">
        <div className="border w-9/12 rounded-xl bg-white p-4 shadow-md">
          <div className=" text-sm text-gray-500">comment two</div>
        </div>
      </div>
      <div className="mb-5 flex items-center justify-center">
        <div className="border w-9/12 rounded-xl bg-white p-4 shadow-md">
          <div className=" text-sm text-gray-500">comment three</div>
        </div>
      </div>

      <div className="mb-5 flex items-center justify-center">
        <form onSubmit={() => {}} className="mb-16 w-9/12 ">
          <div className="sm:grid sm:grid-cols-1 sm:items-start sm:gap-1">
            <label
              className="block text-sm font-medium
            text-nitro-gray-800 sm:mt-px sm:pt-2"
            >
              Comment
            </label>
            <textarea
              placeholder="Add a comment"
              rows={3}
              className="border focus:ring-bb-purple block  flex-1 resize-none
            rounded-md border-bb-border p-2 text-bb-gray-600
            shadow-sm focus:border-bb-purple sm:text-sm"
              onChange={e => setComment(e.target.value)}
              value={comment}
            ></textarea>
          </div>
          <Button type="submit" buttonText="Comment" />
        </form>
      </div>
    </Container>
  );
};

export default ShowPost;

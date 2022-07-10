import React from "react";

import Button from "components/Button";
import Input from "components/Input";

const PostForm = ({
  type = "create",
  title,
  setTitle,
  description,
  setDescription,
  loading,
  handleSubmit,
}) => (
  <form className="mx-auto max-w-lg" onSubmit={handleSubmit}>
    <Input
      label="Title"
      placeholder="Post Title"
      value={title}
      onChange={e => setTitle(e.target.value.slice(0, 50))}
    />
    <Input
      label="Description"
      placeholder="What's this post about ?"
      value={description}
      onChange={e => setDescription(e.target.value.slice(0, 50))}
    />
    <Button
      type="submit"
      buttonText={type === "create" ? "Publish Post" : "Update Post"}
      loading={loading}
    />
  </form>
);

export default PostForm;

import axios from "axios";

const list = () => axios.get("/posts");

const create = payload => axios.post("/posts/", payload);

const show = slug => axios.get(`/posts/${slug}`);

const postsApi = { list, create, show };

export default postsApi;

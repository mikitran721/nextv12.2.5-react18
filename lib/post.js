import axios from "axios";

export const getPosts = async (limit) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostIds = async () => {
  const posts = await getPosts();

  return posts.map((post) => ({
    params: {
      id: `${post.id}`,
    },
  }));
  // tuong tu
  // return posts.map(post => `/posts/${post.id}`)
};

export const getPostById = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

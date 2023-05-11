import axios from "axios";

const url = "http://localhost:5000/api/auth";

export const signUp = (userData) => axios.post(`${url}/singup`, userData);
export const signIn = (userData) => axios.post(`${url}/singin`, userData);
export const logout = () => axios.post(`${url}/signout`);
export const forgotPassword = () => axios.post(`${url}/forgotPassword`);

// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);

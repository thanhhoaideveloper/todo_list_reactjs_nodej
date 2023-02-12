import axiosClient from "./axiosClent";

const todoApi = {
  findAll: (query) => {
    const url = "todos";
    return axiosClient.get(url, { params: query });
  },
  create: (data) => {
    const url = "todos";
    return axiosClient.post(url, data);
  },
  update: (data, id) => {
    const url = "todos/" + id;
    return axiosClient.put(url, data);
  },
  deleteTodo: (id) => {
    const url = "todos/" + id;
    return axiosClient.delete(url);
  },
  clearCompleted: () => {
    const url = "todos/clear-completed";
    return axiosClient.get(url);
  },
};

export default todoApi;

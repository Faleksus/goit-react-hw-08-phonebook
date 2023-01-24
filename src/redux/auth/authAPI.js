import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  },
  unset() {
    axios.defaults.headers.common = {};
  },
};

export const authAPI = {
    async register(formData) {
      const { data } = axios.post("/users/signup", formData);
      return data;
    },
  
    async logIn(formData) {
      const { data } = axios.post("/users/login", formData);
      return data;
    },
  
    async logOut() {
      const { data } = axios.post("/users/logout");
      return data;
    },
  
    async getCurrentUser(signal) {
      const { data } = axios.get("/users/current");
      return data;
    },
  };
  
  const contactsAPI = {
    fetchContacts() {
      return axios.get("/contacts");
    },
    addContact(contact) {
      return axios.post("/contacts", contact);
    },
    deleteContact(id) {
      return axios.delete(`/contacts/${id}`);
    },
  };
  
  export default {
    register,
    logIn,
    logOut,
    getCurrentUser,
    contactsAPI,
    token,
  };


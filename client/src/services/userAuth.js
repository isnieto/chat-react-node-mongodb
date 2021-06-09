// Register function and login function to reetrieve and check user data to signup and login

const userAuth = {
  loginUser: async (credentials) => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      return response.json();
    } catch (e) {
      return alert(e);
    }
  },

  signup: async (credentials) => {
    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      return response.json();
    } catch (e) {
      return alert(e);
    }
  },
};


export default userAuth;
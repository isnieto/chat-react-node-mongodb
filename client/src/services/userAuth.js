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

  // Send token ID to AI to register new user or confirm user
  googleAuth: async (googleData) => {
    try {
      console.log("con data", googleData.data);
      const response = await fetch("http://localhost:5000/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: googleData.data }),
      });
      console.log("respuesta de backend", response.status);
      return response.status;
    } catch (e) {
      return alert(e);
    }
  },
};

export default userAuth;

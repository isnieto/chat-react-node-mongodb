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

  googleAuth: async(googleData) =>{
    try {
      const response = await fetch("http://localhost:5000/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    return response.json();
    } catch (e) {
      return alert(e);
    }
  }
};


export default userAuth;
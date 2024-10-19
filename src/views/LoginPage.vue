<template>
    <div class="login-container">
      <form @submit.prevent="handleLogin" class="login-form slide-in">
        <h2>Login</h2>
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="form-control"
          />
        </div>
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: "LoginPage",
    data() {
      return {
        username: '',
        password: '',
      };
    },
    setup() {
      const router = useRouter();
      return { router };
    },
    methods: {
      handleLogin() {
        // Hardcoded credentials
        const validUsername = "jinlory";
        const validPassword = "rombs0607";
  
        if (this.username === validUsername && this.password === validPassword) {
          this.router.push('/dashboard/home'); // Navigate to Dashboard on successful login
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7; /* Light background color */
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .login-form {
    background-color: white; /* White background for the form */
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 300px; /* Fixed width for the form */
    opacity: 0; /* Start invisible */
    transform: translateX(100%); /* Start off-screen to the right */
    animation: slideIn 1s forwards; /* Trigger slideIn animation */
  }
  
  @keyframes slideIn {
    0% {
      opacity: 0; /* Start invisible */
      transform: translateX(100%); /* Start off-screen to the right */
    }
    100% {
      opacity: 1; /* End visible */
      transform: translateX(0); /* End in the normal position */
    }
  }
  
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .form-control:focus {
    border-color: #ffb3d1; /* Blue border on focus */
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Light blue shadow */
  }
  
  .btn {
    padding: 10px;
    background-color: #ffb3d1; /* Bootstrap primary color */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .btn:hover {
    background-color: #ffb3d1; /* Darker blue on hover */
  }
  </style>
  
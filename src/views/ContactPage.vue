<template>
    <div class="contact-background">
      <video autoplay muted loop class="background-video">
        <source src="@/assets/bg1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="contact-container">
        <div class="contact-card bounce-in">
          <h2 class="contact-title">Contact Me</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" v-model="form.name" required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" v-model="form.email" required />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="3" v-model="form.message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactPage",
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        alert(`Message sent by ${this.form.name}`);
        // Handle form submission logic here
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-background {
    position: relative;
    width: 100%;
    height: 100vh; /* Full viewport height */
    overflow: hidden; /* Hide overflow */
  }
  
  .background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1; /* Send the video to the back */
    transform: translate(-50%, -50%);
  }
  
  .contact-container {
    display: flex;
    justify-content: center; /* Center the card horizontally */
    align-items: center; /* Center the card vertically */
    height: 100vh; /* Full viewport height */
  }
  
  .contact-card {
    background-color: rgba(255, 179, 209, 0.9); /* Pink background with slight transparency */
    border-radius: 10px; /* Rounded corners for the card */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Shadow effect */
    width: 90%; /* Responsive width */
    max-width: 600px; /* Maximum width of the card */
  }
  
  .contact-title {
    color: white; /* Change font color to white */
    text-align: center; /* Center the title */
    margin: 20px 0; /* Space around the title */
  }
  
  .contact-form {
    padding: 20px; /* Padding inside the form */
  }
  
  /* Bounce-in animation for the contact card */
  .bounce-in {
    animation: bounceIn 1s ease forwards;
  }
  
  @keyframes bounceIn {
    from {
      opacity: 0;
      transform: translateY(50%);
    }
    60% {
      transform: translateY(-10%);
    }
    80% {
      transform: translateY(5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  
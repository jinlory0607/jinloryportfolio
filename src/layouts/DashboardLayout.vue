<template>
    <div>
      <AppNavbar />
      <AppSidebar />
      <div class="content">
        <blockquote v-if="isDashboardHome" class="quote fade-in">
          “No matter how negative things are, try to look at them in a positive way.”
        </blockquote>
        <div v-if="isDashboardHome" class="welcome-card fade-in">
          <div class="background-image-container">
            <img src="@/assets/Background.png" alt="Background Image" class="background-image" />
          </div>
        </div>
  
        <router-view />
      </div>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppNavbar from '@/components/AppNavbar.vue';
  import AppSidebar from '@/components/AppSidebar.vue';
  import AppFooter from '@/components/AppFooter.vue';
  
  export default {
    name: 'DashboardLayout',
    components: {
      AppNavbar,
      AppSidebar,
      AppFooter,
    },
    computed: {
      isDashboardHome() {
        return this.$route.name === 'Home';
      },
    },
  };
  </script>
  
  <style scoped>
  .content {
    margin-left: 60px;
    margin-top: 50px;
    padding: 0;
    height: calc(100vh - 60px);
    overflow-y: auto; /* Allows for scrolling */
    transition: margin-left 0.3s ease;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .quote {
    font-style: italic;
    color: #555; /* Adjust as needed */
    text-align: center; /* Center the quote */
    margin: 20px 0; /* Spacing above and below the quote */
    padding: 10px; /* Padding around the quote */
    background: rgba(255, 255, 255, 0.8); /* Semi-transparent background for readability */
    border-radius: 5px; /* Rounded corners */
  }
  
  .welcome-card {
    background: #e9ecef;
    padding: 0; /* Remove padding to utilize full height */
    border-radius: 8px;
    text-align: center;
    margin: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative; /* Allows for absolute positioning of the image */
    height: calc(100vh - 120px); /* Adjust height to nearly fill the screen */
  }
  
  .background-image-container {
    width: 100%; /* Full width for the container */
    height: 100%; /* Full height of the card */
    overflow: hidden; /* Hide overflow if necessary */
    border-radius: 8px; /* Match card's border radius */
  }
  
  .background-image {
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    object-fit: cover; /* Cover the container */
  }
  
  .fade-in {
    animation: fadeIn 1s ease-in-out forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  
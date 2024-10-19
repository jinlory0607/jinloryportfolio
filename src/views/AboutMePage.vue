<template>
    <div>
      <!-- Dashboard-like Layout -->
      <AppNavbar />
      <AppSidebar />
  
      <!-- Main Content Area -->
      <div class="content">
        <div class="about-me-container">
          <h2 class="title animated-fade-in">My Resume</h2>
  
          <!-- Image Section -->
          <div class="image-grid">
            <!-- Resume Image 1 -->
            <div class="image-card shadow-sm animated-card">
              <img src="@/assets/jinlory1.png" alt="Resume Part 1" class="image" />
            </div>
  
            <!-- Resume Image 2 -->
            <div class="image-card shadow-sm animated-card">
              <img src="@/assets/jinlory2.png" alt="Resume Part 2" class="image" />
            </div>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppNavbar from '@/components/AppNavbar.vue';
  import AppSidebar from '@/components/AppSidebar.vue';
  import AppFooter from '@/components/AppFooter.vue';
  
  export default {
    name: 'AboutMePage',
    components: {
      AppNavbar,
      AppSidebar,
      AppFooter,
    },
  };
  </script>
  
  <style scoped>
  .content {
    margin-top: 0; /* Adjusted to match navbar height */
    height: calc(100vh - 60px); /* Ensure the content area takes full height minus navbar */
    overflow-y: auto; /* Allow vertical scrolling */
    display: flex; /* Enable Flexbox */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center items vertically */
  }
  
  .about-me-container {
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: flex-start; /* Align content towards the top */
    flex-direction: column;
    text-align: center; /* Center text within cards */
    width: 100%; /* Make it take full width */
  }
  
  .title {
    font-size: 2.8rem;
    color: #000; /* Adjusted text color for visibility */
    margin-bottom: 20px; /* Added margin for better spacing */
    animation: fadeInTitle 1.5s ease-in-out;
  }
  
  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr)); /* Full width for images */
    gap: 30px;
    margin-top: 750px;
    width: 100%; /* Ensure it takes full width */
  }
  
  .image-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    width: 100%; /* Full width for the card */
    height: 100vh; /* Full height for the card */
  }
  
  .image {
    width: 100%; /* Responsive width */
    height: 100%; /* Fill card height */
    object-fit: contain; /* Maintain aspect ratio */
    border-radius: 10px; /* Rounded corners */
  }
  
  /* Animations */
  @keyframes fadeInTitle {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animated-card {
    animation: fadeInCard 1.5s ease-in-out;
    opacity: 1; /* Make sure it stays visible after the animation */
  }
  
  @keyframes fadeInCard {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  /* Media query for responsiveness */
  @media (max-width: 768px) {
    .image-grid {
      grid-template-columns: 1fr; /* Stack images on small screens */
    }
  }
  </style>
  
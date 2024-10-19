<template>
    <div class="container">
      <h2 class="projects-title animated-title">My Projects</h2>
      <div class="projects-container">
        <div class="row justify-content-center">
          <div class="col-md-4" v-for="project in projects" :key="project.id">
            <div class="card animated-card">
              <img :src="project.image" class="card-img-top" alt="Project Image" />
              <div class="card-body">
                <h5 class="card-title animated-title">{{ project.title }}</h5>
                <p class="card-text animated-text">{{ project.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import astronicatImage from '@/assets/astronicat.png';
  import botilawImage from '@/assets/botilaw.png';
  import tawapaGongImage from '@/assets/tawapa-gong.png';
  import wtuberoImage from '@/assets/wtubero.png';
  import aideniImage from '@/assets/aideni.png'; // Import the Aideni image
  
  export default {
    name: "PortfolioPage",
    data() {
      return {
        projects: [
          { 
            id: 1, 
            title: "Aideni", 
            description: "Teacher's assistant.", 
            link: "https://www.example.com/aideni", 
            image: aideniImage 
          },
          { 
            id: 2, 
            title: "Tawapa Gong", 
            description: "Monitoring of turtle's health and lifestyle.", 
            link: "https://www.example.com/tawapa-gong", 
            image: tawapaGongImage 
          },
          { 
            id: 3, 
            title: "Astronicat", 
            description: "Detects and collects space debris.", 
            link: "https://www.example.com/astronicat", 
            image: astronicatImage 
          },
          { 
            id: 4, 
            title: "Botilaw", 
            description: "Recycles bottles to make lights.", 
            link: "https://www.example.com/botilaw", 
            image: botilawImage 
          },
          { 
            id: 5, 
            title: "WTubero", 
            description: "Collects water from the rain and rivers to produce energy.", 
            link: "https://www.example.com/wtubero", 
            image: wtuberoImage 
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    position: relative;
    z-index: 1; /* Ensure content is visible */
  }
  
  .projects-title {
    color: black; /* Change font color to black */
    text-align: center; /* Center the title */
    margin-bottom: 20px; /* Space between title and cards */
  }
  
  /* Set a maximum height and enable scrolling */
  .projects-container {
    max-height: calc(100vh - 200px); /* Adjust as needed to avoid footer overlap */
    overflow-y: auto; /* Enable vertical scrolling */
  }
  
  .card-img-top {
    height: 200px; /* Set a fixed height for the project images */
    object-fit: cover; /* Ensure the image covers the area without distortion */
  }
  
  /* New Animations */
  .animated-title {
    opacity: 0; /* Initial state */
    transform: translateY(-20px); /* Start slightly above */
    animation: fadeInUp 0.8s forwards; /* Animation details */
  }
  
  .animated-card {
    opacity: 0; /* Initial state */
    transform: translateY(20px); /* Start slightly below */
    animation: fadeInUp 0.6s forwards; /* Animation details */
  }
  
  .animated-text {
    opacity: 0; /* Initial state */
    transform: translateY(10px); /* Start slightly below */
    animation: fadeInUp 0.6s forwards; /* Animation details */
  }
  
  /* Keyframes for animations */
  @keyframes fadeInUp {
    to {
      opacity: 1; /* End state */
      transform: translateY(0); /* End position */
    }
  }
  </style>
  
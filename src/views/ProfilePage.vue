<template>
    <div class="profile-container">
      <div class="container">
        <h2 class="fade-in">Biography</h2>
  
        <!-- Profile Card with Bounce-In Animation -->
        <div class="profile-card bounce-in">
          <div class="profile-content">
            <img src="@/assets/jinlory.png" alt="Profile Picture" class="profile-img" />
            <div class="profile-text">
              <p>
                I am a Computer Engineering student at the Technological Institute of the Philippines, expected to graduate in July 2025. My specialization lies in Cybersecurity, with a strong focus on network security and system protection. I am passionate about solving complex technological challenges and have gained hands-on experience in robotics, having represented the Philippines in international robotics competitions.
              </p>
  
              <p>
                I serve as the President of INHINYERA, a student organization that empowers women in the field of engineering. Previously, I held roles as Vice President of External Affairs, Treasurer, and Technicals Officer in the same organization. I also work as the Chief Financial Officer at JLAR Construction and Sales Corporation, where I apply my leadership skills and manage financial operations in the construction industry.
              </p>
  
              <p>
                Over the years, I have successfully managed various events and projects, taught robotics to high school students, and freelanced in web development. My goal is to continue learning, innovating, and making meaningful contributions in the fields of technology and community service.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Details Section with Fade-In Animation -->
        <div class="details fade-in">
          <h3>Education</h3>
          <p>
            Technological Institute of the Philippines
            <br />
            Bachelor of Science in Computer Engineering (Expected Graduation: 2025)
          </p>
          <p>
            Saint Michael’s College of Laguna - Biñan City, Laguna
          </p>
          <p>High School Diploma in Science, Technology, Engineering, and Mathematics</p>
  
          <h3>Organizational Experience</h3>
          <ul>
            <li>INHINYERA - T.I.P. Manila</li>
            <li>Institute of Computer Engineering of the Philippines (ICPEP) - National Capital Region</li>
            <li>Computer Engineering Student Society</li>
            <li>Angelic Gears</li>
            <li>WAWANIANS</li>
            <li>Golden Z Club</li>
          </ul>
        </div>
  
        <!-- Social Media Links -->
        <div class="social-media">
          <h3>Connect with Me</h3>
          <a href="https://www.facebook.com/jl.ncdk" target="_blank" class="social-link">
            <img src="@/assets/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/jloraine07/" target="_blank" class="social-link">
            <img src="@/assets/instagram-icon.jpg" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/jeane-loraine-rombaoa-633001224/" target="_blank" class="social-link">
            <img src="@/assets/linkedin-icon.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfilePage",
  };
  </script>
  
  <style scoped>
  /* Container styles */
  .container {
    padding: 20px;
    margin-left: 80px;
    margin-bottom: 50px;
    font-family: 'Arial', sans-serif;
    font-size: 1.1rem;
  }
  
  .profile-card {
    background-color: #ffb3d1; /* Pink background */
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    transition: transform 0.3s ease;
  }
  
  .profile-card:hover {
    transform: scale(1.05);
  }
  
  .profile-content {
    display: flex;
    align-items: center;
  }
  
  .profile-img {
    width: 150px;
    border-radius: 10px; /* Adjusted for card shape */
    margin-right: 20px;
  }
  
  .profile-text {
    flex-grow: 1;
  }
  
  .details {
    margin-top: 20px;
    margin-bottom: 50px;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    margin-top: 10px;
    font-size: 1.5rem;
  }
  
  p,
  li {
    font-size: 1.2rem;
  }
  
  /* Social Media Links */
  .social-media {
    margin-top: 30px;
    text-align: center;
  }
  
  .social-media h3 {
    margin-bottom: 30px;
    font-size: 1.5rem;
  }
  
  .social-link {
    margin: 0 10px;
  }
  
  .social-link img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  
  .social-link img:hover {
    transform: scale(1.2);
  }
  
  /* Fade-in animation */
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
  
  /* Bounce-in animation for the profile card */
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
  
<template>
    <footer class="app-footer">
      <p>&copy; 2024 Powered by Vue.js. All Rights Reserved.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
  };
  </script>
  
  <style scoped>
  .app-footer {
    background-color: #ffb3d1; 
    color: white;
    text-align: center;
    padding: 0.5rem; /* Reduced padding for a smaller footer */
    position: fixed; 
    bottom: 0; 
    left: 0;
    right: 0;
    font-size: 0.85rem; /* Adjusted font size for a more compact appearance */
  }
  </style>
  
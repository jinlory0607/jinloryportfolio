<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-pink px-4 fixed-top">
      <a class="navbar-brand" href="#">Profile Dashboard</a>
  
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/dashboard/profile" class="nav-link">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/portfolio" class="nav-link">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
  
        <form class="d-flex me-4" @submit.prevent="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchQuery"
          />
          <button class="btn btn-outline-light" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
  
        <div class="dropdown">
          <button
            class="btn btn-outline-light dropdown-toggle"
            type="button"
            id="userDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-person-circle me-1"></i> {{ username }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
            <li><router-link to="/dashboard/profile" class="dropdown-item">Profile</router-link></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "AppNavbar",
    data() {
      return {
        searchQuery: "",
        username: ""
      };
    },
    created() {
      this.fetchUsername();
    },
    methods: {
      search() {
        alert(`Search for: ${this.searchQuery}`);
      },
      fetchUsername() {
        this.username = "Current User";
      },
    },
  };
  </script>
  
  <style scoped>
  .dropdown-menu {
    min-width: 150px;
  }
  .navbar {
    z-index: 1000;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .bg-pink {
    background-color: #ffb3d1 !important; /* Light pink background */
  }
  </style>
  
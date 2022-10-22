<script setup>
import { useDashboardStore } from "../../../stores/dashbord";
import { storeToRefs } from "pinia";

const { dashbordCollapsed } = storeToRefs(useDashboardStore());
</script>
<template>
  <div
    class="container-fluid page-body-wrapper"
    :class="dashbordCollapsed ? 'expand' : ''"
  >
    <!-- nav bar -->
    <nav class="navbar navbar-expand-lg bg-light px-4">
      <font-awesome-icon
        @click="dashbordCollapsed = true"
        icon="fa-regular fa-heart"
        class="me-2"
      />
      <font-awesome-icon
        @click="dashbordCollapsed = false"
        icon="fa-regular fa-user"
        class="me-2"
      />
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <!-- main panel -->
    <div class="main-panel">
      <div class="content-wrapper p-4">
        <h1>Content</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDashboardStore } from "../../../stores/dashbord";
import { storeToRefs } from "pinia";

const { dashbordCollapsed } = storeToRefs(useDashboardStore());
</script>
<template>
  <aside
    class="sidebar p-3 bg-light"
    :class="dashbordCollapsed ? 'dashboard-collapsed' : ''"
  >
    <!-- logo -->
    <a href="#" class="logo pb-3 d-block">
      <img
        src="../../../assets/images/logo.png"
        class="img-fluid logo-img"
        alt=""
      />
      <img
        src="../../../assets/images/logo-text.png"
        class="img-fluid logo-text"
        alt=""
      />
    </a>

    <!-- profile -->
    <div class="profile d-flex">
      <!-- avatar -->
      <div class="icon-wrapper">
        <div class="position-relative">
          <img src="../../../assets/images/user.jpg" class="avatar" alt="" />
          <span
            class="position-absolute bottom-0 start-0 translate-middle p-1 bg-success border border-light rounded-circle"
          >
            <span class="visually-hidden">New alerts</span>
          </span>
        </div>
      </div>
      <!-- info -->
      <div class="info px-2">
        <h6>Henry Klein</h6>
        <p class="text-gray">Gold Member</p>
      </div>
      <!-- dropdown -->
      <div class="dropdown ms-auto">
        <div
          class="dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="../../../assets/images/menu-dot.png"
            class="menu-dot-icon"
            alt=""
          />
        </div>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>

    <!-- accordion -->
    <div class="accordion" id="accordionExample">
      <div class="item d-flex">
        <font-awesome-icon icon="fa-regular fa-heart" class="me-2" />
        <div class="flex-grow-1 item-details">
          <h6
            class="accordion-button bg-transparent shadow-none p-0"
            id="headingOne"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Dashboard
          </h6>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-unstyled submenu">
                <li class="d-flex align-items-center">
                  <span class="dash"></span><a href="#">Dashboard Light</a>
                </li>
                <li class="d-flex align-items-center">
                  <span class="dash"></span><a href="#">Dashboard Dark</a>
                </li>
                <li class="d-flex align-items-center">
                  <span class="dash"></span><a href="#">Dashboard Dark</a>
                </li>
                <li class="d-flex align-items-center">
                  <span class="dash"></span><a href="#">Dashboard Dark</a>
                </li>
                <li class="d-flex align-items-center">
                  <span class="dash"></span><a href="#">Dashboard Dark</a>
                </li>
                <li class="d-flex align-items-center">
                  <span class="dash"></span><a href="#">Dashboard Dark</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="item">
        <h6>Contact</h6>
      </div>
      <div class="item">
        <h6
          class="accordion-button bg-transparent shadow-none p-0 collapsed"
          id="headingTwo"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Accordion Item #2
        </h6>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="item">
        <h6
          class="accordion-button bg-transparent shadow-none p-0 collapsed"
          id="headingThree"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Accordion Item #3
        </h6>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div> -->
    </div>
  </aside>
</template>

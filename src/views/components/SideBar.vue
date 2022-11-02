<script setup>
import { useDashboardStore } from "@/stores/dashbord";
import { storeToRefs } from "pinia";
import sourceData from "@/data.json";
import SubMenu from "@/views/components/inc/SubMenu.vue";

const { dashbordCollapsed, isVerticalHeader, theme, themeType } = storeToRefs(
  useDashboardStore()
);
</script>
<template>
  <aside
    v-if="!isVerticalHeader"
    class="sidebar p-3"
    :class="[dashbordCollapsed ? 'dashboard-collapsed' : '', themeType]"
  >
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
          <li
            v-for="submenu in sourceData.menu.dashboard.submenu"
            :key="submenu"
          >
            <a class="dropdown-item" href="#">{{ submenu }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- accordion -->
    <div class="accordion" id="accordionExample">
      <div
        v-for="menu in sourceData.menu"
        :key="menu"
        class="item d-flex dropdown py-2"
      >
        <!-- <font-awesome-icon
          :icon="menu.icon"
          :class="dashbordCollapsed ? 'dropdown-toggle' : 'me-2'"
          :data-bs-toggle="dashbordCollapsed ? 'dropdown' : ''"
          aria-expanded="false"
        /> -->
        <i
          :class="[dashbordCollapsed ? '' : 'me-2', menu.icon]"
          class="fs-2"
          :data-bs-toggle="dashbordCollapsed ? 'dropdown' : ''"
          aria-expanded="false"
        ></i>
        <!-- dropdown -->
        <ul class="dropdown-menu">
          <template v-for="submenu in menu.submenu" :key="submenu">
            <SubMenu
              :isDropdown="true"
              :menuLabel="submenu.label"
              :menuRoute="submenu.route"
            />
          </template>
        </ul>
        <div class="flex-grow-1 item-details">
          <h6
            class="accordion-button bg-transparent shadow-none p-0 collapsed"
            :id="`heading${menu.label}`"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse${menu.label}`"
            aria-expanded="false"
            :aria-controls="`collapse${menu.label}`"
          >
            {{ menu.label }}
          </h6>
          <div
            :id="`collapse${menu.label}`"
            class="accordion-collapse collapse"
            :aria-labelledby="`heading${menu.label}`"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body p-0">
              <ul class="list-unstyled submenu m-0">
                <SubMenu
                  v-for="(submenu, index) in menu.submenu"
                  :key="index"
                  :isDropdown="false"
                  :menuLabel="submenu.label"
                  :menuRoute="submenu.route"
                />
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

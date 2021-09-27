<template>
    <nav class="sidebar"
         v-click-outside="hideSidebar"
         :class="{ 'show-sidebar' : visibleSidebar }">
      <div class="section">
        <h3 class="section-heading">Sections</h3>
        <ul>
          <li class="section-name" :key="item.value" v-for="item in sections">
            <router-link class="section-a" :to="{path: `/section/${item.value}` }">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>
<script src='./js/sidebar.js'></script>
<style lang="scss" scoped>
@import "~assets/css/_responsive.scss";
@import "~assets/css/_color.scss";

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.sidebar {
    width: 150px;
    height: 100vh;
    background-color: #eaeaea;
    /*position: sticky;*/
    z-index: 100;
    box-shadow: -1px 0px 2px 1px $font-black;
    padding: 5px 15px;
    transition: transform 0.3s ease-in;
    /* due to translate -100% it will be hidden completely in the left side.*/
    transform: translate(-100%);
    position: fixed;
    top: 0;
    bottom: 0;
    overflow: scroll;
}

.show-sidebar {
    /* once we add translate 0 it will start visible again*/
    transform: translate(0);
}

.section {
  &-heading {
    border-top: 1px solid rgb(235, 235, 235);
    color: rgb(0, 0, 0);
    font-family: nyt-franklin, helvetica, arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.04rem;
    line-height: 23px;
    padding: 22px 0px 12px;
    text-transform: capitalize;
  }
  &-name {
    line-height: 34px;
    list-style-type: none;
  }
  &-a{
    color: rgb(51, 51, 51);
    display: block;
    font-family: helvetica, arial, sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 34px;
    text-decoration: none;
    text-transform: capitalize;
  }
}
</style>

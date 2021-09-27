<template>
    <div class="header-section">
      <div class="header-section__title">
        <div @click="openSidebar"
             class="header-section__sidebar-icon open-sidebar">
          <img src="@/assets/images/menu.png"
               alt="sort"
               class="open-sidebar" />
        </div>
        <div>THE NEW YORK TIMES</div>
      </div>
      <div class="header-section__list-container">
        <ul class="header-section__list">
          <li class="header-section__list-item" key="item.value" v-for="item in sections">
            <router-link class="header-section__list-a" :to="{path: `/section/${item.value}` }">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>
<script src='./js/header.js'></script>
<style lang="scss" scoped>
@import "~assets/css/_responsive.scss";
@import "~assets/css/_color.scss";

.header-section{
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  &__title{
    text-align: center;
    position: relative;
    padding: 10px;
  }
  &__sidebar-icon{
    cursor: pointer;
    position: absolute;
  }
  &__list-container {
    display: none;
    border-top: 1px solid #ebebeb;
    padding: 0 60px;
    border-bottom: 4px double #000;
    color: black;
    @include desktop() {
      display: block;
    }
  }
  &__list {
    margin: 0;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 5px 0 4px;
    list-style: none;
  }
  &__list-item{
    display: inline-block;
    font-family: nyt-franklin,helvetica,arial,sans-serif;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
    color: black;
  }
  &__list-a{
    color: black;
  }
}

</style>

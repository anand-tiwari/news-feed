<template>
  <div class="news-feed">
    <ol class="news-feed__list">
      <li class="news-feed__list-item" :key="item.title" v-for="item in feedList">
        <Feed :item="item"/>
      </li>
    </ol>
  </div>
</template>
<script src='./js/feed-list.js'></script>
<style lang="scss" scoped>
@import "~assets/css/_responsive.scss";
@import "~assets/css/_color.scss";

.news-feed{
  width: 60%;
  margin-left: 20%;
  @include verySmall() {
    width: 100%;
    margin: 0;
    padding: 0 5px 0 5px;
  }
  @include small(){
    width: 100%;
    margin: 0;
    padding: 0 25px 0 25px;
  }
  @include largePhone(){
    width: 90%;
    margin-left: 5%;
  }
  @include medium() {
    width: 90%;
    margin-left: 5%;
  }
  @include desktop() {
    width: 80%;
    margin-left: 10%;;
  }
  &__list{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  &__list-item {
    border-top: 1px solid #e2e2e2;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 20px;
    padding-top: 21px;
  }
}
.news-feed__list:nth-of-type(1) {
  border-top: 0 none;
  padding-top: 0;
}
</style>

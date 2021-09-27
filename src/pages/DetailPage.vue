<template>
  <div class="detail-page">
    <Sidebar/>
    <Header/>
    <div class="detail-page__content">
      <Feed :item="item"/>
    </div>
  </div>
</template>
<script src="./js/detail-page.js"></script>
<style lang="scss" scoped>
@import "~assets/css/_responsive.scss";

.detail-page{
  width: 100%;
  &__content {
    width: 60%;
    margin-left: 20%;
    @include small() {
      width: 100%;
      margin: 0;
      padding: 0 5px 0 5px;
    }
    @include small() {
      width: 100%;
      margin: 0;
      padding: 0 25px 0 25px;
    }
    @include largePhone() {
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
  }
}
</style>

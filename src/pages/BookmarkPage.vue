<template>
  <div class="bookmark">
    <Sidebar/>
    <Header/>
    <ul class="bookmark__list">
      <li class="bookmark__list-item" :key="item.title" v-for="(item, Id) in bookmarkedFeeds">
        <div class="feed-content">
          <a class="feed-content__href" :href="item.articleLink">
            <div class="feed-content__image">
              <figure class="feed-content__figure" aria-label="media" role="group">
                <div class="feed-content__image">
                  <img alt="" class="feed-content__image-tag"
                       :src="item.image"/>
                </div>
              </figure>
            </div>
            <h2 class="feed-content__title" data-v-d2d1c4e8="">{{item.title}}</h2>
          </a>
        </div>
        <div class="bookmark__date">
          <span>{{dateFormat(item.updated_date)}}</span>
          <span>{{item.byline}}</span>
        </div>
        <div class="bookmark__delete" @click="deleteMarkedEntry(Id)">
          <img src="@src/assets/images/delete.png">
        </div>
      </li>
    </ul>
  </div>
</template>
<script src="./js/bookmark-page.js"></script>
<style lang="scss" scoped>
@import "~assets/css/_responsive.scss";
.bookmark{
  width: 100%;
  box-sizing: border-box;
  &__list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
  }
  &__list-item {
    width: 24%;
    padding: 15px;
    box-sizing: border-box;
    margin: 0 3px 15px 5px;
    background: #fff;
    border: 1px solid transparent;
    box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
    z-index: 3;
    position: relative;

    @include small() {
      width: 98%;
    }
    @include small() {
      width: 45%;
    }
    @include medium() {
      width: 31%;
    }
    @include desktop() {
      width: 23%;
    }
    @include large() {
      width: 19%;
    }
  }
  &__date {
    color: #999;
    font-family: nyt-franklin,helvetica,arial,sans-serif;
    font-size: 11px;
    padding: 0;
    margin: 0;
    /*min-width: 125px;*/
    font-weight: 400;
    line-height: 13px;
    display: flex;
    order: 0;
    justify-content: space-between;

    @include largePhone(){
      min-width: 125px;
      order: 1;
    }

    @include medium() {
      margin: 8px 0 7px;
    }
  }
  &__delete {
    position: absolute;
    top: -6px;
    right: -6px;
    cursor: pointer;
    img{
      height: 20px;
      width: 20px;
    }
  }
}

.feed-content{
    order: 0;
    color: black;
    width: 100%;
    margin-bottom: 2px;
    @include largePhone() {
      order: 2;
      margin-bottom: 0;
    }
    &__href {
      text-decoration: none;
    }
    &__image{
        position: relative;
    }
    &__figure{
        width: 100%;
        margin: 0 0 0 10px;
        float: right;
    }
    &__image-tag{
        height: auto;
        width: 100%;
        vertical-align: top;
    }
    &__title{
        color: #000;
        font-feature-settings: 'kern';
        margin: 0;
        margin-bottom: 8px;
        /*font-family: 'nyt-cheltenham';*/
        font-family: georgia,'times new roman',times,serif;
        font-weight: 400;
        font-feature-settings: 'kern';
        max-width: 470px;
        font-size: 13px;
        line-height: 18px;
        @include medium() {
          font-size: 14px;
          line-height: 20px;
        }
    }
}

</style>

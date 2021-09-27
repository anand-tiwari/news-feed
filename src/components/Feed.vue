<template>
  <div class="feed">
    <div class="feed-content">
      <a @click="updateFeedInfoIntoStorage()" class="feed-content__href" :href="getDetailPageUrl">
        <div class="feed-content__image">
          <figure class="feed-content__figure" aria-label="media" role="group">
            <div class="feed-content__image">
              <img alt="" v-if="isImageAvailable" class="feed-content__image-tag"
                   :src="item.multimedia[0].url"/>
            </div>
          </figure>
        </div>
        <h2 class="feed-content__title">{{item.title}}</h2>
        <p class="feed-content__abstract">{{item.abstract}}</p>
        <div class="feed-content__author">
          <p><span> {{item.byline}}</span></p>
        </div>
      </a>
    </div>
    <div class="feed__date">
      <span>{{dateFormat(item.updated_date)}}</span>
      <div class="feed__bookmark" @click="updateBookmark()">
        <img v-if="isBookmark" src="@src/assets/images/bookmarked.png">
        <img v-else src="@src/assets/images/bookmark.png">
      </div>
    </div>
  </div>
</template>
<script src="./js/feed.js"></script>
<style lang="scss" scoped>
@import "~assets/css/_responsive.scss";
@import "~assets/css/_color.scss";

.feed {
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 800px;

  @include largePhone(){
    align-self: flex-start;
    flex-direction: row;
    max-width: 840px;
  }

  &__date{
    color: #999;
    font-family: nyt-franklin,helvetica,arial,sans-serif;
    font-size: 11px;
    padding: 0;
    margin: 0;
    /*min-width: 125px;*/
    font-weight: 400;
    line-height: 13px;
    order: 0;
    @include max600(){
      display: flex;
      justify-content: space-between;
    }
    @include largePhone(){
      min-width: 125px;
      order: 1;
    }

    @include medium() {
      margin: 8px 0 7px;
    }
  }
  &__bookmark{
    cursor: pointer;
  }
}

.feed-content {
  order: 0;
  color: black;
  width: 100%;
  margin-bottom: 2px;
  @include largePhone() {
    order: 2;
    margin-bottom: 0;
  }
  &__href{
    text-decoration: none;
    color: black;
  }
  &__image{
    position: relative;
  }
  &__figure{
    width: 150px;
    margin: 0 0 0 10px;
    float: right;

    @include verySmall(){
      width: 100%;
    }
    @include medium(){
      margin: 0 0 0 40px;
    }
    @include large() {
      width: 205px;
    }
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
    font-size: 17px;
    line-height: 20px;
    @include medium() {
      font-size: 23px;
      line-height: 25px;
    }
  }
  &__abstract{
    margin: 0;
    font-family: 'times new roman',times,serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;

    @include medium() {
      font-size: 14px;
      line-height: 20px;
    }
  }
  &__author{
    margin: 11px 0 4px;
    color: #999;
    font-family: helvetica,arial,sans-serif;
    font-size: 11px;
    font-weight: 500;
    line-height: 12px;
  }
}
</style>

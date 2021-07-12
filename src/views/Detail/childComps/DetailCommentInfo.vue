<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="allow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in commentInfo.images"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>

<style scoped>
.comment-info {
  padding: 0.05rem 0.12rem;
  color: #333;
  border-bottom: 0.05rem solid #f2f5f8;
}

.info-header {
  height: 0.5rem;
  line-height: 0.5rem;
  border-bottom: 0.01rem solid rgba(0, 0, 0, 0.1);
}

.header-title {
  float: left;
  font-size: 0.15rem;
}

.header-more {
  float: right;
  margin-right: 0.1rem;
  font-size: 0.13rem;
}

.info-user {
  padding: 0.1rem 0 0.05rem;
}

.info-user img {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
}

.info-user span {
  position: relative;
  font-size: 0.15rem;
  top: -0.15rem;
  margin-left: 0.1rem;
}

.info-detail {
  padding: 0 0.05rem 0.15rem;
}

.info-detail p {
  font-size: 0.14rem;
  color: #777;
  line-height: 1.5;
}

.info-detail .info-other {
  font-size: 0.12rem;
  color: #999;
  margin-top: 0.1rem;
}

.info-other .date {
  margin-right: 0.08rem;
}

.info-imgs {
  margin-top: 0.1rem;
}

.info-imgs img {
  width: 0.7rem;
  height: 0.7rem;
  margin-right: 0.05rem;
}
</style>

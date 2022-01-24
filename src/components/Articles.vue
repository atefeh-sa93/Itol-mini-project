<template>
  <v-container>
    <v-row>
      <v-col cols="9" md="9">
        <h2 class="mb-3">Articles</h2>
        <div
          class="article-preview"
          v-for="(item, index) in articlesDetail"
          :key="index"
        >
          <div class="article-preview-info d-flex align-center">
            <v-img
              :src="item.author.image"
              max-height="171"
              max-width="33"
              class="rounded-circle"
            />
            <div class="ml-3 mt-4 d-inline">
                <a href="#" class="text-decoration-none green--text">{{item.author.username}}</a>
                <p>{{item.updatedAt}}</p>
            </div>
          </div>
          <a href="#" class="text-decoration-none">
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <a class="text-decoration-none grey--text text--lighten-1">Read more</a>
            <ul class="text-right">
              <a
                v-for="(element, index) in item.tagList"
                :key="index"
                href="#"
                class="text-decoration-none"
                >{{ element }}</a
              >
            </ul>
          </a>
        </div>
      </v-col>

      <v-col cols="3" md="3">
        <div class="sidebar">
          <h4 class="mb-3 blue-grey--text text--lighten-1">Popular tags</h4>
          <div>
            <a
              v-for="(item, index) in tags[0]"
              :key="index"
              href="#"
              class="sidebar-tags shaped text-decoration-none"
              >{{ item }}</a
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ArticlesList",

  props: {
    tags: {
      type: [Array, Object],
    },
    articlesDetail: {
      type: [Array, Object],
    },
  },
};
</script>

<style lang="scss" scoped>
.article-preview {
  border-top: 1px solid rgba(0,0,0,0.1);
  padding: 1.5rem 0;

  & h1 {
    font-weight: 600 !important;
    font-size: 1.5rem !important;
    margin-bottom: 3px;
    color: #000;
  }

  & p {
    font-weight: 300;
    font-size: 24px;
    color: #999;
    margin-bottom: 15px;
    font-size: 1rem;
    line-height: 1.3rem;
  }

  & ul a {
    border: 1px solid #ddd;
    color: #aaa !important;
    background: none !important;
    font-weight: 300;
    font-size: 0.8rem !important;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    padding-right: 0.4em;
    padding-left: 0.4em;
    border-radius: 10rem;
    margin-right: 10px;
  }
}
.sidebar {
  padding: 5px 10px 10px 10px;
  background: #f3f3f3;
  border-radius: 4px;
  margin-top: 30px;
  &-tags {
    color: #fff !important;
    font-size: 0.8rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    white-space: nowrap;
    margin-right: 3px;
    margin-bottom: 0.2rem;
    display: inline-block;
    background: #818a91;
  }
  & .shaped {
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
  }
}
</style>

<template>
  <div>
    <HomeBanner />
    <Articles :tags="tagsList" :articlesDetail="articlesList"/>
  </div>
</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
import Articles from "../components/Articles.vue";
import axios from "axios";

export default {
  name: "Home",

  components: {
    HomeBanner,
    Articles,
  },

  data() {
    return {
      tagsList: [],
      articlesList:[]
    };
  },

  mounted() {
    this.tags();
    this.articles();
  },

  methods: {
    tags() {
      axios.get(`/tags`).then((result) => {
        this.tagsList = Object.values(result.data);
      });
    },
    articles() {
      axios.get(`/articles?limit=10&offset=0`).then((result) => {
        this.articlesList= result.data.articles;
      });
    }
  },
};
</script>

<template>
  <div
    class="meme-container"
    :class="{ 'meme-container-clicked': clicked }"
    @click="copy"
    @mouseleave="hover"
  >
    <iframe
      v-if="isEmbed"
      class="meme"
      :src="previewUrl"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <div
      v-else
      class="meme"
      :style="{ backgroundImage: 'url(' + previewUrl + ')' }"
    ></div>
  </div>
</template>

<script>
import getEmbedUrl from "../getEmbedUrl";
import copyToClipboard from "../copyToClipboard";

export default {
  props: { url: String },
  data: () => ({
    errored: false,
    clicked: false
  }),
  computed: {
    isEmbed() {
      return /youtu/.test(this.url);
    },
    previewUrl() {
      return getEmbedUrl(this.url) || this.url;
    }
  },
  methods: {
    copy() {
      copyToClipboard(this.url);
      this.clicked = true;
    },
    hover() {
      this.clicked = false;
    }
  }/*,
  beforeMount() {
    if (this.isEmbed) {
      return;
    }

    // Be pessimistic
    this.errored = true;

    const img = new Image();

    img.onload = () => {
      this.errored = img.naturalWidth < 10 || img.naturalHeight < 10;
    };

    img.src = this.url;
  }*/
};
</script>

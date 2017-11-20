<template>
  <div id="app" class="memebox">
    <meme
      v-for="url in urls"
      :key="url"
      :url="url"
    />
  </div>
</template>

<script>
import urls from '../urls';
import Meme from './components/Meme';

export default {
  data: () => ({ urls }),
  components: { Meme }
};
</script>

<template>
  <div class="wrapper">
    <ARHeader>
      <template v-slot:title>
        <h1>Brightness & Contrast Developer Test</h1>
        <h2>01 Jun, 2018 – 31 Dec, 2019</h2>
      </template>
      <template v-slot:afeature>
        <img
          src="/images/beyond-the-valley@2x.jpg"
          alt="Beyond the Valley"
        >
      </template>
      <template v-slot:avatar>
        <img
          src="/images/avatar.jpg"
          alt="Thom Vincent"
        >
      </template>
    </ARHeader>
  </div>
</template>

<script>
import ARHeader from '../components/ARHeader.vue';

export default {
	name: 'Editor',
	components: {
		ARHeader,
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';
.wrapper {
  background-color: red;
  margin: 0 auto;
  max-width: 375px;
  width: 100%;
}
h1 {
  color: #ffffff;
  font-family: 'GraphikMedium';
  font-size: 15px;
  font-weight: normal;
  line-height: 25px;
  margin: 0;
  padding: 0;
}
h2 {
  color: #ffffff;
  font-family: 'GraphikRegular';
  font-size: 13px;
  font-weight: normal;
  line-height: 20px;
  margin: 0;
  padding: 0;
}
</style>

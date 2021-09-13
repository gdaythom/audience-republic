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
    <div class="controls">
      <ARSlider
        colour="#25A95B"
        title="Brightness"
        instructions="Slide to adjust image brightness!☀️"
        style="margin-bottom:7px;"
        @input="changeRange($event)"
      />
      <ARSlider
        colour="#4A90E2"
        title="Contrast"
        instructions="Slide to adjust image contrast! 🌓"
        @input="changeRange($event)"
      />
    </div>
  </div>
</template>

<script>
import ARHeader from '../components/ARHeader.vue';
import ARSlider from '../components/ARSlider.vue';

export default {
	name: 'Editor',
	components: {
		ARHeader,
		ARSlider,
	},
	methods: {
		changeRange($event) {
			console.log($event);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';
.wrapper {
  background-color: #ffffff;
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
.controls {
  padding: 17px 20px;
}
</style>

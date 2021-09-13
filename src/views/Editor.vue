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
    <div class="content">
      <ARSlider
        colour="#25A95B"
        title="Brightness"
        instructions="Slide to adjust image brightness!☀️"
        :disabled="!uploadAvailable"
        style="margin-bottom:7px;"
        @input="changeRange($event, 'brightness')"
      />
      <ARSlider
        colour="#4A90E2"
        title="Contrast"
        instructions="Slide to adjust image contrast! 🌓"
        :disabled="!uploadAvailable"
        style="margin-bottom:30px;"
        @input="changeRange($event, 'contrast')"
      />
      <ARUpload
        :brightness="brightness"
        :contrast="contrast"
        @uploaded="changeUpload($event)"
      />
    </div>
  </div>
</template>

<script>
import ARHeader from '../components/ARHeader.vue';
import ARSlider from '../components/ARSlider.vue';
import ARUpload from '../components/ARUpload.vue';

export default {
	name: 'Editor',
	components: {
		ARHeader,
		ARSlider,
		ARUpload,
	},
	data() {
		return {
			uploadAvailable: false,
			brightness: 0,
			contrast: 0,
		};
	},
	methods: {
		changeUpload($event) {
			this.brightness = 0;
			this.contrast = 0;
			this.uploadAvailable = $event;
		},
		changeRange($event, property) {
			this[property] = parseInt($event, 10);
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
  line-height: 22px;
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
.content {
  margin-bottom: 30px;
  padding: 17px 20px;
}
</style>

<template>
  <div>
    <!-- <pre>{{ events }}</pre> -->
    <router-view />
  </div>
</template>

<script>
export default {
	name: 'App',
	computed: {
		isLoading() {
			return this.$store.getters.isLoading;
		},
		events() {
			return this.$store.getters.events;
		},
	},
	mounted() {
		this.$store.dispatch('fetchEvents');
	},
};
</script>

<style lang="scss">
@font-face {
  font-family: 'GraphikRegular';
  font-display: swap;
  src: local('Graphik Regular'),
  url(/fonts/Graphik_Regular_Regular.otf) format('otf'),
  url(/fonts/Graphik_Regular_Regular.ttf) format('ttf'),
  url(/fonts/Graphik_Regular_Regular.woff2) format('woff2');
}
@font-face {
  font-family: 'GraphikMedium';
  font-display: swap;
  src: local('Graphik Medium'),
  url(/fonts/Graphik_Medium_Regular.otf) format('otf'),
  url(/fonts/Graphik_Medium_Regular.ttf) format('ttf'),
  url(/fonts/Graphik_Medium_Regular.woff2) format('woff2');
}

body {
  background-color: #F6F9FC;
  font-family: 'GraphikRegular';
  font-weight: 400;
  margin: 0;
  padding: 0;
}
</style>

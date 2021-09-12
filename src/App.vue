<template>
  <div>
    <h1 class="font-medium">
      Audience Republic
    </h1>
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/editor">
      Editor
    </router-link>
    <router-link to="/events">
      Events
    </router-link>
    {{ isLoading }}
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

<style lang="scss"></style>

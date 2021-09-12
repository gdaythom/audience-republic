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
  </div>
</template>

<script>
export default {
	name: 'Home',
};
</script>

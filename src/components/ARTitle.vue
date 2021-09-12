<template>
  <h1>
    <slot />
  </h1>
</template>

<script>
export default {
	name: 'ARTitle',
};
</script>

<style lang="scss" scoped>
h1 {
  color: #43516B;
  font-size: 30px;
  line-height: 1;
  font-weight: normal;
  margin: 0;
  padding: 0;
}
</style>

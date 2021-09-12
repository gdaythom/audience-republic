<template>
  <button>
    <slot name="icon" />
    <slot name="label" />
  </button>
</template>

<script>
export default {
	name: 'ARButton',
};
</script>

<style lang="scss" scoped>
button {
  background-color: #7344C0;
  border-radius: 3px;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 14px;
  line-height: 50px;
  height: 50px;
  text-align: center;
  transition: background .2s ease;
  width: 190px;
  &:hover {
    background-color: #592F9D;
    transition: background .2s ease;
  }
}
</style>

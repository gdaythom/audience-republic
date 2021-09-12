<template>
  <button>
    <slot name="icon" />
    <span>
      <slot name="label" />
    </span>
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
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  cursor: pointer;
  color: #ffffff;
  font-family: 'GraphikMedium';
  font-size: 14px;
  font-weight: normal;
  line-height: 16px;
  height: 50px;
  text-align: center;
  transition: all .2s ease;
  width: 190px;
  &:hover {
    background-color: #592F9D;
    transition: all .2s ease;
  }
  img, svg {
    margin-right: 8px;
  }
  img, svg, span {
    vertical-align: middle;
  }
}
</style>

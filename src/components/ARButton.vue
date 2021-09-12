<template>
  <button>
    <slot name="icon" />
    <span class="onTablet">
      <slot name="tablet" />
    </span>
    <span class="onDesktop">
      <slot name="desktop" />
    </span>
  </button>
</template>

<script>
export default {
	name: 'ARButton',
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

.onTablet {
  display: inline;
  @media only screen and (min-width: $desktop) {
    display: none;
  }
}
.onDesktop {
  display: none;
  @media only screen and (min-width: $desktop) {
    display: inline;
  }
}

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
  width: 79px;
  overflow: hidden;
  white-space: nowrap;
  @media only screen and (min-width: $tablet) {
    width: 190px;
  }
  &:hover {
    background-color: #592F9D;
    transition: all .2s ease;
  }
  img {
    display: none;
    margin-right: 8px;
    @media only screen and (min-width: $desktop) {
      display: inline-block;
    }
  }
  img, span {
    vertical-align: middle;
  }
}
</style>

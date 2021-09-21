<template>
  <header>
    <div class="title">
      <slot name="title" />
    </div>
    <div class="afeature">
      <slot name="afeature" />
    </div>
    <div class="avatar">
      <slot name="avatar" />
    </div>
  </header>
</template>

<script>
export default {
	name: 'ARHeader',
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
}
.title {
  background-color: #7344C0;
  text-align: center;
  padding: 14px 0;
}
.afeature {
  height: 195px;
  overflow: hidden;
  position: relative;
  img {
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
.avatar {
  border: 2px solid #ffffff;
  border-radius: 100%;
  box-sizing: border-box;
  height: 60px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 60px;
  img {
    width: 100%;
  }
}
</style>

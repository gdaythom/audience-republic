<template>
  <div>
    <span>
      <img
        src="/icons/icon-search.svg"
        alt="Search icon"
        width="16"
        height="16"
      >
    </span>
    <input
      type="search"
      autocomplete="false"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {
	name: 'ARSearch',
	props: {
		placeholder: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

div {
  background-color: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 213px;
  @media only screen and (min-width: $tablet) {
    width: 300px;
  }
}
span {
  padding: 0 14px;
  position: absolute;
  img {
    display: none;
    @media only screen and (min-width: $tablet) {
      display: block;
    }
  }
}
input {
  border: 1px solid #DCDEE4;
  border-radius: 3px;
  color: #43516b;
  display: inline-block;
  font-size: 14px;
  padding: 16px 10px;
  transition: all .2s ease;
  width: 100%;
  &:focus {
    outline: 0 none;
    border: 1px solid #2DC26A;
    transition: all .2s ease;
  }
  @media only screen and (min-width: $tablet) {
    padding: 16px 0 16px 44px;
  }
}
::placeholder {
  color: #B4B9C4;
  opacity: 1;
}
:-ms-input-placeholder {
  color: #B4B9C4;
}
::-ms-input-placeholder {
  color: #B4B9C4;
}
</style>

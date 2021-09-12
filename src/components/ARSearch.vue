<template>
  <div>
    <span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.7963 13.829L12.7563 10.789C13.4861 9.68915 13.9132 8.37226 13.9132 6.9566C13.9132
          3.12073 10.7925 0 6.9566 0C3.12073 0 0 3.12073 0 6.9566C0 10.7925 3.12073 13.9132 6.9566
          13.9132C8.37226 13.9132 9.68915 13.4861 10.789 12.7563L13.8283 15.7963C14.1003 16.0683
          14.5407 16.0683 14.812 15.7963L15.7956 14.8127C16.0677 14.5407 16.0683 14.1003 15.7963
          13.829ZM1.39132 6.9566C1.39132 3.88804 3.88804 1.39132 6.9566 1.39132C10.0252 1.39132
          12.5219 3.88804 12.5219 6.9566C12.5219 10.0252 10.0252 12.5219 6.9566 12.5219C3.88804
          12.5219 1.39132 10.0252 1.39132 6.9566Z"
          fill="#8492A6"
        />
      </svg>
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
div {
  background-color: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
}
span {
  padding: 0 14px;
  position: absolute;
  svg {
    display: block;
  }
}
input {
  border: 1px solid #DCDEE4;
  border-radius: 3px;
  color: #43516b;
  display: inline-block;
  font-size: 14px;
  padding: 16px 0 16px 44px;
  transition: all .2s ease;
  width: 100%;
  &:focus {
    outline: 0 none;
    border: 1px solid #2DC26A;
    transition: all .2s ease;
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

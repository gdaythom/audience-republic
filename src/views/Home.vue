<template>
  <div>
    <main>
      <header>
        <img
          src="/icons/icon-logo.svg"
          alt="Audience Republic"
        >
        <h1>
          Audience Republic
        </h1>
      </header>
      <nav>
        <router-link to="/editor">
          Editor
        </router-link>
        <router-link to="/events">
          Events
        </router-link>
      </nav>
    </main>
  </div>
</template>

<script>
export default {
	name: 'Home',
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
main {
  background-color: #ffffff;
  border: 1px solid #D4D8E1;
  border-radius: 5px;
  box-shadow: 0px 2px 6px #E4E5E7;
  box-sizing: border-box;
  padding: 20px 0;
  width: 380px;
}
header {
  display: flex;
  padding: 0 20px;
  margin-bottom: 20px;
}
img {
  display: block;
  height: 35px;
  margin-right: 10px;
  width: 35px;
}
h1 {
  color: #43516B;
  margin: 0;
  padding: 0;
}
a {
  color: #43516B;
  display: block;
  font-size: 14px;
  line-height: 40px;
  padding: 0 20px;
  text-decoration: none;
}
a:hover {
  background-color: #F2EDFF;
  color: #7344C0;
}
</style>

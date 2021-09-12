<template>
  <div class="wrapper">
    <header>
      <ARTitle>Events</ARTitle>
      <nav>
        <ARSearch
          placeholder="Search 9 events..."
          style="margin-right: 10px;"
        />
        <ARButton>
          <template v-slot:icon>
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
                d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0
                8 0ZM8 14C4.7 14 2 11.3 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14
                8 14ZM7 7V4H9V7H12V9H9V12H7V9H4V7H7Z"
                fill="white"
              />
            </svg>
          </template>
          <template v-slot:label>
            Create new event
          </template>
        </ARButton>
      </nav>
    </header>
  </div>
</template>

<script>
import ARTitle from '../components/ARTitle.vue';
import ARSearch from '../components/ARSearch.vue';
import ARButton from '../components/ARButton.vue';

export default {
	name: 'Events',
	components: {
		ARTitle,
		ARSearch,
		ARButton,
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1230px;
  width: 100%;
}
header {
  border-bottom-style: solid;
  border-bottom-color: #DCDEE4;
  border-bottom-width: 1px;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-self: flex-start;
  padding-top: 42px;
  padding-bottom: 33px;
}
nav {
 display: flex;
}
</style>

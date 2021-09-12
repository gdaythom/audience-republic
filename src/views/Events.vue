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
            <img
              src="/icons/icon-create.svg"
              alt="Create icon"
              width="16"
              height="16"
            >
          </template>
          <template v-slot:label>
            Create new event
          </template>
        </ARButton>
      </nav>
    </header>
    <main>
      <div
        v-for="(event, index) in events"
        :key="index"
      >
        <AREventCard :event="event" />
      </div>
    </main>
  </div>
</template>

<script>
import ARTitle from '../components/ARTitle.vue';
import ARSearch from '../components/ARSearch.vue';
import ARButton from '../components/ARButton.vue';
import AREventCard from '../components/AREventCard.vue';

export default {
	name: 'Events',
	components: {
		ARTitle,
		ARSearch,
		ARButton,
		AREventCard,
	},
	computed: {
		events() {
			return this.$store.getters.events;
		},
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
  margin-top: 42px;
  padding-bottom: 33px;
  margin-bottom: 33px;
}
nav {
 display: flex;
}
main {
  display: grid;
  grid-template-columns: repeat(3,1.2fr);
  grid-column-gap: 44px;
  grid-row-gap: 32px;
  margin-bottom: 32px;
}
</style>

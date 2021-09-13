<template>
  <div :style="cssProps">
    <h3>
      {{ title }}
    </h3>
    <input
      :id="`${title}RangeSlider`"
      v-model="rangeValue"
      type="range"
      min="-100"
      max="100"
      @input="$emit('input', $event.target.value)"
    >
    <p>{{ instructions }}</p>
  </div>
</template>

<script>
export default {
	name: 'ARSlider',
	props: {
		colour: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		instructions: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			rangeValue: 0,
		};
	},
	computed: {
		cssProps() {
			return {
				'--colour': this.colour,
				'--colour-lighter': this.colourLighter,
				'--offset': this.calculatePercentage,
			};
		},
		colourLighter() {
			return `${this.colour}40`;
		},
		calculatePercentage() {
			return `${Math.floor(((this.rangeValue - -100) * 100) / (100 - -100))}%`;
		},
	},
};
</script>

<style lang="scss" scoped>
div {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 6px 20px;
}
h3 {
  color: var(--colour);
  font-family: 'GraphikMedium';
  font-size: 18px;
  line-height: 25px;
  font-weight: normal;
  margin: 0;
  margin-bottom: 7px;
  padding: 0;
  text-align: center;
}
p {
font-family: 'GraphikRegular';
  color: #42506B;
  font-size: 13px;
  line-height: 25px;
  margin: 0;
  margin-top: 7px;
  padding: 0;
  text-align: center;
}

input[type=range] {
  -webkit-appearance: none;
  margin: 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  background-image: linear-gradient(to right, var(--colour) var(--offset), var(--colour-lighter) var(--offset) 100%);
  border-radius: 10px;
  cursor: pointer;
  height: 5px;
  width: 100%;
}
input[type=range]::-webkit-slider-thumb {
  background-color: var(--colour);
  border: 3px solid #ffffff;
  border-radius: 100%;
  cursor: pointer;
  height: 21px;
  margin-top: -8px;
  width: 21px;
  -webkit-appearance: none;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background-image: linear-gradient(to right, var(--colour) var(--offset), var(--colour-lighter) var(--offset) 100%);
}
input[type=range]::-moz-range-track {
  background-image: linear-gradient(to right, var(--colour) var(--offset), var(--colour-lighter) var(--offset) 100%);
  border-radius: 10px;
  cursor: pointer;
  height: 5px;
  width: 100%;
}
input[type=range]::-moz-range-thumb {
  background-color: var(--colour);
  border: 3px solid #ffffff;
  border-radius: 100%;
  cursor: pointer;
  height: 15px;
  width: 15px;
}
</style>

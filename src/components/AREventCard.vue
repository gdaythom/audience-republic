<template>
  <div class="event">
    <div class="event__menu">
      <button>
        <img
          src="/icons/icon-kebab.svg"
          alt="Menu"
          width="4"
          height="16"
        >
      </button>
      <nav>
        <span />
        <a href="#">Create campaign</a>
        <a href="#">Import ticket sales</a>
        <a href="#">Edit event details</a>
        <a href="#">Merge event</a>
        <a href="#">Delete event</a>
      </nav>
    </div>
    <div class="event__logo">
      <img
        src="/icons/icon-logo.svg"
        alt="Audience Republic logo"
        width="13"
        height="12"
      >
    </div>
    <div class="event__image">
      <img
        src="/images/beyond-the-valley@2x.jpg"
        alt="Beyond the Valley"
      >
      <div class="event__cta">
        <a href="#">View event</a>
      </div>
    </div>
    <div class="event__description">
      <p class="event__title">
        {{ event.title }}
      </p>
      <p class="event__details">
        {{ event.location }}, {{ event.date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
	name: 'ARTitle',
	props: {
		event: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.event {
  box-sizing: border-box;
  position: relative;
  max-width: 380px;
}
.event__menu {
  position: absolute;
  right: 2px;
  top: 10px;
  z-index: 2;
  button {
    background: none;
    border: none;
    cursor: pointer;
    height: 40px;
    width: 40px;
  }
  span {
    background-color: #ffffff;
    border-left: 1px solid #d4d8e1;
    border-top: 1px solid #d4d8e1;
    box-sizing: border-box;
    height: 10px;
    position: absolute;
    right: 29px;
    top: -6px;
    transform: rotate(45deg);
    width: 10px;
  }
  nav {
    visibility: hidden;
    background-color: #ffffff;
    border: 1px solid #D4D8E1;
    border-radius: 5px;
    box-shadow: 0px 2px 6px #E4E5E7;
    box-sizing: border-box;
    padding: 10px 0;
    position: absolute;
    right: -15px;
    top: 50px;
    width: 205px;
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
  }
  button + nav:active,
  button:focus + nav {
    visibility: visible;
  }
}
.event__logo {
  background-color: #ffffff;
  border: 1px solid #DCDEE4;
  border-radius: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  position: absolute;
  left: 30px;
  top: 186px;
  width: 30px;
  z-index: 2;
  svg {
    display: block;
  }
}
.event__image {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 205px;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  img {
    display: block;
    height: 100%;
    width: auto;
  }
}
.event__cta {
  background-color: #1F2844;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all .2s ease;
  a {
    border: 1px solid #ffffff;
    border-radius: 3px;
    color: #ffffff;
    font-family: 'GraphikMedium';
    font-size: 14px;
    line-height: 40px;
    height: 40px;
    text-align: center;
    text-decoration: none;
    width: 120px;
  }
}
.event__image:hover .event__cta {
  opacity: 0.9;
  transition: all .2s ease;
}
.event__description {
  background-color: #ffffff;
  border: 1px solid #DCDEE4;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 25px 30px;
}
p {
  font-family: 'GraphikRegular';
  margin: 0;
  padding: 0;
}
.event__title {
  color: #43516B;
  display: inline-block;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 320px;
}
.event__details {
  color: #8E97A6;
  font-size: 16px;
  line-height: 25px;
}
</style>

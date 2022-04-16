<template>
  <div class="circular-chart">
    <svg viewBox="0 0 36 36" class="w-100">
      <path
        class="circle-alt"
        stroke-dasharray="100, 100"
        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        v-if="percentage"
        class="circle"
        :stroke-dasharray="`${percentage}, 100`"
        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
    <div class="text">{{ percentage }}<span>%</span></div>
  </div>
</template>

<script>
export default {
  name: "PieChart",
  props: {
    percentage: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/css/mixins";

.circular-chart {
  display: flex;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  align-items: center;
  position: relative;
  flex-shrink: 0;
}

.circle {
  stroke: cl("accent");
  fill: none;
  width: 100%;
  stroke-width: 1.2;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

.circle-alt {
  stroke: var(--bgContrastDefault);
  fill: none;
  stroke-width: 1.2;
}

.text {
  fill: currentColor;
  font-size: 2rem;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  span {
    font-size: 50%;
    font-weight: lighter;
    margin-right: -0.5ch;
  }
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>

<template>
  <div class="BarChart">
    <div class="bars">
      <div :key="month.month" v-for="month in data" :data-month="month.month">
        <span
          :style="`height: ${month.percent}%`"
          :class="{ active: month.percent >= 60 }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarChart",
  data() {
    return {
      data: [
        {
          month: "FEB",
          percent: 20,
        },
        {
          month: "MAR",
          percent: 80,
        },
        {
          month: "APR",
          percent: 50,
        },
        {
          month: "MAY",
          percent: 30,
        },
        {
          month: "JUN",
          percent: 70,
        },
        {
          month: "JUL",
          percent: 100,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/css/mixins";

.BarChart {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;

  .bars {
    display: flex;
    width: 100%;

    div {
      background: var(--bgContrastDefault);
      width: 4px;
      font-size: 8px;
      flex-shrink: 0;
      height: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 999px;
      position: relative;
      margin: 0 auto 2em;

      &:after {
        content: attr(data-month);
        position: absolute;
        margin-top: 1em;
        bottom: -2em;
        left: 50%;
        transform: translateX(-50%);
      }

      span {
        width: 100%;
        display: block;
        background: cl("grey6");
        margin-top: auto;
        border-radius: 999px;

        &.active {
          background: cl("accent");
        }
      }
    }
  }
}
</style>

<template>
  <SectionBase grid-type="none">
    <template #title>
      <SectionTitle title="Activity" icon="activity" has-border />
    </template>

    <template #content>
      <div class="flex gap-lg" :class="cBp < bps.lg ? 'fdc' : ''">
        <div
          class="list scroll-styling"
          :class="cBp < bps.lg ? 'w-100' : 'w-2/3'"
        >
          <Activity
            :key="activity"
            :has-collection="activity.hasCollection"
            :has-content="activity.hasContent"
            :is-new="index < 2"
            :time="index + 1"
            :text="activity.text"
            v-for="(activity, index) in activities"
          />
        </div>

        <Panel
          bg="match"
          shadow
          inner-classes="flex jcc"
          :class="cBp < bps.lg ? 'w-100 mt-10' : 'w-1/3'"
        >
          <div class="p-3 flex fdc aic jcc h-50">
            <h6 class="text-body mb-6">Profile Completion</h6>
            <PieChart :percentage="60" />
            <Btn size="md" class="mt-6" text="View Profile" />
          </div>

          <hr class="hr mt-8 mb-8" />

          <div class="p-3 flex fdc aic jcc h-50">
            <h6 class="text-body mb-8">Goals Reached</h6>
            <BarChart />
            <Btn size="md" class="mt-6" text="View Goals" />
          </div>
        </Panel>
      </div>
    </template>
  </SectionBase>
</template>

<script>
const { faker } = require("@faker-js/faker");

import SectionBase from "@/components/homepage/sections/SectionBase";
import SectionTitle from "@/components/SectionTitle";
import Activity from "@/components/Activity";
import Panel from "@/components/ui/Panel";
import PieChart from "@/components/ui/PieChart";
import BarChart from "@/components/ui/BarChart";
import Btn from "@/components/ui/Btn";
import useTheme from "@/composables/useTheme";
import { ref } from "vue";
import { svgBase, collectionIcon } from "@/assets/js/icons";

export default {
  name: "MyActivity",
  components: {
    SectionBase,
    SectionTitle,
    Activity,
    Panel,
    PieChart,
    BarChart,
    Btn,
  },

  setup() {
    const { cBp, bps } = useTheme();

    const generate = () => {
      if (Math.random() < 0.33) {
        return {
          text: `<b>${faker.name.firstName()} ${faker.name.lastName()}</b> shared a <b>
                ${svgBase(
                  collectionIcon,
                  "sm vam thick mb-1"
                )} Collection</b> with you.`,
          hasCollection: true,
        };
      } else if (Math.random() < 0.33) {
        return {
          text: `<b>${faker.name.firstName()} ${faker.name.lastName()}</b> has added some new content to a <b>
                ${svgBase(
                  collectionIcon,
                  "sm vam thick mb-1"
                )} Collection</b> that's shared with you.`,
          hasCollection: true,
        };
      }

      return {
        text: `<b>${faker.name.firstName()} ${faker.name.lastName()}</b> assigned some <b>Content</b> to you.`,
        hasContent: true,
      };
    };

    const activities = ref([]);

    for (let i = 0; i < 10; i++) {
      activities.value[i] = generate();
    }

    return {
      cBp,
      bps,
      activities,
    };
  },
};
</script>

<style scoped lang="scss">
.list {
  height: 38rem;
}
</style>

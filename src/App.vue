<template>
  <main>
    <SiteHeader />

    <Featured />

    <Container>
      <CTA
        :display-mode="cBp > bps.md ? 'md' : 'sm'"
        @action="updateSidebarOpen(true)"
        button-text="Start Customising"
      >
        <template #header>
          Customise your Homepage
          <Icon size="md" name="edit" class="ml-3 text-faded-2" />
        </template>
        <template #body>
          <p class="text-faded">
            Welcome! It looks like this is your first time here. Your homepage
            is completely customisable. You can choose a colour, light or dark
            mode, and even add/reorder the sections of this page.
          </p>
        </template>
      </CTA>
    </Container>

    <div class="mt-spv" />

    <Container
      v-for="(section, index) in userSections"
      :key="section"
      :class="index % 2 ? '' : 'alt'"
    >
      <component :is="section" />
    </Container>

    <Container v-if="!userSections.length">
      <div class="flex fdc jcc aic mb-10 h-50vh">
        <h2 class="text-xxl">Your Homepage is empty</h2>
        <p class="text-faded">
          Add some sections to your homepage using the button below
        </p>
        <Btn
          text="Add Section"
          icon="plus"
          theme="contrast-solid"
          size="lg"
          @click="updateSidebarOpen(true)"
        />
      </div>
    </Container>

    <SiteFooter />

    <div class="code-prompt">
      <a
        target="_blank"
        href="https://github.com/danchristofi/portfolio-dashboard-vue"
      >
        See Vue.js Code
      </a>
      <a
        target="_blank"
        href="https://github.com/danchristofi/portfolio-dashboard-next"
      >
        See Next.js Code
      </a>
    </div>
  </main>

  <CustomiseHomepageSidebar />
</template>

<script>
import AssignedToMe from "@/components/homepage/sections/AssignedToMe";
import MyContent from "@/components/homepage/sections/MyContent";
import MyActivity from "@/components/homepage/sections/MyActivity";
import Colleagues from "@/components/homepage/sections/Colleagues";
import CollectionsCBM from "@/components/homepage/sections/CollectionsCBM";
import CollectionsSWM from "@/components/homepage/sections/CollectionsSWM";
export default {
  name: "App",
  components: {
    AssignedToMe,
    MyContent,
    MyActivity,
    Colleagues,
    CollectionsCBM,
    CollectionsSWM,
  },
};
</script>

<script setup>
import useTheme from "@/composables/useTheme";
import useHomepage from "@/composables/useHomepage";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Featured from "./components/featured/Featured";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import CustomiseHomepageSidebar from "@/components/homepage/CustomiseHomepageSidebar";
import Btn from "@/components/ui/Btn";
import Icon from "@/components/ui/Icon";

import { onMounted, onUnmounted } from "vue";

const { updateTheme, updateDensity, updateColor, cBp, updateBreakpoint, bps } =
  useTheme();

const { updateSidebarOpen, userSections } = useHomepage();

const updateScrollWidth = () => {
  let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty(
    "--scrollBarWidth",
    `${scrollBarWidth}px`
  );
};

onMounted(() => {
  const localColor = localStorage.getItem("color");
  if (localColor) {
    updateColor(parseInt(localColor));
  } else {
    updateColor(Math.floor(Math.random() * 4));
  }

  const theme = localStorage.getItem("theme");
  if (theme) {
    updateTheme(theme === "true" || theme === "1");
  }

  setTimeout(() => {
    updateScrollWidth();
  }, 10);

  updateDensity();
  updateBreakpoint();

  window.addEventListener("resize", updateDensity);
  window.addEventListener("resize", updateScrollWidth);
  window.addEventListener("resize", updateBreakpoint);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateDensity);
  window.removeEventListener("resize", updateScrollWidth);
  window.removeEventListener("resize", updateBreakpoint);
});
</script>

<style lang="scss">
@import "./assets/css/global";

.alt {
  background: cl("grey10");
  @include dark() {
    background: cl("grey2", 0.2);
  }
}

.code-prompt {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 100;
  background: cl("bodyBg");
  padding: 1rem 1.5rem;
  border-radius: var(--rad);
  border: 1px solid cl("contrast", 0.1);
  a {
    text-decoration: underline;
    & + a {
      margin-left: 1rem;
    }
  }
}
</style>

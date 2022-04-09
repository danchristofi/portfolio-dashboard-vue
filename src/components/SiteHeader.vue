<template>
  <header>
    <div class="logo flex aic">
      <Icon class="text-faded" />
      <span class="text-lg mb-0 ml-4">
        <span class="font-normal">Dash</span>
        <b>Board</b>
      </span>
    </div>
    <nav v-if="!isMobile">
      <ul>
        <li class="active"><a href="#">Home</a></li>
        <li class="inactive"><a href="#">Assigned to Me</a></li>
        <li class="inactive"><a href="#">Collections</a></li>
      </ul>
    </nav>
    <button class="ml-a p-7" @click="updateSidebarOpen(true)">
      <Icon size="md" name="settings" />
    </button>
    <button @click="profileMenuOpen = true" class="user">
      <img
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
    </button>
    <button
      v-if="isMobile"
      class="mobile-toggle p-7"
      @click="mobileMenuOpen = true"
    >
      <span />
      <span />
      <span />
    </button>
  </header>

  <teleport v-if="isMobile" to="#sidebar-container">
    <SideBar
      :open="mobileMenuOpen"
      height-auto
      hide-footer
      @close="mobileMenuOpen = false"
    >
      <ul>
        <li :key="link.text" v-for="link in links" class="active">
          <a
            href="#"
            class="text-lg pt-6 pb-6 pr-10 flex aic mb-0"
            :class="link.text === 'Home' ? 'active' : 'inactive'"
          >
            <Icon :name="link.icon" class="mr-5 text-faded" />
            {{ link.text }}</a
          >
        </li>
      </ul>
    </SideBar>
  </teleport>

  <teleport to="#sidebar-container">
    <SideBar
      :open="profileMenuOpen"
      hide-footer
      height-auto
      width="md"
      @close="profileMenuOpen = false"
    >
      <div class="text-center flex fdc h-100">
        <div class="profile-image mx-a">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
        <h5 class="text-xl mb-0 mt-5">John Smith</h5>
        <sub class="text-body text-faded">Developer</sub>

        <Panel bg="faded" class="my-10">
          <div class="p-3 flex fdc aic jcc">
            <h6 class="text-body mb-6">Profile Completion</h6>
            <PieChart :percentage="60" />
            <Btn
              class="mt-8 mx-a"
              size="md"
              theme="accent-match"
              text="View Profile"
            />
          </div>
        </Panel>

        <Btn
          class="mx-a"
          size="md"
          icon="chevron-left"
          icon-size="xs"
          theme="ghost"
          text="Log Out"
        />
      </div>
    </SideBar>
  </teleport>
</template>

<script>
import Panel from "@/components/ui/Panel";
import PieChart from "@/components/ui/PieChart";
import SideBar from "@/components/SideBar";
import Icon from "@/components/ui/Icon";
import Btn from "@/components/ui/Btn";
import useTheme from "@/composables/useTheme";
import { computed, ref } from "vue";
import useHomepage from "@/composables/useHomepage";
export default {
  name: "SiteHeader",
  components: { SideBar, Icon, Btn, PieChart, Panel },
  setup() {
    const { cBp, bps } = useTheme();

    const { updateSidebarOpen } = useHomepage();

    const isMobile = computed(() => {
      return cBp.value < bps.value.md;
    });

    const links = ref([
      {
        icon: "home",
        text: "Home",
      },
      {
        icon: "checkbox",
        text: "Assigned to Me",
      },
      {
        icon: "collection",
        text: "Collections",
      },
    ]);

    const mobileMenuOpen = ref(false);
    const profileMenuOpen = ref(false);

    return {
      updateSidebarOpen,
      isMobile,
      mobileMenuOpen,
      profileMenuOpen,
      links,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/mixins";
@import "../assets/css/window-breakpoints";

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--headerHeight);
  display: flex;
  align-items: center;
  background: cl("bodyBg", 0.95);
  z-index: 100;
  padding: 0 2rem;

  @include screen($screenMd) {
    background: cl("grey8");
    @include dark() {
      background: cl("grey3");
    }
  }

  .modal-open & {
    width: calc(100% - var(--scrollBarWidth));
  }
  nav {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ul {
    display: flex;
    li {
      font-weight: 500;
      a {
        padding: 0 2em;
      }
    }
  }
}

.inactive {
  opacity: 0.3;
}
.active {
  opacity: 1;
}

.user {
  width: toRem(54);
  aspect-ratio: 1/1;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: inset 0 0 0 2px #{cl("contrast", 0.2)};

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: relative;
  }
}

.mobile-toggle {
  margin-right: -1rem;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    background: currentColor;
    height: 2px;
    margin: 1.5px 0;
    width: 1.8rem;
    flex-shrink: 0;
    display: block;
    border-radius: 20px;
  }
}

.profile-image {
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100%;
    box-shadow: inset 0 0 0 2px #{cl("contrast", 0.2)};
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>

import { readonly, ref } from "vue";

const theme = ref(false);
const color = ref(1);
const colorOptions = ref([
  "199, 89, 131",
  "89, 191, 199",
  "199, 174, 89",
  "167, 186, 86",
]);

const lowDensity = ref(false);
const bps = ref({
  xs: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
});
const cBp = ref(bps.value.xl);

export default () => {
  const updateTheme = (isDark) => {
    theme.value = isDark;
    localStorage.setItem("theme", isDark);
    if (theme.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const updateColor = (newColor) => {
    color.value = newColor;
    localStorage.setItem("color", newColor);
    document.documentElement.style.setProperty(
      "--accent",
      `${colorOptions.value[newColor]}`
    );
  };

  const updateDensity = () => {
    lowDensity.value = window.devicePixelRatio <= 1 && window.innerWidth > 1350;

    if (lowDensity.value) {
      document.documentElement.classList.add("low-density");
    } else {
      document.documentElement.classList.remove("low-density");
    }
  };

  const updateBreakpoint = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 1260) {
      cBp.value = bps.value.xl;
    } else if (windowWidth > 1080) {
      cBp.value = bps.value.lg;
    } else if (windowWidth > 800) {
      cBp.value = bps.value.md;
    } else if (windowWidth > 576) {
      cBp.value = bps.value.sm;
    } else {
      cBp.value = bps.value.xs;
    }
  };

  return {
    color: readonly(color),
    colorOptions: readonly(colorOptions),
    updateColor,

    theme: readonly(theme),
    updateTheme,

    cBp: readonly(cBp),
    bps: readonly(bps),
    updateBreakpoint,

    lowDensity: readonly(lowDensity),
    updateDensity,
  };
};

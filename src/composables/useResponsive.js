import { computed } from "vue";
import useTheme from "@/composables/useTheme";

export const useResponsive = (props) => {
  const { cBp } = useTheme();

  const mode = computed(() => {
    if (props.customMode) {
      return props.customMode[cBp.value] ?? props.displayMode;
    }
    return props.displayMode;
  });

  return {
    mode,
  };
};

export const withResponsiveProps = (validation, props) => {
  return {
    displayMode: {
      type: String,
      default: validation[0],
      validator: function (value) {
        return validation.indexOf(value) !== -1;
      },
    },
    customMode: {
      type: [Boolean, Array],
      default: false,
      validator: function (value) {
        return value ? value.every((x) => validation.includes(x)) : true;
      },
    },
    ...props,
  };
};

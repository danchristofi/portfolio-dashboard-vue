import { readonly, ref, computed } from "vue";

const sidebarOpen = ref(false);

const allSections = ref([
  {
    id: "AssignedToMe",
    title: "Assigned to me",
  },
  {
    id: "MyActivity",
    title: "Activity",
  },
  {
    id: "MyContent",
    title: "My Content",
  },
  {
    id: "Colleagues",
    title: "Colleagues",
  },
  {
    id: "CollectionsCBM",
    title: "Collections",
    subtitle: "Created by me",
  },
  {
    id: "CollectionsSWM",
    title: "Collections",
    subtitle: "Shared with me",
  },
]);

const userSections = ref([
  "MyActivity",
  "MyContent",
  "AssignedToMe",
  "Colleagues",
  "CollectionsCBM",
]);

const findSectionById = (id) => {
  return allSections.value.find((x) => x.id === id);
};

const featuredTiles = ref([
  {
    id: 1,
    text: "Booking PTO",
    type: "file",
    image: "/images/1.jpg",
  },
  {
    id: 2,
    type: "link",
    text: "IT Support",
    image: "/images/2.jpg",
  },
  {
    id: 3,
    text: "Troubleshooting",
    image: "/images/3.jpg",
    isCollection: true,
  },
]);

export default () => {
  const updateSidebarOpen = (isOpen) => {
    sidebarOpen.value = isOpen;
  };

  const addUserSection = (section) => {
    userSections.value.unshift(section);
  };

  const removeUserSection = (id) => {
    userSections.value = userSections.value.filter((section) => section !== id);
  };

  const availableSections = computed(() => {
    return allSections.value.filter(
      (section) => !userSections.value.includes(section.id)
    );
  });

  return {
    allSections: readonly(allSections),
    availableSections: readonly(availableSections),
    userSections,
    findSectionById,
    addUserSection,
    removeUserSection,
    sidebarOpen: readonly(sidebarOpen),
    updateSidebarOpen,
    featuredTiles: readonly(featuredTiles),
  };
};

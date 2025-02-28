<template>
    <div class="division-backgrounds">
      <DivisionBackgroundItem
        v-for="i in 3"
        :key="i"
        :index="i"
        :hoveredIndex="hoveredIndex"
        @set-hovered-index="handleHoverIndex"
      />
    </div>
  </template>
  
  <script>
  import DivisionBackgroundItem from './DivisionBackgroundItem.vue';
  
  export default {
    name: 'DivisionBackgrounds',
    components: { DivisionBackgroundItem },
    data() {
      return {
        hoveredIndex: null
      };
    },
    methods: {
      handleHoverIndex(index) {
        // When an item is hovered, set hoveredIndex = that item’s index
        // When mouse leaves, set hoveredIndex = null
        this.hoveredIndex = index;
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  .division-backgrounds {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* Adjust width/spacing as desired */
    width: 60rem;
    margin: 0 auto;
    border: 1px solid red;
  }
  </style>
  
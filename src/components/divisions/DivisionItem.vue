<template>
    <div class="masterminds-division-item" :class="[divisionClass, isHover ? 'expanded' : isOtherHover ? 'contracted' : '', divisionClassExpanded ? divisionClassExpanded : '']">
        <div class="base-mountain-zero">
            <img src="../../assets/images/svg/base-mountain-one-masked.svg" class="division-item" alt="Division Item Two">
        </div>

        <div class="base-mountain-one">
            <img src="../../assets/images/svg/base-mountain-one-masked.svg" class="division-item" alt="Division Item Two">
        </div>

        <div class="trees-one">
            <img src="../../assets/images/svg/trees.svg" class="division-item" alt="Division Item Two">
        </div>

        <!-- <div class="trees-two">
            <img src="../../assets/images/svg/trees.svg" class="division-item" alt="Division Item Two">
        </div> -->

        <div class="foreground">
            <img src="../../assets/images/svg/foreground.svg" class="division-item" alt="Division Item Two">
        </div>

        <div class="rock-one">
            <img src="../../assets/images/svg/rock-one.svg" class="division-item" alt="Division Item Two">
        </div>

        <div class="explorer">
            <img src="../../assets/images/svg/mm-explorer.svg" class="division-item" alt="Division Item Two">
        </div>

        <div class="masterminds-division-item-content">
            <img class="mm-brain" :alt="imgAlt" :src="getImageUrl(imgSrc)" />

            <div class="masterminds-division-item-blurb">
                <span>{{ blurbOne }} <br /> {{ blurbTwo }}</span>
            </div>

            <div class="mm-button">
                <span>Meet me here</span>
                <span class="arrow-icon">
                    <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DivisionItem',

    props: {
        indexNumber: Number,
        divisionClass: String,
        divisionClassExpanded: String,
        isHover: Boolean,
        isOtherHover: Boolean,
        imgSrc: {
            type: String,
            required: true,
            default: 'masterminds-logo.svg',
        },
        imgAlt: String,
        blurbOne: String,
        blurbTwo: String,
    },

    setup() {
        /// Methods
        const getImageUrl = (imgSrc: string | undefined) => {
            if (!imgSrc) {
                return require(`@/assets/images/logos/masterminds-logo.png`);
            }

            return require(`@/assets/images/logos/${imgSrc}`);
        };

        return {
            getImageUrl,
        };
    }
});
</script>
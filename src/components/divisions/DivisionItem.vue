<template>
    <div class="masterminds-division-item"
        :class="[divisionClass, isHover ? 'expanded' : isOtherHover ? 'contracted' : '', divisionClassExpanded ? divisionClassExpanded : '']">
        <div class="base-mountain-zero">
            <img src="../../assets/images/svg/base-mountain-one-masked.svg" class="division-item"
                alt="Alpine Mountain Range">
        </div>

        <div class="base-mountain-one">
            <img src="../../assets/images/svg/base-mountain-one-masked.svg" class="division-item"
                alt="Alpine Mountain Range">
        </div>

        <div class="trees">
            <img src="../../assets/images/svg/trees.svg" class="division-item" alt="Coniferous Trees">
        </div>

        <div class="foreground">
            <img src="../../assets/images/svg/foreground.svg" class="division-item" alt="Ridge Line">
        </div>

        <div class="rock-one">
            <img src="../../assets/images/svg/rock-one.svg" class="division-item" alt="Outcropping">
        </div>

        <div class="explorer">
            <img src="../../assets/images/svg/mm-explorer.svg" class="division-item" alt="Explorer">
        </div>

        <div class="masterminds-division-item-content">
            <img class="mm-brain" :alt="imgAlt" :src="getImageUrl(imgSrc)" />

            <div class="masterminds-division-item-blurb">
                <span>{{ blurbOne }} <br /> {{ blurbTwo }}</span>
            </div>

            <a :href="url" target="_blank" rel="noopener noreferrer" class="mm-button">
                <span>Meet me here</span>
                <span class="arrow-icon">
                    <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </span>
            </a>
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
            default: 'masterminds-logo.png',
        },
        imgAlt: String,
        blurbOne: String,
        blurbTwo: String,
        url: String,
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
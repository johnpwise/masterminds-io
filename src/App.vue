<template>
    <div class="masterminds">
        <div class="masterminds-header">
            <div class="masterminds-logo">
                <img alt="masterminds brain" src="./assets/images/logos/masterminds-logo.png" />
            </div>

            <div class="masterminds-nav">
                <div class="masterminds-nav-item">
                    <span>About us</span>
                </div>
                <div class="masterminds-nav-item">
                    <span>Contact</span>
                </div>
            </div>
        </div>

        <div class="masterminds-hero">
            <div class="masterminds-hero-title">
                <div class="statement">We <span class="bold">meet</span> you where <span class="bold">you</span> are.
                </div>
            </div>
            <div class="masterminds-hero-description">
                <p>Take Control of your Microsoft Data Platform with our Maturity Models.</p>
            </div>
        </div>

        <div class="masterminds-divisions-container">
            <DivisionItem 
                :index-number="0"
                :is-hover="isDevOpsHover"
                :is-other-hover="isDevOpsOtherHover"
                :division-class="divisionClasses[0]"
                :division-class-expanded="divisionClassExpanded"
                img-src="devops-masterminds-logo.png"
                img-alt="devops masterminds brain"
                blurb-one="Form, Flow and Fly"
                blurb-two="with our DevOps Maturity Model."
                @mouseenter="onHover('devops')"
                @mouseleave="onHover('none')" />

            <DivisionItem 
                :index-number="1"
                :is-hover="isDataHover"
                :is-other-hover="isDataOtherHover"
                :division-class="divisionClasses[1]"
                :division-class-expanded="divisionClassExpanded"
                img-src="data-masterminds-logo.png"
                img-alt="data masterminds brain"
                blurb-one="Prepare, Prevent and Predict"
                blurb-two="with our Data Maturity Model."
                @mouseenter="onHover('data')"
                @mouseleave="onHover('none')" />

            <DivisionItem 
                :index-number="2" 
                :is-hover="isAnalyticsHover"
                :is-other-hover="isAnalyticsOtherHover"
                :division-class="divisionClasses[2]"
                :division-class-expanded="divisionClassExpanded"
                img-src="analytics-masterminds-logo.png"
                img-alt="analytics masterminds brain"
                blurb-one="Assemble, Analyze and Align"
                blurb-two="with our Analytics Maturity Model."
                @mouseenter="onHover('analytics')"
                @mouseleave="onHover('none')" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// Components
import DivisionItem from './components/divisions/DivisionItem.vue';

export default defineComponent({
    name: 'App',

    setup() {
        const isDevOpsHover = ref(false);
        const isDataHover = ref(false);
        const isAnalyticsHover = ref(false);

        const isDevOpsOtherHover = ref(false);
        const isDataOtherHover = ref(false);
        const isAnalyticsOtherHover = ref(false);
        const divisionClassExpanded = ref('');

        const divisionClasses = ['devops', 'data', 'analytics'];

        const onHover = (division: string) => {
            switch (division) {
                case 'devops':
                    isDevOpsHover.value = true;
                    isDataHover.value = false;
                    isAnalyticsHover.value = false;

                    isDevOpsOtherHover.value = false;
                    isDataOtherHover.value = true;
                    isAnalyticsOtherHover.value = true;

                    divisionClassExpanded.value = 'devops-expanded';

                    break;
                case 'data':
                    isDevOpsHover.value = false;
                    isDataHover.value = true;
                    isAnalyticsHover.value = false;

                    isDevOpsOtherHover.value = true;
                    isDataOtherHover.value = false;
                    isAnalyticsOtherHover.value = true;

                    divisionClassExpanded.value = 'data-expanded';

                    break;
                case 'analytics':
                    isDevOpsHover.value = false;
                    isDataHover.value = false;
                    isAnalyticsHover.value = true;

                    isDevOpsOtherHover.value = true;
                    isDataOtherHover.value = true;
                    isAnalyticsOtherHover.value = false;

                    divisionClassExpanded.value = 'analytics-expanded';

                    break;
                default:
                    isDevOpsHover.value = false;
                    isDataHover.value = false;
                    isAnalyticsHover.value = false;

                    isDevOpsOtherHover.value = false;
                    isDataOtherHover.value = false;
                    isAnalyticsOtherHover.value = false;

                    divisionClassExpanded.value = '';

                    break;
            }
        };

        return {
            isDevOpsHover,
            isDataHover,
            isAnalyticsHover,
            isDevOpsOtherHover,
            isDataOtherHover,
            isAnalyticsOtherHover,
            divisionClassExpanded,
            divisionClasses,
            onHover,
        };
    },

    components: {
        DivisionItem
    },
});
</script>

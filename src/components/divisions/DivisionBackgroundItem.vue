<template>
    <div class="division-background-item" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" :class="{
        'active-forward': isActive && !wasActive,      // two->three->four
        'active-reverse': wasActive && !isActive,     // four->three->two
        'inactive-forward': isInactive && !wasInactive, // two->one
        'inactive-reverse': wasInactive && !isInactive // one->two
    }">
        <!-- For a smooth fade, we can stack images absolutely -->
        <div class="bg bg-two"></div>
        <div class="bg bg-three"></div>
        <div class="bg bg-four"></div>
        <div class="bg bg-one"></div>
    </div>
</template>

<script>
export default {
    name: 'DivisionBackgroundItem',
    props: {
        index: Number,
        hoveredIndex: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            wasActive: false,
            wasInactive: false
        };
    },
    computed: {
        isActive() {
            return this.hoveredIndex === this.index;
        },
        isInactive() {
            // If there's a hovered item, and it's not me, I'm inactive
            return this.hoveredIndex !== null && this.hoveredIndex !== this.index;
        }
    },
    watch: {
        // Track if we *were* active or inactive, to trigger reverse animations
        isActive(newVal, oldVal) {
            if (oldVal && !newVal) {
                // transitioning from active => not active
                this.wasActive = true;
                // Reset after animation duration
                setTimeout(() => (this.wasActive = false), 1000);
            }
        },
        isInactive(newVal, oldVal) {
            if (oldVal && !newVal) {
                // transitioning from inactive => not inactive
                this.wasInactive = true;
                // Reset after animation
                setTimeout(() => (this.wasInactive = false), 500);
            }
        }
    },
    methods: {
        onMouseEnter() {
            this.$emit('set-hovered-index', this.index);
        },
        onMouseLeave() {
            this.$emit('set-hovered-index', null);
        }
    }
};
</script>

<style scoped lang="scss">
.division-background-item {
    position: relative;
    width: 18rem;
    height: 10rem;
    margin: 1rem;
    overflow: hidden;

    // Stack each background absolutely so we can fade them in/out
    .bg {
        position: absolute;
        inset: 0; // shorthand for top: 0; right: 0; bottom: 0; left: 0;
        background-size: cover;
        background-position: center;
        opacity: 0; // all start hidden
    }

    /* Define the four backgrounds. Adjust the URL paths as needed */
    .bg-two {
        background-image: url('@/assets/images/division-background-two.svg');
        opacity: 1; // by default, we show "two"
    }

    .bg-three {
        background-image: url('@/assets/images/division-background-three.svg');
    }

    .bg-four {
        background-image: url('@/assets/images/division-background-four.svg');
    }

    .bg-one {
        background-image: url('@/assets/images/division-background-one.svg');
    }

    /*----------------------------------------------
      Active (hovered) animations: 
      Sequentially from "two" → "three" → "four"
    ----------------------------------------------*/
    &.active-forward {
        .bg-two {
            animation: active-forward-bg-two 1s forwards;
        }

        .bg-three {
            animation: active-forward-bg-three 1s forwards;
        }

        .bg-four {
            animation: active-forward-bg-four 1s forwards;
        }
    }

    &.active-reverse {
        .bg-four {
            animation: active-reverse-bg-four 1s forwards;
        }

        .bg-three {
            animation: active-reverse-bg-three 1s forwards;
        }

        .bg-two {
            animation: active-reverse-bg-two 1s forwards;
        }
    }

    /*----------------------------------------------
      Inactive animations:
      Transition from "two" to "one" and back.
    ----------------------------------------------*/
    &.inactive-forward {
        .bg-two {
            animation: inactive-forward-bg-two 0.5s forwards;
        }

        .bg-one {
            animation: inactive-forward-bg-one 0.5s forwards;
        }
    }

    &.inactive-reverse {
        .bg-one {
            animation: inactive-reverse-bg-one 0.5s forwards;
        }

        .bg-two {
            animation: inactive-reverse-bg-two 0.5s forwards;
        }
    }
}

/*----------------------------------------------
    Keyframes for the active (hovered) item
    (Sequential animation: "two" -> "three" -> "four")
  ----------------------------------------------*/
@keyframes active-forward-bg-two {
    0% {
        opacity: 1;
    }

    25% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}

@keyframes active-forward-bg-three {
    0% {
        opacity: 0;
    }

    25% {
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes active-forward-bg-four {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

/* Reverse the active sequence: "four" -> "three" -> "two" */
@keyframes active-reverse-bg-four {
    0% {
        opacity: 1;
    }

    25% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}

@keyframes active-reverse-bg-three {
    0% {
        opacity: 0;
    }

    25% {
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes active-reverse-bg-two {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

/*----------------------------------------------
    Keyframes for inactive items:
    Transition from "two" (default) to "one"
  ----------------------------------------------*/
@keyframes inactive-forward-bg-two {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes inactive-forward-bg-one {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

/* Reverse transition: "one" to "two" */
@keyframes inactive-reverse-bg-one {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes inactive-reverse-bg-two {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
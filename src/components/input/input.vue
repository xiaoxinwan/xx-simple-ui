<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)">
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from '../icon'

    export default {
        name: "XInput",
        components: {Icon},
        props: {
            value: {
                type: String
            },
            disabled: {  //没有focus状态
                type: Boolean,
                default: false
            },
            readonly: {  // 有focus状态
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../css/basic";

    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        > :not(:last-child) {
            margin-right: .3em;
        }

        > input {
            height: 32px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            margin-left: 1em;

            &:hover {
                border: 1px solid $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }

        &.error {
            > input {
                border-color: $red;
            }
        }

        .icon-error {
            fill: $red;
        }

        .error-message {
            color: $red;
        }
    }
</style>

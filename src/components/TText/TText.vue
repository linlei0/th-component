<template>
  <!-- <div></div> -->
  <component :is="tag" :style="styleProps" class='l-text-component' @click="handlerClick">
      {{ text }}
  </component>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
// import { pick } from 'lodash-es'
import { transformToComponentProps, textDefaultProps, textStylePropNames } from '@/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'
const defaultProps = transformToComponentProps(textDefaultProps)
export default defineComponent({
    name: 't-text',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        ...defaultProps,
    },
    setup(props) {
        // const styleProps = computed(()=> pick(props, textStylePropNames))
        const {styleProps, handlerClick} = useComponentCommon(props, textStylePropNames)
// styleProps.value.fontSize
        return {
            styleProps,
            handlerClick
        }
    }
})
</script>
<style scoped>
h2.l-text-component, p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>

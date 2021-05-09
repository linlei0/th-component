import { computed } from 'vue'
import { pick } from 'lodash-es'
import { TextComponentProps } from '../defaultProps'
 const useComponentCommon = (props: Readonly<Partial<TextComponentProps>>, picks: string[]) =>  {
     // 获取style样式
    const styleProps = computed(()=> pick(props, picks))
    const handlerClick = () => {
        if (props.actionType === 'url' && props.url) {
            window.location.href = props.url

        }
    }
    return {
        styleProps,
        handlerClick
    }

}

export default useComponentCommon
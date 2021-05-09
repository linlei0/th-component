import { App } from 'vue'
import TText from './TText.vue'

TText.install = (app: App)=> {
    app.component(TText.name, TText)
}

export default TText
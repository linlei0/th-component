import { App } from 'vue'
import TText from './components/TText'
const components = [
  TText
] 
const install = (app: App)=> {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
export {
  TText,
  install
}
export default { install }
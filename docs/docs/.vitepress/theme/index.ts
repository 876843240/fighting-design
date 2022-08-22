import DefaultTheme from 'vitepress/theme'
import './style/vitepress.scss'
import FightingDesign from '../../../../packages/fighting-design'
import '@fighting-design/fighting-theme'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    app.use(FightingDesign)
  }
}

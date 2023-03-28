import { App } from 'vue'
import regiseterElement from './register-element'

export function globalRegister(app: App): void {
  app.use(regiseterElement)
}

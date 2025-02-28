import { createApp } from 'vue'
import App from './App.vue'

/// SCSS
import './assets/styles/site.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* add all icons to the library */
library.add(fas, far, fab)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

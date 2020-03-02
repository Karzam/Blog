import DefaultLayout from '~/layouts/Default.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

require("gridsome-plugin-remark-prismjs-all/themes/tomorrow.css");

config.autoAddCss = false;
library.add(faGithubSquare, faLinkedin, faDev, faBars, faTimes)

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Quicksand:400,500&display=swap'
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
}

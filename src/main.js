import { defineCustomElement} from 'vue'


// import FormaterrePublishComponent from './FormaterrePublish.vue'
// import FormaterreKeywordsComponent from './FormaterreKeywords.vue'
import FormaterreAccessComponent from './FormaterreAccess.vue'
import VsoAccessComponent from './VsoAccess.vue'
// const FormaterrePublish = defineCustomElement(FormaterrePublishComponent)
// const FormaterreKeywords = defineCustomElement(FormaterreKeywordsComponent)
const FormaterreAccess = defineCustomElement(FormaterreAccessComponent)
const VsoAccess = defineCustomElement(VsoAccessComponent)
// customElements.define('formaterre-publish', FormaterrePublish)
// customElements.define('formaterre-keywords', FormaterreKeywords)
customElements.define('formaterre-access', FormaterreAccess)
customElements.define('vso-access', VsoAccess)

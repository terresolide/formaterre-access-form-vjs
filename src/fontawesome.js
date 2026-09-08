import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {faCheck,faClock, faClose, faRefresh,faSpinner} from '@fortawesome/free-solid-svg-icons'

import {
   faSquare,
   faSquareCheck
} from '@fortawesome/free-regular-svg-icons'
library.add(faCheck,faClock, faClose,faRefresh,faSpinner, faSquare, faSquareCheck)

export {FontAwesomeIcon}
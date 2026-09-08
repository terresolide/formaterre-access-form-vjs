<script setup>
import {onMounted, reactive} from 'vue'
import FormaterreAccess from './FormaterreAccess.vue';
const {api, url} = defineProps({
    api: {
        type: String,
        default: 'https://catalog.formater/api'
    },
    url: {
        type: String,
        default: 'https://spotgins.formater/sso-test/token.php'
    },
    withInstitution: {
        type: String,
        default:false
    }

})
const data = reactive({user:null})
function  getToken () {
            fetch(url, {credentials:'include'})
            .then(resp => resp.json())
            .then(json => {
                data.user = json
            })
        }
onMounted(() => {getToken()})
</script>
<template>
    <formaterre-access :api="api" :user="data.user" :with-institution="withInstitution"></formaterre-access>
</template>
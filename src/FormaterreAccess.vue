<template>
    <div v-if="user">
        <h1>Demande d'accès</h1>
    Hello {{ user.email }}
    <div><label>Organisation</label> 

    </div>
    </div>
</template>
<script>
export default {
    name: 'FormaterreAccess',
    props: {
        lang: {
            type: String,
            default: 'fr'
        },
        user: {
            type: Object,
            default: null
        },
        api: {
            type: String,
            default: 'https://catalog.formater/api'
        }
    },
    data () {
        return {
            types: {}
        }
    },
    mounted () {
        this.getOrganisationTypes()
        if (this.user) {
            this.getUserinfo(this.user.token)
        }
    },
    watch: {
        user (newvalue) {
            if (newvalue) {
                this.getUserinfo(this.user.token)
            }
        }
    },
    methods: {
        getOrganisations() {

        },
        getOrganisationTypes () {
            fetch(this.api + '/types?lang=' + this.lang)
            .then(resp => resp.json())
            .then(json => {
                if (json.types) {
                    this.organizationTypes = json.types
                }
            })
        },
        getUserinfo (bearer) {
            fetch(this.api + '/user?app=vso-opt', 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                body: new URLSearchParams({bearer:bearer})
            })
        }
    }
}
</script>
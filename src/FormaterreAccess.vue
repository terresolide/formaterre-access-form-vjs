<template>
    <div v-if="user">
        <h1>Demande d'accès</h1>
    Hello {{ user.roles }}
    <div><label>Organisation</label> 
        <input v-model="organisation.id" />
        <input v-model="organisation.name" @input="organisationUpdated($event)" > *
            <!-- <em v-if="data.organizationMessage" style="color:darkred;">{{$t('at_least_3')}}</em> -->
             <datalist id="organisations">
                <option v-for="org in organisations" :data-value="org.o_uid" >{{org.o_name}}<span v-if="org.o_short"> ({{org.o_short}})</span></option>
             </datalist>
       
    </div>
    <div><label>Type</label>
        {{ types }}
        <select v-model="organisation.type">
            <option value="">---</option>
            <option v-for="tp in types" :value="tp.t_id">{{ tp.t_name }}</option>
        </select>
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
            types: {},
            organisation: {id: null, type: null, name: null},
            organisations: [],
            roles: {}
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
        getOrganisations (domain) {
            var url = this.api + '/organisations?nb=500&orderBy=' + encodeURIComponent('o_name ASC');
            if (this.organisation.name) {
                url += '&q=' + this.organisation.name
            }
            if (this.domain) {
                url += '&domain=' + domain
            }
            fetch(url)
            .then(resp => resp.json())
            .then(json => {
                if (json.organisations) {
                this.organisations = json.organisations
                if (this.domain && data.value.organisations.length === 1) {
                    this.organisation.name = this.organisations[0].o_name
                    this.organisation.id = this.organisations[0].o_uid
                    this.organisation.type = this.organisations[0].o_fk_type_id
                }
                }
            })
        },
        organisationUpdated (event) {
            console.log(event)
            this.organisation.id = null
            this.organisation.type = null
            
            if (this.organisation.length <= 1) {
                this.organisations = []
            }
            if (event.inputType && event.inputType.indexOf('delete') >=0)
            {
                return
            }
            if (this.organisation.length === 2) {
                this.getOrganisations()
                return
            }
            if (this.organisation.length < 5) {
                return
            }
            // valid organism
            // data.showOrganismMessage = false
            var regex = new RegExp(/^[A-z0-9À-ž\s\-'@()]{5,300}$/)
            if (regex.test(this.organisation)) {
                var organism = this.organisation.name.trim().toLowerCase()
                var find = this.organisations.find(org => organism.indexOf(org.o_name.toLowerCase()) >= 0 )
                if (find) {
                    this.organisation.id = find.o_uid
                    this.organisation.type = find.o_fk_type_id
                } else {
                    this.organisation.id = null
                }
            }
        },
        getOrganisationTypes () {
            fetch(this.api + '/types?lang=' + this.lang)
            .then(resp => resp.json())
            .then(json => {
                if (json.types) {
                    this.types = json.types
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
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                if (json.organization && json.organization.id) {
                    this.organisation = json.organization
                }
                this.clients = json.clients
                this.roles = json.roles


            })
        }
    }
}
</script>
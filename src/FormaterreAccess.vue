<template>
    <div class="access" v-if="user">
        <h1>Access request</h1>
        <h2>Your organisation</h2>
        <div><label>Name</label> 

        <input type="hidden" v-model="organisation.id" />
        <input v-model="organisation.name" type="text" list="organisations" @input="organisationUpdated($event)" required> *
            <datalist id="organisations">
                <option v-for="org in organisations" :data-value="org.o_uid" >{{org.o_name}}<span v-if="org.o_short"> ({{org.o_short}})</span></option>
            </datalist>
       
        </div>
        <div><label>Type</label>
        
            <select v-model="organisation.type">
                <option value="">---</option>
                <option v-for="tp in types" :value="tp.t_id">{{ tp.t_name }}</option>
            </select>
        </div>
        <h2>Your access right</h2>
        <span style="max-height:30px;"><font-awesome-icon icon="fa-solid fa-clock" style="color:darkgreen;"></font-awesome-icon></span>
        <template v-for="client in clients">
            <div><h4>{{ client.name}}</h4>
                <div v-for="role in roles[client.clientId].roles">
                   <label>{{ role.title.en || role.name }}</label> 
                  
                    <span v-if="user.roles && user.roles[client.clientId] &&user.roles[client.clientId].indexOf(role.name) >= 0" style="color:green;" >
                      <font-awesome-icon icon="fa-solid fa-check" /> 
                </span>
                </div>
            </div>

        </template>
    </div>
</template>
<script>
import { FontAwesomeIcon } from '@/fontawesome';
export default {
    name: 'FormaterreAccess',
    components: {FontAwesomeIcon},
    props: {
        lang: {
            type: String,
            default: 'en'
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
            roles: {},
            clients: {},
            checkedRoles: []
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
        getOrganisations () {
            console.log('search')
            var url = this.api + '/organizations?nb=500&orderBy=' + encodeURIComponent('o_name ASC');
            if (this.organisation.name) {
                url += '&q=' + this.organisation.name
            }
           
            fetch(url)
            .then(resp => resp.json())
            .then(json => {
                if (json.organizations) {
                    this.organisations = json.organizations
                }
            })
        },
        organisationUpdated (event) {
            console.log(event)
            this.organisation.id = null
            this.organisation.type = null
            
            if (this.organisation.name.length <= 1) {
                this.organisations = []
            }
            if (event.inputType && event.inputType.indexOf('delete') >=0)
            {
                return
            }
            if (this.organisation.name.length == 2) {
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
                console.log(this.user.roles)
                for(var client in this.roles) {
                    console.log(client)
                    console.log(this.roles[client])
                    if (client  !== 'global') {
                        this.roles[client].roles.forEach((role) => {
                            console.log(role)
                        })
                    }
                }

            })
        }
    }
}
</script>
<style>
svg.svg-inline--fa {
  display: inline-block;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

</style>
<style scoped>

label {
    display:inline-block;
    width:180px;
    text-align:right;
    font-weight:700;
    margin-right:5px;
}
</style>
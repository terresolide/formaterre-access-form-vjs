<template>
    <div class="access" v-if="user">
        <h1>Access request</h1>
        <div>Hello <b>{{ user.email }}</b>!</div>
        <div style="margin-top:10px;display:block;">
            Complete the information about your organization if necessary, then select the access rights you require.
        </div>
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
         <template v-for="client in clients">
            <div><h4>{{ client.name}}</h4>
                <div class="input-role" v-for="role in roles[client.clientId].roles">
                    <label :title="role.description.en">{{ role.title.en || role.name }}</label> 
                    <span v-if="user.roles && user.roles[client.clientId] &&user.roles[client.clientId].indexOf(role.name) >= 0" style="color:green;" >
                      <font-awesome-icon icon="fa-solid fa-check" /> 
                    </span>
                    <span v-else-if="role.status === 'WAITING'" title="Request being processed">
                        <font-awesome-icon icon="fa-solid fa-clock" ></font-awesome-icon>
                    </span>
                    <span v-else-if="role.status === 'REJECTED'" title="Your request has been rejected.">
                        <font-awesome icon="fa-solid fa-close"></font-awesome>
                    </span>
                   
                    <span v-else><input type="checkbox" v-model="checkedRoles" :value="client.clientId + '.' + role.name" /></span>
                </div>
            </div>

        </template>
        <h2>Motivation for the moderator</h2>
        <textarea v-model="message"></textarea>
       
        <div style="width:600px;text-align:right;margin-top:20px;"><button :disabled="disabled">Send</button></div>
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
        app: {
            type: String,
            default: 'vso-opt'
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
            checkedRoles: [],
            message: '',
            asking: false
        }
    },
    computed: {
        disabled () {
            if (this.checkedRoles.length === 0) {
                return true;
            }
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
        accessRequest() {
            this.asking = true
            var location = URL.parse(window.location.href)
            // remove role "view" if there is role "view download"
             var postdata = {
                email: user.email,
                app: this.app,
                domain: location.href,
                message: this.message,
                role: this.checkedRoles,
                lang: this.lang,
                organizationId: user.organization.id
            }
            var fdata = new URLSearchParams(postdata)
            var url = config.state.tools + '/requests/ask'
            fetch(url,{
                method: 'POST',
                body: fdata.toString(),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(resp => resp.json())
            .then(json => {
                this.asking = false
                this.success = json.success
                if (json.success && json.roles) {
                    json.roles.forEach(function (role) {
                        client.setRoleStatus(role, 'WAITING')
                    })
                    this.checkedRoles = []
                    this.message = null
                }
                if (json.error) {
                    this.error = json.error
                }
            }).catch((error) => {
                this.asking = false
                this.error = 'SERVER ERROR'
            })
        },
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
.access h1,h2,h3,h4 {
    color:darkred;
}
.access input[type="text"] {
    min-width:250px;
}
.access textarea {
    min-width:600px;
    width:600px;
    height:100px;
}
.input-role span {
    display:inline-block;
    width:40px;
    text-align:center;
}
label {
    display:inline-block;
    width:180px;
    text-align:right;
    font-weight:700;
    margin-right:5px;
}
.access button {
  margin: 0 0 3px 7px;
  padding: 3px 12px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  font-size: 16px;
  line-height: 1.7;
  border: None;
  background: darkred;
  color: #fff;
  text-decoration: none;
  vertical-align: top;
  cursor: pointer;
  pointer-events: auto;
  box-sizing: border-box;
  box-shadow: 0 1px 5px #000000a6;
  opacity: .9;

}
.access button:disabled {
    opacity:0.4;
    pointer-events:none;
}
</style>
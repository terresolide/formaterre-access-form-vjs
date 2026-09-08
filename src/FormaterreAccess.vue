<template>
    <div v-if="asking" class="spinner">
        <div><font-awesome-icon icon="fa-solid fa-refresh" class="fa-spin" /></div>
    </div>
    <div class="message success" v-if="success" @click="success=null" v-html="success"></div>
    <div class="message error" v-if="error" @click="error=null" v-html="error"></div>
    <div class="access" v-if="user" @click="resetMessage()">
        <h1>Access request</h1>
        <div>Hello <b>{{ user.email }}</b>!</div>
        <div style="margin-top:10px;display:block;">
            <template v-if="withInstituion">
            Complete the information about your organization if necessary, then select the access rights you require.
            </template>
            <template v-else>
                Select the access rights you require.
            </template>
        </div>
        <span v-if="withInstitution">
            <h2>Your organisation</h2>
        
            <div><label>Name</label> 
            <input type="hidden" v-model="organisation.id" />
            <input v-model="organisation.name" type="text" list="organisations" @input="organisationUpdated($event)" required> *
                <datalist id="organisations">
                    <option v-for="org in organisations" :data-value="org.o_uid" >{{org.o_name}}<span v-if="org.o_short"> ({{org.o_short}})</span></option>
                </datalist>
        
            </div>
            <div><label>Type</label>
            
                <select v-model="organisation.type" :disabled="organisation.id">
                    <option value="">---</option>
                    <option v-for="tp in types" :value="tp.t_id">{{ tp.t_name }}</option>
                </select>
            </div>
        </span>
        <h2>Your access right</h2>
         <template v-for="client, name in roles">
            <div v-if="name != 'global'"><h4>{{ client.title[lang] || name}}</h4>
                <div class="input-role" v-for="role in client.roles">
                    <label :title="role.description.en">{{ role.title.en || role.name }}</label> 
                    <span v-if="user.roles && user.roles[name] &&user.roles[name].indexOf(role.name) >= 0" style="color:green;" >
                      <font-awesome-icon icon="fa-solid fa-check" /> 
                    </span>
                    <span v-else-if="role.status === 'WAITING'" title="Request being processed">
                        <font-awesome-icon icon="fa-solid fa-clock" ></font-awesome-icon>
                    </span>
                    <span v-else-if="role.status === 'REJECTED'" title="Your request has been rejected.">
                        <font-awesome icon="fa-solid fa-close"></font-awesome>
                    </span>
                   
                    <span v-else><input type="checkbox" v-model="checkedRoles" :value="name + '.' + role.name" /></span>
                </div>
            </div>

        </template>
        
        <h2>Motivation for the moderator</h2>
        <textarea v-model="message"></textarea>
       
        <div style="width:600px;text-align:right;margin-top:20px;"><button :disabled="disabled" @click="accessRequest()">Send</button></div>
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
        withInstitution: {
            type:Boolean,
            default: true
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
            asking: false,
            success: null,
            error: null
        }
    },
    computed: {
        disabled () {
            if (this.checkedRoles.length === 0) {
                return true;
            }
            if (!this.organisation.name || !this.organisation.type) {
                return true
            }
            return false
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
                email: this.user.email,
                app: this.app,
                domain: location.href,
                message: this.message,
                role: this.checkedRoles,
                lang: this.lang
            }
            // if (this.organisation.id) {
            //     postdata['organizationId'] = this.organisation.id
            // } else {
            //     postdata['organization'] = this.organisation.name
            //     postdata['organizationType'] = this.organisation.types
            // }
            var fdata = new URLSearchParams(postdata)
            var url =  this.api.replace('/api', '/requests/ask')
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
                if (json.success) {
                    this.success = 'Your request has been successfully recorded.<br />An email has been sent to you. '
                }
                console.log(json)
                if (json.success && json.roles) {
                    var roles = this.roles
                    json.roles.forEach(function (role) {
                        var tab = role.split('.')
                        console.log(tab)
                        var index = roles[tab[0]].roles.findIndex(r => r.name === tab[1])
                        roles[tab[0]].roles[index].status = 'WAITING'
                      
                        // client.setRoleStatus(role, 'WAITING')
                    })
                    if (json.organizationId) {
                        this.organisation.id = json.organizationId
                    }
                    this.roles = roles
                    this.checkedRoles = []
                    this.message = null
                }
                if (json.error) {
                    this.error = 'AN ERROR OCCURRED: <br />' + json.error
                }
            }).catch((error) => {
                console.log(error)
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
                for(var client in this.roles) {
                    if (client  !== 'global') {
                        this.roles[client].roles.forEach((role) => {
                            console.log(role)
                        })
                    }
                }

            })
        },
        resetMessage() {
            this.error = null
            this.success = null
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
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-spin {
  font-size:50px;
  -webkit-animation: fa-spin 2s linear infinite;
  animation: fa-spin 2s linear infinite;
}


</style>
<style scoped>
.access h1,h2,h3,h4 {
    color:darkred;
}
.access input[type="text"] {
    min-width:250px;
}
.access input[type="checkbox"] {
    cursor:pointer;
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
div.spinner {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    padding-left:calc(50% - 25px);
   display: flex;
   
    align-items: center;
    background:rgba(0,0,0,0.2);
}
div.spinner > div {
    height:60px;
    text-align:center;
}
div.message {
    position: fixed;
    top:calc(50vh - 100px );
    margin-left:200px;
    max-width:500px;
    width: fit-content;
    padding:30px;
    background: white;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
}
div.message.success {
    color:darkgreen;
}
div.message.error {
    color:darkred;
}
</style>
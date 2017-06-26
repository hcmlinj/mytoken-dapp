<template>
    <div>
        <ol class="breadcrumb">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li class="active">TokenFactory</li>
        </ol>
    
        <div class="panel panel-default">
            <div class="panel-heading">Create Token</div>
            <div class="panel-body">
                <form enctype="multipart/form-data">
                    <div class="form-group">
                        <label>owner</label>
                        <select v-model="owner" class="form-control">
                            <option value="" disabled>Please select owner</option>
                            <option v-for="account in accounts" :key="account.value" :value="account.value">{{account.text}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>name</label>
                        <input type="text" class="form-control" placeholder="name" v-model="name">
                    </div>
                    <div class="form-group">
                        <label>symbol</label>
                        <input type="text" class="form-control" placeholder="symbol" v-model="symbol">
                    </div>
                    <div class="form-group">
                        <label>decimals</label>
                        <input type="number" class="form-control" placeholder="decimals" v-model="decimals">
                    </div>
                    <div class="form-group">
                        <label>totalSupply</label>
                        <input type="number" class="form-control" placeholder="totalSupply" v-model="totalSupply">
                    </div>
                    <div class="form-group">
                        <label>image</label>
                        <input type="file" class="form-control" placeholder="image" @change="selected">
                    </div>
                    <button type="button" class="btn btn-default" @click="create">Create</button>
                    <pre>{{created}}</pre>
                </form>
            </div>
        </div>
    
        <div class="panel panel-default">
            <div class="panel-heading">List Token</div>
            <div class="panel-body">
                <button type="button" class="btn btn-default" @click="list">List</button>
                <div class="form-control">{{tokens.length}} tokens.</div>
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>image</th>
                            <th>owner / token</th>
                            <th>name</th>
                            <th>symbol</th>
                            <th>decimals</th>
                            <th>totalSupply</th>
                            <th>timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(token, i) in tokens" :key="i">
                            <td>{{i + 1}}</td>
                            <td>
                                <a :href="token[6]" target="_blank">
                                    <img class="img-circle" :src="token[6]" alt="" width="100" height="100">
                                </a>
                            </td>
                            <td>
                                {{token[0]}}
                                <br>
                                <router-link :to="`/my-token/${token[1]}`">{{token[1]}}</router-link>
                            </td>
                            <td>{{token[2]}}</td>
                            <td>{{token[3]}}</td>
                            <td>{{token[4]}}</td>
                            <td>{{token[5]}}</td>
                            <td>{{new Date(token[7] * 1000).toLocaleString()}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
        <Event eventName="TokenCreated" contractName="TokenFactory"></Event>
    </div>
</template>

<script>
import axios from 'axios'

import Event from '@/components/Event.vue'

export default {
    components: { Event },
    data() {
        return {
            accounts: [],
            owner: '',
            name: '',
            symbol: '',
            decimals: 0,
            totalSupply: 10000,
            created: '',
            tokens: [],
            image: {}
        }
    },
    methods: {
        create(e) {
            const formData = new FormData()

            formData.append('owner', this.owner)
            formData.append('name', this.name)
            formData.append('symbol', this.symbol)
            formData.append('decimals', this.decimals)
            formData.append('totalSupply', this.totalSupply)
            formData.append('image', this.image)

            axios
                .post('/token-factory/create', formData)
                .then(res => this.created = res.data)
                .catch(err => this.created = err.response.data)
        },
        list() {
            this.tokens = []
            axios
                .get('/token-factory/list')
                .then(res => this.tokens = res.data)
                .catch(err => this.tokens = err.response.data)
        },
        selected(e) {
            this.image = e.target.files[0]
        }
    },
    created() {
        axios.get('/eth/info').then(res =>
            this.accounts = res.data.accounts.map((account, i) =>
                ({ text: `${i + 1}：${account.address}`, value: account.address })
            )
        ).catch(err => this.account = [err.response.data])
    }
}
</script>

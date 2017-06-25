<template>
    <div>
        <ol class="breadcrumb">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li class="active">MyToken</li>
            <li class="active">{{ token }}</li>
        </ol>
    
        <div class="panel panel-default">
            <div class="panel-heading">Info</div>
            <div class="panel-body">
                <div class="form-group">
                    <label>token</label>
                    <input type="text" class="form-control" placeholder="token" v-model="token">
                </div>
                <button type="button" class="btn btn-default" @click="info">Info</button>
                <pre>{{tokenInfo}}</pre>
            </div>
        </div>
    
        <div class="panel panel-default">
            <div class="panel-heading">Balance</div>
            <div class="panel-body">
                <div class="form-group">
                    <label>owner</label>
                    <select v-model="owner" class="form-control">
                        <option value="" disabled>Please select owner</option>
                        <option v-for="account in accounts" :key="account.value" :value="account.value">{{account.text}}</option>
                    </select>
                </div>
                <button type="button" class="btn btn-default" @click="balanceOf">Balance Of</button>
                <pre>{{balance}}</pre>
            </div>
        </div>
    
        <div class="panel panel-default">
            <div class="panel-heading">Transfer</div>
            <div class="panel-body">
                <div class="form-group">
                    <label>owner</label>
                    <select v-model="owner" class="form-control">
                        <option value="" disabled>Please select owner</option>
                        <option v-for="account in accounts" :key="account.value" :value="account.value">{{account.text}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>to</label>
                    <select v-model="to" class="form-control">
                        <option value="" disabled>Please select to</option>
                        <option v-for="account in accounts" :key="account.value" :value="account.value">{{account.text}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>amount</label>
                    <input type="number" class="form-control" placeholder="amount" v-model="amount">
                </div>
                <button type="button" class="btn btn-default" @click="transfer">Transfer</button>
                <pre>{{transferHash}}</pre>
            </div>
        </div>
    
        <div class="panel panel-default">
            <div class="panel-heading">Approve</div>
            <div class="panel-body">
                <div class="form-group">
                    <label>owner</label>
                    <select v-model="owner" class="form-control">
                        <option value="" disabled>Please select owner</option>
                        <option v-for="account in accounts" :key="account.value" :value="account.value">{{account.text}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>to</label>
                    <select v-model="to" class="form-control">
                        <option value="" disabled>Please select spender</option>
                        <option v-for="account in accounts" :key="account.value" :value="account.value">{{account.text}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>amount</label>
                    <input type="number" class="form-control" placeholder="amount" v-model="amount">
                </div>
                <button type="button" class="btn btn-default" @click="approve">Approve</button>
                <pre>{{approveHash}}</pre>
            </div>
        </div>
    
        <div class="panel panel-default">
            <div class="panel-heading">Allowance</div>
            <div class="panel-body">
                <div class="form-group">
                    <label>owner</label>
                    <select v-model="owner" class="form-control">
                        <option value="" disabled>Please select owner</option>
                        <option v-for="account in accounts" :key="account.value" :value="account.value">{{account.text}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>to</label>
                    <select v-model="to" class="form-control">
                        <option value="" disabled>Please select spender</option>
                        <option v-for="account in accounts" :key="account.value" :value="account.value">{{account.text}}</option>
                    </select>
                </div>
                <button type="button" class="btn btn-default" @click="allowance">Allowance</button>
                <pre>{{allowanceAmount}}</pre>
            </div>
        </div>
    
        <div class="panel panel-default">
            <div class="panel-heading">Transfer From</div>
            <div class="panel-body">
                <div class="form-group">
                    <label>owner</label>
                    <select v-model="owner" class="form-control">
                        <option value="" disabled>Please select owner</option>
                        <option v-for="account in accounts" :key="account.value" :value="account.value">{{account.text}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>to</label>
                    <select v-model="to" class="form-control">
                        <option value="" disabled>Please select to</option>
                        <option v-for="account in accounts" :key="account.value" :value="account.value">{{account.text}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>amount</label>
                    <input type="number" class="form-control" placeholder="amount" v-model="amount">
                </div>
                <button type="button" class="btn btn-default" @click="transferFrom">Transfer From</button>
                <pre>{{transferFromHash}}</pre>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['tokenProp'],
    data() {
        return {
            token: this.tokenProp,
            accounts: [],
            tokenInfo: {},
            owner: '',
            balance: '',
            to: '',
            amount: 0,
            transferHash: '',
            approveHash: '',
            allowanceAmount: '',
            transferFromHash: ''
        }
    },
    methods: {
        info() {
            axios
                .get(`/my-token/info/${this.token}`)
                .then(res => this.tokenInfo = res.data)
                .catch(err => this.tokenInfo = err.response.data)
        },
        balanceOf() {
            axios
                .post('/my-token/balance', this.$data)
                .then(res => this.balance = res.data)
                .catch(err => this.balance = err.response.data)
        },
        transfer() {
            axios
                .post('/my-token/transfer', this.$data)
                .then(res => this.transferHash = res.data)
                .catch(err => this.transferHash = err.response.data)
        },
        approve() {
            axios
                .post('/my-token/approve', this.$data)
                .then(res => this.approveHash = res.data)
                .catch(err => this.approveHash = err.response.data)
        },
        allowance() {
            axios
                .post('/my-token/allowance', this.$data)
                .then(res => this.allowanceAmount = res.data)
                .catch(err => this.allowanceAmount = err.response.data)
        },
        transferFrom() {
            axios
                .post('/my-token/transfer-from', this.$data)
                .then(res => this.transferFromHash = res.data)
                .catch(err => this.transferFromHash = err.response.data)
        }
    },
    created() {
        axios.get('/eth/info').then(res =>
            this.accounts = res.data.accounts.map((account, i) =>
                ({ text: `${i + 1}：${account.address}`, value: account.address })
            )
        ).catch(err => this.account = [err.response.data])
    },
}
</script>

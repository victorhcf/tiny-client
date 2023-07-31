<template>
    <div class="container">

        <h1>Welcome to Url Shortener</h1>
        <form v-on:submit.prevent="submitForm" style="width: 100%;">
            <div  style="display: flex; margin: 0 auto; width: 100%; justify-content: center; margin-bottom: 1rem;">
            <input
                type="text"
                ref="newUrlInput"
                v-model="formData.originalUrl"
                placeholder="type url here" 
            />
            <br/>
            <button type="submit">Submit Form</button>
            <br/><br/>
            </div>
            
            <div v-if="error" class="classerror">
                {{error}}
            </div>
        </form>

        

        
        <h1 class="text-center">Url List</h1>
        <table style="width: 100%">
        <thead>
            <tr>
                <th> Original Url</th>
                <th> Short Url</th>
                <th> Expiration Date</th>
            </tr>
            
        </thead>
        <tbody>
            <tr v-for="url in urls" v-bind:key="url.id">
                <td> {{ url.originalUrl }}</td>
                <td> 
                    <!-- <a target="_blank" href="${url.shortUrl}">{{url.shortUrl }}</a> -->
                    <a target="_blank" :href="'http://localhost:8080/' + url.shortUrl"> {{ url.shortUrl }} </a>
                </td>

                <td> {{formateDate(url.expirationDate)}}</td>
            </tr>
        </tbody>
        </table>

    </div>    
    
</template>

<script>
import UrlService from '../services/UrlService';
import axios from 'axios'
const URL_POST_GENERATE = 'http://localhost:8080/generate'

export default {
    name: 'UrlsList',
    data(){
        return {
            urls: [],
            formData: {
                originalUrl:''
            },
            error: null
            
        }
    },
    methods: {
        getUrls(){
            UrlService.getUrls().then((response) => {
                this.urls = response.data;   
                console.log(this.urls);
            });
        },

        formateDate(date){
            var dateObj = new Date(date);
            return dateObj.toLocaleDateString('en-us') + ' ' + dateObj.toLocaleTimeString('en-US');
        },

        submitForm(){
            console.log('SUBMIT FORM !!', this.formData);
            this.error = null;

            axios.post(URL_POST_GENERATE, this.formData).then(() => { 
                    this.getUrls();
                 })
                 .catch((error) => {
                    this.error = error.response?.data.error || 'Error please try again'
                 })
        }


    },
    created() {
        this.getUrls();
    }
}


</script>

<style scoped>
    .classerror {
        border: 1px solid rgba(255,0,0,1);
        background-color: rgba(255,0,0,0.8);
        border-radius: 8px;
        max-width: 300px;
        padding: .5rem;
        margin: 0 auto;
        color: white;

    }
</style>

<template>
    <div class="container my-4">
        <div class="row">
            <div class="offset-0 offset-md-3 col-12 col-md-6">
                <h1>Signup</h1>
                <hr />
                <form method="POST" @submit.prevent="signup()" >

                     <div class="form-group">
                        <label for="name">Enter Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="John Doe"
                            class="form-control"
                            v-model="form.name"
                            @blur="$v.form.name.$touch()"
                            :class="{
                            'is-invalid': shouldAppendErrorClass($v.form.name),
                            'is-valid': shouldAppendValidClass($v.form.name),
                            }" />

                        <div v-if="$v.form.name.$error">
                            <div v-if="!$v.form.name.required" class="text-danger">
                            <small>
                                This field is required
                            </small>
                            </div>
                        </div>
                        </div>
                        <div class="form-group">
                        <label for="user-type">User Type(<small>admin/general</small>)</label>
                        <input
                            type="text"
                            name="user-type"
                            id="user-type"
                            placeholder="admin"
                            class="form-control"
                            v-model="form.userType"
                            @blur="$v.form.userType.$touch()"
                            :class="{
                            'is-invalid': shouldAppendErrorClass($v.form.userType),
                            'is-valid': shouldAppendValidClass($v.form.userType),
                            }" />

                        <div v-if="$v.form.userType.$error">
                            <div v-if="!$v.form.userType.required" class="text-danger">
                            <small>
                                This field is required
                            </small>
                            </div>
                        </div>
                        </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="john.doe@example.com"
                            v-model="form.email"
                            @blur="$v.form.email.$touch()"
                            :class="{
                                'is-invalid': shouldAppendErrorClass($v.form.email),
                                'is-valid': shouldAppendValidClass($v.form.email)
                            }"
                        />
                        <div v-if="$v.form.email.$error">
                            <div v-if="!$v.form.email.required" class="error-message">
                                <small>The email field is required</small>
                            </div>
                            <div v-if="!$v.form.email.email" class="error-message">
                                <small>Invalid email address</small>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            autocomplete="off"
                            class="form-control"
                            name="password"
                            id="password"
                            v-model="form.password"
                            @blur="$v.form.password.$touch()"
                            :class="{
                                'is-invalid': shouldAppendErrorClass($v.form.password),
                                'is-valid': shouldAppendValidClass($v.form.password)
                            }"
                        />
                        <div v-if="$v.form.password.$error">
                            <div v-if="!$v.form.password.required" class="error-message">
                                <small>The password field is required</small>
                            </div>
                            <div v-if="!$v.form.password.minLength" class="error-message">
                                <small>The password must have at least 8 characters</small>
                            </div>
                            <div v-if="!$v.form.password.containsUppercase" class="error-message">
                                <small>The password must have at least 1 uppercase character</small>
                            </div>
                            <div v-if="!$v.form.password.containsLowercase" class="error-message">
                                <small>The password must have at least 1 lowercase character</small>
                            </div>
                            <div v-if="!$v.form.password.containsNumber" class="error-message">
                                <small>The password must have at least 1 digit</small>
                            </div>
                            <div v-if="!$v.form.password.containsSpecial" class="error-message">
                                <small>The password must have at least 1 special character</small>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" :disabled="$v.form.$invalid">Signup</button>
                        <!-- <app-spinner v-if="processing" /> -->
                    </div>
                     <div>
                        <small> Allready register...<router-link to="/login">Login here</router-link></small>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { email, required, minLength } from 'vuelidate/lib/validators'
    import { registerUser } from '@/services/signup';
   //import config from '@/config';
    export default {
        name: 'AppSignUp',
        data() {
            return {
                processing: false,
                form: {
                    name: '',
                    userType: '',
                    email: '',
                    password: ''
                }
            };
        },
        validations: {
            form: {
                name: {
                    required
                },
                 userType: {
                    required
                },
                email: {
                    email,
                    required
                },
                password: {
                    required,
                    minLength: minLength( 8 ),
                    containsUppercase: function(value) {
                        return /[A-Z]/.test(value)
                    },
                    containsLowercase: function(value) {
                        return /[a-z]/.test(value)
                    },
                    containsNumber: function(value) {
                        return /[0-9]/.test(value)
                    },
                    containsSpecial: function(value) {
                        return /[#?!@$%^&*-]/.test(value)
                    }
                }
            }
        },
         methods: {
           signup(){
            registerUser({ name: this.form.name, email: this.form.email, password: this.form.password, role: this.form.userType  })
                .then( () =>  this.$router.push( { name: 'login' } )  )
                .catch( error => {
                    Vue.$toast.open({
                        message: error.response.data.message,
                       // duration: config.toastDuration,
                        type: 'error'
                    });
                });    
        },
            shouldAppendValidClass( field ) {
                console.log( field );
                return !field.$invalid && field.$model && field.$dirty;
            },
            shouldAppendErrorClass( field ) {
                return field.$error;
            }
        }
    }
</script>

<style scoped>
</style>

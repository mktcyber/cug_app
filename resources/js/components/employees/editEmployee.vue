<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">Edit Employee</div>
            <div class="panel-body">
                <form v-on:submit.prevent="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Employee Id</label>
                            <input type="text" v-model="employee.Employee_id" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Employee Name</label>
                            <input type="text" v-model="employee.Employee_name" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Employee CUG Number</label>
                            <input type="text" v-model="employee.Employee_cug_number" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            app.Employee_id = id;
            axios.get('/api/v1/employees/' + id)
                .then(function (resp) {
                    app.employee = resp.data;
                })
                .catch(function () {
                    alert("Could not load your employee")
                });
        },
        data: function () {
            return {
                Employee_id: null,
                employee: {
                    Employee_name: '',
                    Employee_cug_number:'',
                }
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newEmployee = app.employee;
                axios.patch('/api/v1/employees/' + app.Employee_id, newEmployee)
                    .then(function (resp) {
                        app.$router.replace('/');
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your employee");
                    });
            }
        }
    }
</script>
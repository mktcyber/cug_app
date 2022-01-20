<template>
<div>
	<div class="form-group">
		<router-link :to="{name: 'createEmployee'}" class="btn btn-success">Create new Employee</router-link>
	</div>
	<div class="panel panel-default">
		<div class="panel-body">
			<table class="table table-bordered table-striped">
			<thead>
				<tr>
				  <th>Employee ID</th>
				  <th>Employee Name</th>
				  <th>Employee CUG Number</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="employee, index in employees" :key="index">
                    <td>{{ employee.Employee_id }}</td>
                    <td>{{ employee.Employee_name }}</td>
                    <td>{{ employee.Employee_cug_number }}</td>
                    <td>
                        <router-link :to="{name: 'editEmployee', params: {id: employee.id}}" class="btn btn-xs btn-default">
                            Edit
                        </router-link>
                        <a href="#" class="btn btn-xs btn-danger" v-on:click="deleteEntry(employee.Employee_id, index)">
                            Delete
                        </a>
                    </td>
                </tr>
			</tbody>
			</table>
		</div>
	</div>
</div>
</template>

<script>
    export default {
        data: function () {
            return {
                employees: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/employees')
                .then(function (resp) {
                    app.employees = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load employees");
                });
        },
        methods: {
            deleteEntry(Employee_id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/employees/' + Employee_id)
                        .then(function (resp) {
                            app.employees.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete employee");
                        });
                }
            }
        }
    }
</script>
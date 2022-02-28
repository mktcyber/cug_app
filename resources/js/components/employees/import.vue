<template>
  <div>
    <h4>Implort Employees</h4>
    <code>{{ rows }}</code>
    <vue-csv-import url="/api/employees" v-model="rows" :map-fields="fields"></vue-csv-import>
  </div>
</template>

<script>
import { VueCsvImport } from "vue-csv-import";

export default {
  middleware: "auth",
  components: { VueCsvImport },
  data() {
    return {
      rows: null,
      fields: [
        "Employee_id",
        "Employee name",
        "Employee_cug_number"
      ]
    };
  }
};
</script>

<template>
  <div>
    <base-layout>
      <table class="container table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Check In Time</th>
            <th scope="col">Check Out Time</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Present</td>
            <td>
              <button class="btn badge bg-success">Edit</button>
              <button class="btn badge bg-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from "../layout/BaseLayout.vue";
export default {
  name: "Dashboard",
  components: {
    BaseLayout,
  },
};
</script>
<template>
  <div>
    <base-layout>
      <div class="container">
        <div class="mt-4 p-5 bg-black text-white rounded">
          <h1>Manage Attendance of Company</h1>
          <p>Please sign in with your username and password.</p>
          <fieldset>
            <legend>Login</legend>
            <hr />
            <form @submit.prevent="submitAttendance">
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Username"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-success">Login</button>
            </form>
          </fieldset>
        </div>
      </div>

      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Submit Attendance</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button type="button" class="btn btn-success">Login</button>
                <div v-show="isLogin">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="checkin"
                      name="attendance"
                      value="checkin"
                    />Check In
                    <label class="form-check-label" for="checkin"></label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="checkout"
                      name="attendance"
                      value="checkout"
                    />Check Out
                    <label class="form-check-label" for="checkout"></label>
                  </div>
                  <div class="mb-3">
                    <label for="remarks" class="form-label">Remarks</label>
                    <textarea
                      class="form-control"
                      id="remarks"
                      placeholder="Remarks"
                    >
                    </textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from "../layout/BaseLayout.vue";
export default {
  name: "Home",
  data() {
    return {
      isLogin: false,
    };
  },
  components: {
    BaseLayout,
  },
  methods: {
    submitAttendance(e) {
      this.isLogin == true;
      // this.$router.push({ name: "dashboard" });

      e.preventDefault();
    },
  },
};
</script>
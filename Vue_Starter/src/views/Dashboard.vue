<template>
  <div class="animated fadeIn">
    <ul id="example-1">
      <li v-for="item in users">
        {{ item.name }}
      </li>
</ul>
  </div>
</template>

<script>
import Axios from 'axios'
var data = { users: [] }
export default {
  name: 'dashboard',
  data () {
    return data
  },
  mounted () {
    Axios.get('/api/hello/users')
      .then(response => {
        data.users = response.data.content
      })
  }
}
</script>

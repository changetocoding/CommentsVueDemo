<template>
  <div>
    <button @click="lodashTest">{{btnName}}</button>
    <button :class="myClass" @click="changeTitle">ChangeTitle</button>
    <Avatar :username="headingName + ' Igloo'"></Avatar>
    <h2>Your name is {{headingName}}</h2>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import lodash from 'lodash'
import Avatar from 'vue-avatar'

export default {
  name: 'App',
  components: {
    Avatar,
  },
  data() {
    return {
      btnName: "Lodash Other",
      myClass: "btn-red"
    }
  },
  computed: {
    headingName() {
      return this.$route.params.name
    }
  },
  methods: {
    lodashTest() {
      let [oddArr, evenArr ] = lodash.partition([1, 2, 3, 4], n => n === 3);
      console.log('three', oddArr);
      console.log('rest', evenArr);

      this.btnName = "You Clicked Me"
    },
    changeTitle(){
      // this.headingName = "New Heading Name"
      this.myClass = "btn-green"
    }
  },
}
</script>

<style>


</style>

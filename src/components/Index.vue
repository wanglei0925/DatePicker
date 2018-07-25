<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <date-picker></date-picker>
  </div>
</template>

<script>
import DatePicker from "./DatePicker/DatePicker";
export default {
  data () {
    return {
      msg: '我的时间选择器'
    }
  },
  components:{
    DatePicker,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>

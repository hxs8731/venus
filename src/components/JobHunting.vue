<template>
<div>
  <navigator-bar />
  <search-bar />
  <h1>求职学院</h1>
</div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import NavigatorBar from '@/components/NavigatorBar'
export default {
  name: 'JobHunting',
  components: {
    NavigatorBar,
    SearchBar
  },
  data() {
    return {
    }
  }
}
</script>

<style>
</style>

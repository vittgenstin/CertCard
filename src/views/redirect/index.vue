<script>
export default{
  created(){
    const {params,query} = this.$route
    const {path} = params
    this.$route.replace({path:'/' + path,query})
  },
  render:function(h){
    return h() //avoid warning message
  }
}
</script>
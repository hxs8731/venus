<template>
    <div class="modal fade" :id="modelId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">{{ modelTitle }}</h4>
                </div>
                <div class="modal-body">
                    <div class="modal-main" v-for="letterData in modelData">
                      <p class="modal-subtitle">{{ letterData.letter }}</p>
                      <button v-for="info in letterData.data" class="btn btn-default" data-dismiss="modal" data-target="#myModal" @click="selectInfo(selectedInfos, info, singleSelect)"> {{ info.city }} </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "../assets/bootstrap.min.js";
export default {
  name: 'ModelView',
  props: ['modelTitle', 'modelData', 'modelId', 'selectedInfos', 'singleSelect'],
  data() {
      return {
      }
  },
  methods: {
      selectInfo(infos, info, single) {
          console.log("modal view selectInfo = " + JSON.stringify(info) + ", array = " + JSON.stringify(infos) + ", single = " + single);
          this.$emit('modal-selected', {infos:infos, info:info, single:single});
      }
  }
}
</script>
<style>
.modal-body {
    background: #FCFDFE;
}
.modal-main {
    margin-bottom: 10px;
}
.modal-subtitle {
    background: #e3f5fc;
    padding-left: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
    border-top: 1px dotted #BCBCBC;
}

</style>

<template>
    <div class="modal fade" :id="modelId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">{{ formInfos.title }}</h4>
                </div>
                <div class="modal-body">
                    <div class="modal-main">
                      <form>
                            <p v-for="(info, index) in formInfos.data" class="form-inline">
                                <label v-show="info.label">{{info.label}}: &nbsp;&nbsp;</label>
                                <input v-if="'input' === info.form_type" :type="info.type" v-model="info.value" :name="info.name" class="form-control" />
                                <label class="checkbox-inline" v-for="(radioInfo, rindex) in info.radioInfos">
                                    <input type="radio" :name="radioInfo.name" :id="radioInfo.id" v-model="info.value" :value="radioInfo.radio_tip">&nbsp;&nbsp;{{radioInfo.radio_tip}}
                                </label>
                                <datepicker v-for="(pickerInfo, pindex) in info.datePickers" v-model="pickerInfo.value" class="form-control" :key="pickerInfo.id" @selected="selectDate" @closed="datepickerClosedFunction(index, pindex)" :placeholder="pickerInfo.placeholder" language="zh" format="yyyy-MM-dd" />
                            </p>
                    </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="positiveHandle()">确定</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal" @click="nagativeHandle()">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "../assets/bootstrap.min.js";
import Datepicker from 'vuejs-datepicker';
export default {
  name: 'FormModelView',
  components: {
    Datepicker
  },
  props: ['modelTitle', 'modelData', 'modelId', 'formInfos'],
  data() {
      return {
          selectedPickerDate: ""
      }
  },
  methods: {
      positiveHandle() {
          this.$emit('modal-positive', {infos: this.formInfos});
      },

      nagativeHandle() {
          this.$emit('modal-nagative', {infos: null});
      },

      selectDate(value) {
          this.selectedPickerDate = value;
          console.log(`selectDate ==> ${value}`);
        
      },

      datepickerClosedFunction(position, index) {
          console.log(`datepickerClosedFunction ==> ${this.selectedPickerDate}, ${position}, ${index}`);
          if (!this.selectedPickerDate || "" === this.selectedPickerDate) {
              console.log(`not got the date value, something error.`);
              return;
          }
          let infos = this.formInfos.data;
          let info = infos[position];
          let pickerInfo = this.formInfos.data[position].datePickers[index];
          pickerInfo.value = this.formatDate(this.selectedPickerDate);
          console.log(`datepickerClosedFunction ==> ${JSON.stringify(infos)}, ${JSON.stringify(info)}, ${JSON.stringify(pickerInfo)}`);
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

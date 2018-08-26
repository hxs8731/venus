<template>
  <div class='tinymce'>
    <!-- <h1>tinymce</h1> -->
    <editor :id="'tinymce' + editId" v-model='tinymceContent' :init='init'></editor>
    <!-- <div v-html='tinymceContent'></div> -->
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/modern/theme';
import Editor from '@tinymce/tinymce-vue';
import 'tinymce/plugins/image';
import 'tinymce/plugins/link';
import 'tinymce/plugins/code';
import 'tinymce/plugins/table';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/textcolor';
// import {uploadRichImg} from '@/api/common';
export default {
  name: 'tinymceEditor',
  props:['editId'],
  data () {
    return {
      tinymceContent: '请输入内容',
      init: {
        language_url: '/static/tinymce/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/static/tinymce/skins/lightgray',
        height: 300,
        imageupload_url: '/static/tinymce/fileUpload',
        images_upload_handler: (blobInfo, success, failure) => {
          this.handleImgUpload(blobInfo, success, failure);
        },
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false
      }
    }
  },
  mounted () {
    tinymce.init({});
  },
  methods: {
    handleImgUpload: function(blobInfo, success, failure) {
      console.log(`handleImgUpload FIXME`);
      // let formdata = new FormData();
      // formdata.set('upload_file', blobInfo.blob());
      // this.http.post('/api/upload', formdata).then(res => {
      //   success(res.data.data.src);
      // }).catch(res => {
      //   failure('error');
      // });
    },
  },
  watch: {
    tinymceContent: function(val, oldval) {
      // console.log(`tinymceContent change ${val}, ${oldval}, ${this.editId}`);
      this.$emit("edit-content-change", val, oldval);
    }
  },
  components: {Editor}
}
</script>

        
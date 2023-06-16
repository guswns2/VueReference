<template>
  <el-dialog @close="onClose" title="Shipping address" :visible.sync="dialogFormVisible">
    <el-form v-if="dialogFormVisible" :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai"></el-option>
          <el-option label="Zone No.2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogFormVisible = false"
        >Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: 
  {
    dialogData:{
         type:String,
         default() {
            return "";
         }
      },
    },
  data() {
    return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: this.dialogData,
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    }
  },
  methods: {
    onClose() {
      this.$emit("closed", this.form.name);
    }
  }
};
</script>

<style>
</style>
<template>
  <div>
    <h1>Vuex</h1>
    <hr>

    <h4># 정의</h4>
    <p>Vue.js 애플리케이션에 대한 상태관리 패턴 + 라이브러리</p>
    <p>모든 컴포넌트에 대한 중앙 집중식 저장소 역할</p>
    <p>store.js에서 공용으로 사용되는 모든 데이터 관리</p>
    <p>데이터 흐름 파악과 상태관리 용이</p>
    <hr>
    <br>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>사전 설정</span>
      </div>
      <div class="text item">
        Vuex 설치
      </div>
      <div class="exbox item">
        <p>npm install vuex@3.6.2</p>
        <p>vue 2 사용 시 vuex 3.x.x 사용해야함</p>
      </div>
      <div class="text item">
        store.js 파일 생성
      </div>
      <div class="exbox item">
        <div class="code">
          <pre>
          import Vue from "vue";
          import Vuex from "vuex";

          Vue.use(Vuex);

          export default new Vuex.Store({
              state: {},
              getters: {},
              mutations: {},
              actions: {}
          })  
          </pre>
        </div>
      </div>
      <div class="text item">  
        <p>루트 인스턴스(main.js)에서 mount</p>
      </div>
      <div class="exbox item">
        <div class="code">
          <pre>
          import store from '@/store/store.js';

          new Vue({
            store,
            render: h => h(App),
          }).$mount('#app')  
          </pre>
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>구조</span>
      </div>
      <div class="exbox item">
        <div class="code">
          <pre>
              export default new Vuex.Store({
                  state: {},
                  getters: {},
                  mutations: {},
                  actions: {}
              })  
          </pre>
        </div>
      </div>
      <div class="text item">
        <div style="width: 65%; margin: auto; text-align: left;">
          <ul>
            <li>state: 데이터 정의. mutation을 통해서만 변경 가능</li>
            <li>getters: 데이터 호출. coumputed 활용</li>
            <li>mutations: state 변경. 동기 처리. commit으로 실행시킴</li>
            <li>actions: mutation 실행. 비동기 처리. dispatch로 실행시킴</li>
          </ul>
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>예제</span>
      </div>
      <div class="exbox item">
        <p>{{ getStoreMsg }}</p>
        <el-input class="input" v-model="inputMsg"></el-input>
        <el-button type="primary" @click="changeMsg">Change</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AllVuex',
  data() {
    return {
      inputMsg: ''
    }
  },
  computed: {
    // getStoreMsg () {
    //   return this.$store.state.storeMsg;
    // }
    ...mapGetters(['getStoreMsg'])
  },
  methods: {
    changeMsg () {
      this.$store.dispatch('callMutation', {newStoreMsg: this.inputMsg})
    }
  }
}
</script>

<style>
.el-card {
    margin-bottom: 4%;
}

.item {
  font-size: 20px;
  color: #505050;
}

.exbox {
  background-color: whitesmoke;
  margin-top: 3%;
  margin-bottom: 3%;
  padding: 3%;
  border-radius: 10px;
}

.code {
  text-align: left; 
  margin: auto; 
  width: 60%;
  line-height: 30px;
}

.input {
  max-width: 30%;
}
</style>
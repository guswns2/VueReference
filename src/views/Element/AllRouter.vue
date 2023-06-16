<template>
  <div>
    <h1>라우터</h1>
    <hr />

    <h4># 정의</h4>
    <p>Vue는 SPA(Single Page Application) 이기 때문에 하나의 HTML로 구성</p>
    <p>다른 화면을 보여주기 위해 컴포넌트 경로를 매핑하고 라우터가 렌더링</p>
    <hr>
    <br>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>사전 설정</span>
      </div>
      <div class="text item">
        <p>Vue-router</p>
        <p>Vue에서 라우팅 기능을 구현할 수 있도록 지원하는 공식 라이브러리</p>
      </div>
      <div class="exbox item">
        <p>npm install vue-router@3 (Vue 2는 vue-router 사용 시 버전3 사용)</p>
      </div>
      <div class="text item">
        <p>router.js 파일 생성</p>
      </div>
      <div class="exbox item">
        <div class="code">
          <pre>
          import VueRouter from 'vue-router'
          Vue.use(VueRouter)

          const routes = [
            { path: '/foo', component: Foo },
            { path: '/bar', component: Bar }
          ]

          const router = new VueRouter({ \
            mode: 'hash',
            routes: routes
          });

          export default router;
          </pre>
        </div>
      </div>
      <div class="text item">  
        <p>router mode</p>
        <p>hash 모드는 URL이 변경될 때 페이지 리로드 없이 SPA 페이지 이동</p>
        <p>history 모드도 리로드 없이 URL 변경 가능</p>
        <p>history는 중간 경로로 직접 접속 시 404에러</p>
      </div>
      <br>
      <div class="text item">  
        <p>루트 인스턴스(main.js)에서 mount</p>
      </div>
      <div class="exbox item">
        <div class="code">
        <pre>
        import router from '@/router/router.js';  

        new Vue({
          router,
          render: h => h(App),
        }).$mount('#app')  
        </pre>
        </div>
      </div>
      <div class="text item">
        <p>라우팅한 화면을 띄워줄 컴포넌트 템플릿에<br>
        &lt;router-view&gt;&lt;/router-view&gt; 삽입</p>
        <p>this.$router 로 라우터 인스턴스에 접근 가능</p>
        <p>this.$route 로 라우트 객체에 접근 가능</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
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
  width: 55%;
  line-height: 30px;
}

.input {
  max-width: 30%;
}
</style>
<template>
  <div>
    <h1>컴포넌트</h1>
    <hr>

    <h4># 정의</h4>
    <p>화면을 구성하는 요소</p>
    <hr>

    <h4># 구조</h4>
    <p>
      name, components, data, computed와 같은 기본 속성 외에도, <br />
      컴포넌트가 생성되고 종료되기까지 발생하는 라이프사이클 훅에 해당하는
      메소드 존재
    </p>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>기본 구조</span>
      </div>
      <div class="exbox item">
        <div class="txtcode">
        <pre>
            &lt;template&gt; &lt;/template&gt; <br>
            &lt;script&gt; <br>
                export default { <br>
                    props: {}, <br>
                    name: '', <br>
                    components: {}, <br>
                    data() { <br>
                        return { <br>
                            sampleData: '' <br>
                            }; <br>
                        }, <br>
                    beforeCreate: {}, <br>
                    created: {}, <br>
                    mounted: {}, <br>
                    unmounted: {}, <br>
                    beforeDestroy: {}, <br>
                    destroyed: {}, <br>
                    methods: {}, <br>
                    computed: {}, <br>
                    watch: {}, <br>
                } <br>
            &lt;/script&gt;
        </pre>
        </div>
      </div>
      <div class="text item">
        <h3>&lt;기본 요소&gt;</h3>
        <p>props: 상위 컴포넌트에서 받아오는 데이터</p>
        <p>&lt;template&gt; : view에 해당하는 HTML 코드를 작성하는 영역</p>
        <p>name: 컴포넌트 이름. 등록하지 않아도 사용 가능</p>
        <p>components: 외부 컴포넌트 사용 시 해당 컴포넌트를 import 한 후, 이 곳에 배열로 등록</p>
        <p>data: HTML 코드와 JavaScript 코드에서 전역 변수로 사용하기 위해 선언하는 데이터<br>
          데이터 바인딩을 통해 화면(HTML)과 코드(JavaScript) 간 양방향 통신 가능<br> 
          데이터 프로퍼티에 정의된 변수는 this를 통해 접근</p>
        <p>methods: 컴포넌트 내에서 사용할 메소드 정의<br>
          이 곳에 작성된 메소드는 this를 통해 접근</p>
        <p>computed: 데이터 변화 감지 시 지정 함수 실행(Vuex)</p>
        <p>watch: computed 와 같은 역할 이지만 초기 할당 값이 한 번 이상 변해야 실행</p>
      </div>
      <br>
      <div class="text item">
        <h3>&lt;라이프사이클 훅&gt;</h3>
        <p>beforeCreate: 컴포넌트가 생성되기 전</p>
        <p>created: 컴포넌트가 생성되면 실행</p>
        <p>mounted: 템플릿에 작성한 HTML 코드가 렌더링 된 후 실행<br>
        보통 자식 컴포넌트의 mounted 가 부모 컴포넌트의 mounted 보다 먼저 실행</p>
        <p>unmounted: 컴포넌트를 빠져나갈 때 실행</p>
        <p>beforeDestroy: 컴포넌트 제거 직전 호출</p>
        <p>detroyed: 컴포넌트 제거 후 실행</p>
      </div>
    </el-card>
    <hr>

    <h4># 등록</h4>
    <p>
      컴포넌트는 전역, 지역 등록 모두 가능
    </p>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>전역 등록</span>
      </div>
      <div class="text item">
        <p>전역 컴포넌트를 등록하려면, Vue.component(tagName, options)를 사용</p>
        <p>등록되면, 컴포넌트는 인스턴스의 템플릿에서 &lt;my-component&gt;&lt;/my-component&gt;로 사용</p>
      </div>
      <div class="exbox item">
        <div class="code">
          <pre>
          // 등록
          Vue.component('my-component', {
            // 옵션
          })

          // 사용
          &lt;div id="example"&gt;
            &lt;my-component&gt;&lt;/my-component&gt;
          &lt;/div&gt;
          </pre>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>지역 등록</span>
      </div>
      <div class="text item">
        <p>컴포넌트를 components 인스턴스 옵션으로 등록함으로써 다른 인스턴스/컴포넌트의 범위에서만 사용 가능</p>
      </div>
      <div class="exbox item">
        <div>
        <pre style="text-align: left; margin: auto; width: 75%;">
        // 등록
        var Child = {
          template: '&lt;div&gt;사용자 정의 컴포넌트 입니다!&lt;/div&gt;'
        }

        // 사용
        new Vue({
          // ...
          components: {
          'my-component': Child
          }
        })
        </pre>
        </div>
      </div>
    </el-card>
    <hr>

    <h4># 데이터 통신</h4>
    <p>모든 컴포넌트는 자체 격리된 범위 존재</p>
    <p>하위 컴포넌트의 템플릿에서 상위 컴포넌트의 데이터 직접 참조 불가</p>
    <p>Props와 $emit을 사용하여 데이터 통신</p>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Props</span>
      </div>
      <div class="text item">
        <p>props 옵션을 사용하여 상위 컴포넌트에서 하위 컴포넌트로 전달</p>
      </div>
      <div class="exbox item">
        <el-input v-model="dialogData" style="max-width: 250px;"></el-input>
        <el-button type="primary" @click="dialogVisible">Open</el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>$emit</span>
      </div>
      <div class="text item">
        <p>$emit을 사용하여 하위 컴포넌트에서 상위 컴포넌트로 전달</p>
      </div>
      <div class="exbox item">
        <el-input v-model="emitData" style="max-width: 250px;"></el-input>
        <el-button type="primary" @click="dialogVisible">Open</el-button>
      </div>
    </el-card>

    <PropsDialog v-if="showPropsDialog" ref="dialog" :dialogData="dialogData" @closed="onClosed"></PropsDialog>
  </div>
</template>

<script>
import PropsDialog from "@/components/PropsDialog.vue"

export default {
  name: "AllComponent",
  components: {
    PropsDialog
  },
  data() {
    return {
        dialogData: 'good',
        emitData: '',
        showPropsDialog: false
    }
  },
  methods: {
    dialogVisible() {
        this.showPropsDialog = true;
        setTimeout(() => this.$refs.dialog.dialogFormVisible = true, 1)
    },
    onClosed(value) {
        this.showPropsDialog = false
        this.emitData = value
    }
  }
};
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
    width: 50%;
    line-height: 30px;
}
.txtcode {
    text-align: left; 
    margin: auto; 
    width: 50%;
    line-height: 15px;
}
</style>
<template>
  <div>
    <h1>디렉티브</h1>
    <hr>
    
    <h4># 정의</h4>
    <p>엘리먼트에게 특정한 지시를 내리는 속성</p>
    <hr>

    <h4># 데이터 바인딩</h4>
    <p>컴포넌트의 데이터와 UI의 요소를 연결하여 값을 최신화</p>
    <p>일반적으로 엘리멘트의 클래스 목록과 인라인 스타일을 조작하기 위해 사용</p>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>v-bind</span>
      </div>
      <div class="text item">
        <p>단방향 적용</p>
        <p>컴포넌트 데이터 변경 => UI 요소 내용 변경</p>
        <p>약어로 v-bind: 대신 : 사용</p>
      </div>
      <div class="exbox item">
        <span v-bind:title="msg1">
          마우스를 올리면 잠시 후 동적으로 바인딩 된 title을 볼 수 있습니다!
        </span>
      </div>
      <div class="text item">
        <p>클래스, 스타일 바인딩</p>
        <p>클래스, 스타일을 동적으로 토글하기 위해 v-bind:class, v-bind:style에 객체 전달</p>
      </div>
      <div class="exbox item">
        <p>v-bind:class="{ active: isActive }"</p>
        <p>active 라는 클래스의 존재 여부가 데이터 속성 isActive 의 true/false 여부에 의해 결정됨</p>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>v-model</span>
      </div>
      <div class="text item">
        <p>양방향 적용</p>
        <p>컴포넌트 데이터 변경 &lt;=&gt; Ui 요소 내용 변경</p>
      </div>
      <div class="exbox item">
        <div>
          <el-input placeholder="값을 입력해주세요" class="input" v-model="input1"></el-input>
        </div>
        <div>
          <el-input type="textarea" placeholder="값을 입력해주세요" class="input" v-model="input1"></el-input>
        </div>
      </div>
    </el-card>
    <hr>

    <h4># 이벤트 핸들러</h4>
    <p>DOM에서 이벤트를 감지하여 JavaScript를 실행하기 위해 사용</p>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>v-on</span>
      </div>
      <div class="text item">
        <p>이벤트가 발생하면 JavaScript를 실행하거나 메소드 호출</p>
        <p>약어로 v-on: 대신 @ 사용</p>
      </div>
      <div class="exbox item">
        <el-button type="primary" @click="msgOpen">Click</el-button>
      </div>
    </el-card>
    <hr>

    <h4># 조건부 렌더링</h4>
    <p>조건에 따라 블록을 렌더링하기 위해 사용</p>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>v-if</span>
      </div>
      <div class="text item">
        <p>조건에 따라 블록을 렌더링</p>
        <p>v-if, v-else-if, v-else 사용 가능</p>
        <p>그룹을 만들고 싶을 경우, wrapper 역할을 하는 template v-if 사용</p>
      </div>
      <div class="exbox item">
        <el-checkbox v-model="checked1">Check</el-checkbox>
        <transition name="fade">
          <div v-if="checked1">Show Box</div>
        </transition>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>v-show</span>
      </div>
      <div class="text item">
        <p>조건에 따라 블록을 디스플레이</p>
        <div>
          <dt>v-if 와의 차이점</dt>
          <dd>
            v-if는 조건을 만족하지 않으면 렌더링 되지 않아 DOM에 남아있지 않지만,<br> 
            v-show는 조건을 만족하지 않아도 항상 렌더링 되어 DOM에 남아있음<br>
            단순히 CSS display 속성을 토글하는 것
          </dd>
        </div>
      </div>
      <div class="exbox item">
        <el-checkbox v-model="checked2">Check</el-checkbox>
        <transition name="fade">
          <div v-show="checked2">Show Box</div>
        </transition>
      </div>
    </el-card>
    <hr>
    
    <h4># 리스트 렌더링</h4>
    <p>태그를 반복적으로 생성하여 렌더링 하기 위해 사용</p>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>v-for</span>
      </div>
      <div class="text item">
        <p>배열을 기반으로 리스트를 렌더링</p>
        <p>item in items 형태의 문법 필요</p>
        <p>items 는 원본 데이터 배열이고 item 은 반복되는 배열의 각 요소</p>
        <p>개별 DOM 노드들을 추적하고 기존 엘리먼트를 재사용, 재정렬하기 위해서 v-for의 각 항목들에 고유한 key 속성을 제공</p>
      </div>
      <div class="exbox item">
        <div style="justify-items: center; ">
          <el-carousel style="max-width:500px; margin: auto;">
            <el-carousel-item v-for="(n, index) in 3" :key="n">
              <h1>{{ n }} {{ index }}</h1>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="text item">
        <p>v-for를 사용하여 객체의 속성도 반복 가능</p>
      </div>
      <div class="exbox item">
        <div class="code" style="width: 55%;">
          <pre>
            object1: {
              title: 'How to do lists in Vue', 
              author: 'Jang HyeonJun',
              publishedAt: '2023-06-07's
            }
          </pre>
        </div>
        <div style="width: 35%; margin: auto;">
          <ul id="v-for-object" class="demo">
            <li v-for="value in object1" :key="value">
              {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
    name: 'AllDirective',
    data() {
      return {
        msg1: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다.',
        msg2: '메시지 이벤트 호출',
        input1: '',
        checked1: false,
        checked2: false,
        object1: {
          title: 'How to do lists in Vue',
          author: 'Jang HyeonJun',
          publishedAt: '2023-06-07'
        }
      }
    },
    methods: {
      msgOpen() {
        this.$message({
          message: this.msg2,
        });
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
  width: 50%;
  line-height: 30px;
}

.input {
  max-width: 30%;
}

.el-carousel__item h1 {
    color: white;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
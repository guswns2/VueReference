<template>
    <div>
        <h1>웹페이지 렌더링</h1>
        <hr>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>렌더링 과정</span>
            </div>
            <div class="text item" style="margin: auto; width:700px; text-align: left; line-height: 200%;">
                <ol>
                    <li>
                        <dt>public > index.html</dt>
                        <dd>Vue는 SPA(Single Page Application)로 한 페이지로 구성<br>
                            &lt;div id="app"&gt; 안에서 페이지가 이루어짐</dd>
                    </li>
                    <li>
                        <dt>src > main.js</dt>
                        <dd>main.js에서 Vue 인스턴스가 생성되며 index.html의 &lt;div id="app"&gt;과 연결<br>
                            또한 render 함수를 통해 App.vue를 가장 먼저 연결</dd>
                    </li>
                    <li>
                        <dt>src > App.vue</dt>
                        <dd>화면에서 가장 먼저 보여지는 컴포넌트<br>
                            보통 App.vue 내에서 router-view를 통해 여러 컴포넌트들을 보여줌</dd>
                    </li>
                    <li>
                        <dt>router > router.js</dt>
                        <dd>route 객체에 매핑된 경로를 통해 컴포넌트를 라우팅</dd>
                    </li>
                </ol>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'ProjectProc'
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
</style>
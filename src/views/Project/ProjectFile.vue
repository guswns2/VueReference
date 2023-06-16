<template>
    <div>
        <h1>프로젝트 파일 구조</h1>
        <hr>

        <div style="margin: 3%;">
            <img id="filetree" alt="File Tee" src="../../assets/VueFileTree.png">
        </div>    
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>파일 구조 분석</span>
            </div>
            <div class="text item" style="margin: auto; width:700px; text-align: left; line-height: 200%;">
                <ul>
                    <li>node_modules: npm으로 설치된 패키지 파일들이 모여있는 디렉토리</li>
                    <li>public: 웹팩을 통해 관리되지 않는 정적 리소스가 모여있는 디렉토리</li>   
                    <li>src: 거의 모든 코딩이 이루어지는 애플리케이션 디렉토리</li>
                        <ul>
                            <li>/assets: 이미지, CSS, 폰트 등을 관리하는 디렉토리</li>
                            <li>/components: 컴포넌트 파일이 모여있는 디렉토리</li>
                            <li>/router: 컴포넌트 경로를 매핑해놓는 라우터 파일이 있는 디렉토리</li>
                            <li>/store: 프로젝트에서 공용으로 사용하는 데이터 저장소 파일이 있는 디렉토리</li>
                            <li>/views: 라우터에서 보여주는 컴포넌트들이 모여있는 디렉토리</li>
                        </ul>
                    <li>package.json: 프로젝트에 필요한 패키지를 정의하고 관리하는 파일</li>
                    <li>README.md: 프로젝트 정보를 기록하는 파일</li>
                    <li>vue.config.js: Vue 기본 설정 파일</li>
                </ul>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'ProjectFile'
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
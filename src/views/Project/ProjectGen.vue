<template>
    <div>
        <h1>프로젝트 생성</h1>
        <hr>
        
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>프로젝트 생성 순서</span>
            </div>
            <div class="text item" style="margin: auto; width:40%; text-align: left; line-height: 200%;">
                <ol>
                    <li>Visual Studio Code, Node.js 설치</li>
                    <li>Vue CLI 설치</li>
                        <ul>
                            <li>npm install -g @vue/cli</li>
                        </ul>
                    <li>프로젝트 생성</li>
                        <ul>
                            <li>vue create 프로젝트명</li>
                            <li>버전 및 옵션 선택</li>
                        </ul>
                    <li>프로젝트 실행</li>
                        <ul>
                            <li>cd 프로젝트 파일명</li>
                            <li>npm run serve</li>
                        </ul>
                </ol>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'ProjectGen'
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
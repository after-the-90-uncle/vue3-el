<template>
    <div class="body">
        <el-card>
            <template #header>
                <div class="header">登录</div>
            </template>
            <el-form ref="form" :model="form" :rules="rules">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="form.password"
                        placeholder="请输入密码"
                        type="password"
                    ></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button @click="submitForm('form')" type="primary" style="width: 100%">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return {
            form: {
                username: "",
                password: "",
            },
            rules: {
                username: [{ required: true, message: "请输入手机号", trigger: "blur" }],
                password: [{ required: true, message: "请输入密码", trigger: "blur" }],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (!valid) {
                    return false;
                }
                this.login()
                // console.log(this.$router)
                
            });
        },
        login(){
            this.$store.dispatch("login",{...this.form});
            this.$router.push("/")
        }
    },
};
</script>
<style scoped lang="scss">
.body {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #545c64;
    .el-card {
        width: 350px;
        height: 300px;
        .header {
            text-align: center;
        }
    }
}
</style>

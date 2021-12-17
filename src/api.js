import axios from "axios";
const instance = axios.create({
    baseUrl: "",
    timeout: 1000 * 60 * 10,
});
export default {
    install(app) {
        let { ...methods } = this;
        delete methods.install;
        app.config.globalProperties.$api = { ...methods };
    },
    async get(url, data = {}, header = {}) {
        let result = await instance.get(url, { params: data, headers: { ...header } });
        return handleResponese(result);
    },
    async post(url, data, config) {
        let params = handleParams(data, config);
        let result = await instance.post(url, params.data, params.config);
        return handleResponese(result);
    },
    async put(url, data, config) {
        let params = handleParams(data, config);
        let result = await instance.put(url, params.data, params.config);
        return handleResponese(this, result);
    },
    async delete(url, data = {}, header = {}) {
        let result = await instance.delete(url, { params: data, headers: { ...header } });
        return handleResponese(result);
    },
    async upload(url, data, config) {
        let form = new FormData();
        Object.keys(data).forEach((key) => {
            form.append(key, data[key]);
        });
        let params = handleParams(form, config);
        let result = await instance.post(url, params.data, params.config);
        return handleResponese(this, result);
    },
    sleep(ss) {
        return new Promise((resolve) => {
            let timer = setTimeout(() => {
                clearTimeout(timer);
                resolve();
            }, ss * 1000);
        });
    },
};
function handleParams(data, config = {}) {
    data = data || {};
    let { headers = {}, ...other } = config;
    return {
        data,
        config: {
            ...other,
            ...headers,
        },
    };
}
function handleResponese(response) {
    let data = response.data || {};

    return data;
}

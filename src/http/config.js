import  Fly from 'flyio/dist/npm/wx'
const fly=new Fly(); //创建fly实例


//添加拦截器
fly.interceptors.request.use((config,promise)=>{
  //给所有请求添加自定义header
  config.headers["Content-Type"]="application/x-www-form-urlencoded";
  return config;
})
//配置请求基地址
fly.config.baseURL="https://wendux.github.o/"

export default    fly

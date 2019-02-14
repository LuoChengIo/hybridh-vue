* 简介
    * hybird H5
* 快速接入
    * 项目结构
    <pre>
        |--- .vscode   vscode编辑器配置文件
        |--- dist      打包文件
            |--- development   开发环境
            |--- testing   测试环境
            |--- staging   预生产环境
            |--- production 生产环境
        |--- public     静态资源   
            |--- favicon.ico   网站图标
            |--- index.html   html
            |--- *   静态资源
        |--- src     源码
            |--- api    api请求
                |--- *.js
            |--- assets    图片资源
            |--- components    图片资源  
                |--- SvgIcon.vue  svg图标组件
            |--- filters    过滤器
            |--- icons    svg源文件
            |--- mixins    mixin
            |--- router    路由
                |--- index.js  路由文件
                |--- permission.js  路由拦截
            |--- styles    样式文件
                |--- base.scss  基础及公用样式
                |--- index.scss  引入样式
                |--- transition.scss  vue效果样式文件
                |--- variables.scss  变量
            |--- utils    公共js
                |--- Bus.js  跨父子通信
                |--- index.js  通用方法
                |--- native.js  原生交互
                |--- request.js  axios 封装
                |--- validate.js  常用表单检验方式
            |--- view    页面文件
                |--- Module1  模块1
                    |--- 404.vue  页面
                |--- Module2  模块2
                    |--- 404.vue  页面
            |--- App.vue    主文件
            |--- main.js    主文件
            |--- .browserslistrc    所需兼容浏览器列表
            |--- .env    基础变量
            |--- .env.production    生产环境变量
            |--- .env.staging    预生产环境变量
            |--- .env.testing    测试环境变量
            |--- .eslintrc.js    eslint配置文件
            |--- vue.config.js   vue 配置文件
    </pre>
 * 开发指南
    * 开发运行
      * npm run dev 或者 npm run serve
    * 开发环境打包
      * npm run build:dev
    * 测试环境打包
      * npm run build:testing
    * 预生产环境打包
      * npm run build:staging
    * 生产环境打包
      * npm run build
           
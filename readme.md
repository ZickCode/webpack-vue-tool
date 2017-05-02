# webpack-vue-tool  

author: zickcode@foxmail.com
github: https://github.com/ZickCode/webpack-vue-tool

# 安装软件<br>
nodejs v5.0+  https://nodejs.org/en/  下载安装即可

# Tips:
建议安装淘宝镜像,在命令行运行
npm install -g cnpm --registry=https://registry.npm.taobao.org
绑定cnpm命令 npm -> cnpm

# 使用脚手架
1.cnpm install命令安装node依赖
2.cnpm run dev开启本地服务器
3.cnpm run build打包发布

# 目录结构<br>
```
├── webpack.config.js                       # webpack配置文件
├── package.json                            # 项目配置
├── README.md                               # 项目说明
├── .gitignore                              # git忽略提交文件
├── .babelrc                                # babel配置文件
├── index.html                              # 页面入口
├── src                                     # 源码目录
│    ├── assets                             # 静态文件
│    │    ├── css                           # 第三方css
│    │    ├── images                        # 图片
│    │    └── js                            # 第三方js
│    ├── components                         # 组件
│    ├── app.vue                            # 主页面vue
│    ├── main.js                            # 主页面js
└── dist/                                   # 打包完的源码目录
```
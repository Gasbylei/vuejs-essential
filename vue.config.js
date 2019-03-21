// vue.config.js
module.exports = {
  // 选项...
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vuejs-essential/dist/'
  : '/',
  //关闭热更新检查
  devServer: {
    disableHostCheck: true
  }
}
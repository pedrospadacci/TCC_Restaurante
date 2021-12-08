module.exports = {
  devServer: {
    proxy: 'http://cardapiotcc-backend.herokuapp.com'
  },
  transpileDependencies: [
    'vuetify'
  ]
}

/**
 * Created by lenovo on 2018/8/27.
 */
const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
  const {page} = ctx.request.query
  const size = 12
  const books = await mysql('books')
    .select('books.*', 'csessioninfo.user_info')
    .join('csessioninfo','books.openid','csessioninfo.open_id')
    .limit(size)
    .offset(Number(page) * size)
    .orderBy('books.id','desc')
  ctx.state.data = {
    list: books.map(v => {
      const info = JSON.parse(v.user_info)
      return Object.assign({}, v, {
        user_info: {
          nickName: info.nickName
        }
      })
    })
  }
}
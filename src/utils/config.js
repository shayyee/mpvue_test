/**
 * Created by lenovo on 2018/8/14.
 */

const host = 'http://localhost:5757/weapp'
const ERR_OK = 0
const pageSize = 12

const config = {
  host,
  ERR_OK,
  pageSize,
  loginUrl: `${host}/login`,
  userUrl: `${host}/user`
}

export default config
/**
 * Created by lenovo on 2018/8/14.
 */

const host = 'http://10.200.0.92:5757/weapp'
const ERR_OK = 0

const config = {
  host,
  ERR_OK,
  loginUrl: `${host}/login`,
  userUrl: `${host}/user`
}

export default config
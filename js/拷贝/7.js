const user = {
  name: '朱总',
  like: {
    n: '泡脚',
    m: '吃鸡'
  }
}

const newUser = structuredClone(user)
user.like.n = '喝茶'

console.log(newUser)
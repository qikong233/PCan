export function UserAuth(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.name === '123' && user.pwd === '123') {
        resolve()
      } else {
        reject()
      }
    }, 2000)
  })
}

export function GetRecommendData() {
  return [
    {picUrl: require('../images/pic_1.jpg'), title: '矶烧双人餐', price: '15', recommend: 50, count: 143},
    {picUrl: require('../images/pic_2.jpg'), title: '下午茶套餐', price: '40', recommend: 6, count: 163},
    {picUrl: require('../images/pic_3.jpg'), title: '迷你黑樱桃汉堡o', price: '30', recommend: 30, count: 13},
    {picUrl: require('../images/pic_4.jpg'), title: '炸薯条', price: '19', recommend: 55, count: 155},
    {picUrl: require('../images/pic_5.jpg'), title: 'MINI山姆大叔', price: '9.9', recommend: 34, count: 13},
    {picUrl: require('../images/pic_6.jpg'), title: '莫吉托', price: '110', recommend: 51, count: 122},
    {picUrl: require('../images/pic_7.jpg'), title: '德国香肠意粉', price: '0.01', recommend: 100, count: 1232}
  ]
}

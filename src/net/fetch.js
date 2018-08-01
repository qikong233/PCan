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
    {storeName: 'store one', picUrl: require('../images/pic_1.jpg'), foodName: '矶烧双人餐', price: '15', orginPrice: '30', recommend: 50, count: 143},
    {storeName: 'store two', picUrl: require('../images/pic_2.jpg'), foodName: '下午茶套餐', price: '40', orginPrice: '80', recommend: 6, count: 163},
    {storeName: 'store three', picUrl: require('../images/pic_3.jpg'), foodName: '迷你黑樱桃汉堡', price: '30', orginPrice: '60', recommend: 30, count: 13},
    {storeName: 'store four', picUrl: require('../images/pic_4.jpg'), foodName: '炸薯条', price: '19', orginPrice: '38', recommend: 55, count: 155},
    {storeName: 'store five', picUrl: require('../images/pic_5.jpg'), foodName: 'MINI山姆大叔', price: '9.9', orginPrice: '19.9', recommend: 34, count: 13},
    {storeName: 'store six', picUrl: require('../images/pic_6.jpg'), foodName: '莫吉托', price: '110', orginPrice: '220', recommend: 51, count: 122},
    {storeName: 'store seven', picUrl: require('../images/pic_7.jpg'), foodName: '德国香肠意粉', price: '0.01', orginPrice: '30', recommend: 100, count: 1232}
  ]
}

import * as types from '../actions/actionTypes'

const initialState = {
  chatList: [
    {
      name: 'Me',
      avatar_url: require('../images/user1.jpg'),
      department: '太平洋汽车网',
      conversation: [
        { isMe: true, content: '嘿嘿嘿' },
        { isMe: false, content: '干啥' }
      ]
    },
    {
      name: 'Sarah',
      avatar_url: require('../images/user2.jpg'),
      department: '太平洋电脑网',
      conversation: [
        { isMe: true, content: '吃饭了' },
        { isMe: false, content: '吃啥' },
        { isMe: true, content: '我看下有什么好拼团' },
      ]
    },
    {
      name: 'Brayden',
      avatar_url: require('../images/user3.jpg'),
      department: '太平洋亲子网',
      conversation: [
        { isMe: false, content: '上次拼的米线那个挺好吃' },
        { isMe: false, content: '再点一次？' },
        { isMe: true, content: '刚和Sarah在看要点什么' },
      ]
    },
    {
      name: 'Brian',
      avatar_url: require('../images/user4.jpg'),
      department: '太平洋家居网',
      conversation: [
        { isMe: true, content: '拼餐吗' },
        { isMe: false, content: '一起啊' }
      ]
    },
    {
      name: 'Daisy',
      avatar_url: require('../images/user0.jpg'),
      department: '研发中心',
      conversation: [
        { isMe: false, content: '看到什么好吃的没有' },
      ]
    }
  ]
}

function getNames(state) {
  var arr = []
  state.chatList.map((item, index) => {
    arr.push(item.name)
  })
  return arr
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SENDMSG: {
      let names = getNames(state)
      let index = names.indexOf(action.name)
      var chatList = state.chatList
      chatList[index].conversation.push({isMe: true, content: action.msg})
      console.log(chatList)
      return Object.assign({}, state, {
        chatList
      })
    }
    default: {
      return state
    }
  }
}

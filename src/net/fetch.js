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

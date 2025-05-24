export function initStarNotification() {
  setTimeout(() => {
    ElNotification({
      title: "欢迎使用",
      type: "success",
      message: "来呀来呀~",
      duration: 3000,
      position: "bottom-right"
    })
  }, 0)
}

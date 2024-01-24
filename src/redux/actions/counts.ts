export const increment = (data: any) => ({ type: 'increment', data })
export const decrement = (data: any) => ({ type: 'decrement', data })
// 模拟异步操作
export const incrementAsync = (data: any, delay = 500) => {
  // 默认会传入dispatch方法，直接声明形参调用即可
  return (dispatch: (arg0: { type: string; data: any }) => void) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, delay)
  }
}
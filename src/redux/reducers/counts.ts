export default function countReducer(
  preState = 0,
  action: { type: string; data: any }
): number {
  const { type, data } = action
  // 根据type进行数据操作
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}
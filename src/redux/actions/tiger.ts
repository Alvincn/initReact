import { TigerVo } from "../reducers/tiger"
export const increTiger = (data: TigerVo) => ({ type: 'add', data })
export const delTigerById = (data: TigerVo) => ({ type: 'del', data })
import React from "react"
import { Button } from 'antd'
import 'antd/dist/reset.css'
interface Props {
  name: string
}
const Hello: React.FC<Props> = (props) => {
  return (
    <>
      <h1>Hello, World!{ props.name }</h1>
      <Button type="primary">你好</Button>
      <Button type="link" >你好</Button>
    </>
  )
}
export default Hello
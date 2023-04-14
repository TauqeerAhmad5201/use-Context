import React, {useContext} from 'react'
import { data_gender, data_name } from '../App'

export default function ChildC() {
  const name_to_use = useContext(data_name); 
  const gender_to_use = useContext(data_gender); 
  return (
    <div>
      <p>Hello World</p>
      <p>Hello {name_to_use}</p>
      <p>OK! {gender_to_use}</p>
    </div>
  )
}

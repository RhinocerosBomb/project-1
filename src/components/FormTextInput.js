import React from 'react'
import TextInput from './TextInput'

export default function FormTextInput({
  id,
  placeholder,
  value,
  setValue,
  type,
}) {
  const onChange = event => setValue(event.target.value)

  return (
    <TextInput
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  )
}

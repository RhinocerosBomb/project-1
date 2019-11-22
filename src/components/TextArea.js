import './TextInput.css'
import React from 'react'
import ReactAutosizeTextarea from 'react-autosize-textarea'

export default function TextArea({ id, placeholder, value, onChange }) {
  return (
    <div>
      <ReactAutosizeTextarea
        id={id}
        className='TextInput TextInput__Area'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={3}
      />
    </div>
  )
}

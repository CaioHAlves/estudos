import React, { useRef, useState, useEffect } from 'react'
import Editor from 'react-simple-code-editor'
import { useField } from '@unform/core'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/themes/prism-dark.css'
interface Props {
  name: string
}
export function CodeInput({ name }: Props) {

  const [code, setCode] = useState('')
  const editorRef = useRef(null)

  const { defaultValue, fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: editorRef.current,
      path: '_input.value',
      setValue(_: any, value: string) {
        setCode(value)
      },
    })
  }, [fieldName, registerField])

  return (
    <Editor
      className="editor"
      textareaId={fieldName}
      value={code}
      defaultValue={defaultValue}
      onValueChange={setCode}
      highlight={code => highlight(code, languages.markup, 'markup')}
      padding={15}
      ref={editorRef}
    />
  )
}

export default CodeInput
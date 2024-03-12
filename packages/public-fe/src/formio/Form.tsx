import { Components, Templates, Form } from '@formio/react'

import { Button, Textarea } from './components'
import { template } from './template'

Components.setComponents({ button: Button, textarea: Textarea })
Templates.current = template

export function FormComp({ form }: any) {
  return <Form form={form} />
}

export default FormComp

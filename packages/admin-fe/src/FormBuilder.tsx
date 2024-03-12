import { FormBuilder } from '@formio/react'

import '@formio/js/dist/formio.builder.min.css'

export function FormBuilderComp(props: any) {
  return <FormBuilder {...props} />
}

export default FormBuilderComp

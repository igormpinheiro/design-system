import { ComponentProps } from 'react'
import { CheckboxIndicator, CheckboxContainer } from './styles'
import { Check } from 'phosphor-react'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" size={16} />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  borderRadius: '$md',
  color: '$white',
  backgroundColor: '$gray500',
})

export function App() {
  return <Button>Button</Button>
}

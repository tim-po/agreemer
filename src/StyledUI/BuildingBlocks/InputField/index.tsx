import styled from 'styled-components'
import Input from '../../BaseComponents/Input'
import { getColorScheme } from '../../higherLevelProcessors/colorScheme'

const InputField = styled(Input)`
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 2px 4px;
  border-radius: 4px;
  outline: none !important;

  &:hover {
    border: 2px solid ${({ theme }) => getColorScheme(theme.colors)?.primary};
  }
`

export default InputField

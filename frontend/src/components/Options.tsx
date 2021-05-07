/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { SelectInputProps } from '@material-ui/core/Select/SelectInput'
import { Theme as MaterialUITheme } from '@material-ui/core/styles/createMuiTheme'
import { FC } from 'react'

const optionsStyled = (theme: MaterialUITheme) => css`
  .MuiInputBase-input {
    font-size: ${theme.spacing(2)}px;
    color: white;
  }

  .MuiFormLabel-root {
    color: rgba(255, 255, 255, 0.7);
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }

  .MuiSelect-icon {
    color: rgba(255, 255, 255, 0.7);
  }

  .MuiInput-underline:before {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
`

const menuItemStyled = css`
  text-transform: capitalize;
`

interface OptionsProps {
  value: string
  onChange: SelectInputProps['onChange']
  materials: string[]
}

const Options: FC<OptionsProps> = (props) => {
  const { value, onChange, materials } = props

  return (
    <FormControl css={optionsStyled}>
      <InputLabel id="select-robot-material">Filter by material</InputLabel>
      <Select
        id="select-robot-material"
        labelId="select-robot-material-labels"
        value={value}
        onChange={onChange}
      >
        {materials.map((material) => (
          <MenuItem key={material} css={menuItemStyled} value={material}>
            {material || 'none'}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Options

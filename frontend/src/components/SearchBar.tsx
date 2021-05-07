/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { InputAdornment, Theme as MaterialUITheme } from '@material-ui/core'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import ClearIcon from '@material-ui/icons/Clear'

const textFieldStyled = (theme: MaterialUITheme) => css`
  .MuiOutlinedInput-root {
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-sizing: border-box;
    border-radius: ${theme.spacing(1.5)}px;
  }

  .MuiInputBase-input {
    font-size: ${theme.spacing(2)}px;
    line-height: ${theme.spacing(3)}px;
    color: rgba(255, 255, 255, 0.7);
  }

  .MuiSvgIcon-root {
    cursor: pointer;
    fill: var(--java);
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid var(--java);
    box-sizing: border-box;
  }

  .clear-icon {
    margin-right: ${theme.spacing(1)}px;
    fill: rgba(255, 255, 255, 0.7);
  }
`

interface SearchBarProps {
  handleOnClear?: () => void
}

const SearchBar = (props: SearchBarProps & TextFieldProps): JSX.Element => {
  const { handleOnClear, value, ...rest } = props

  return (
    <TextField
      fullWidth
      InputProps={{
        endAdornment: value ? (
          <InputAdornment position="end">
            <ClearIcon className="clear-icon" onClick={handleOnClear} />
          </InputAdornment>
        ) : (
          <></>
        ),
      }}
      css={textFieldStyled}
      placeholder="Search by name"
      type="text"
      value={value}
      variant="outlined"
      {...rest}
    />
  )
}

export default SearchBar

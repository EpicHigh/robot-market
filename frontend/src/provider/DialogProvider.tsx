import { createContext, FC, useContext, useReducer } from 'react'
import { dialogReducer, initialDialogState } from '../reducers'
import { DialogActionType, DialogState } from '../types'

interface ErrorContextValue {
  state: DialogState
  openDialog: (description: string) => void
  closeDialog: () => void
}

const DialogContext = createContext<ErrorContextValue | null>(null)

export const useDialog = (): ErrorContextValue =>
  useContext(DialogContext) as ErrorContextValue

export const DialogProvider: FC = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer(dialogReducer, initialDialogState)

  const openDialog = (description: string) => {
    dispatch({
      type: DialogActionType.OpenDialog,
      payload: { description },
    })
  }

  const closeDialog = () => {
    dispatch({ type: DialogActionType.CloseDialog })
  }

  return (
    <DialogContext.Provider value={{ state, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  )
}

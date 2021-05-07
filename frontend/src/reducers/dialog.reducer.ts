import { DialogAction, DialogActionType, DialogState } from '../types'

export const initialDialogState: DialogState = {
  title: 'Oops! something went wrong',
  description: '',
  open: false,
}

export function dialogReducer(
  state: DialogState,
  action: DialogAction
): DialogState {
  const { payload } = action
  switch (action.type) {
    case DialogActionType.OpenDialog:
      return {
        open: true,
        title: state.title,
        description: payload?.description || state.description,
      }
    case DialogActionType.CloseDialog:
      return initialDialogState
    default:
      return initialDialogState
  }
}

export enum DialogActionType {
  OpenDialog = 'OPEN_DIALOG',
  CloseDialog = 'CLOSE_DIALOG',
}

export interface DialogState {
  title: string
  description: string
  open: boolean
}

export interface DialogAction {
  type: DialogActionType
  payload?: Omit<DialogState, 'open' | 'title'>
}

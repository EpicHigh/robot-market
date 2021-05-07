import { DialogActionType } from '../types'
import { dialogReducer, initialDialogState } from './dialog.reducer'

describe('dialogReducer', () => {
  it('should open dialog', () => {
    const result = dialogReducer(initialDialogState, {
      type: DialogActionType.OpenDialog,
      payload: { description: 'bar' },
    })
    expect(result).toEqual({
      open: true,
      title: 'Oops! something went wrong',
      description: 'bar',
    })
  })

  it('should close dialog', () => {
    const result = dialogReducer(initialDialogState, {
      type: DialogActionType.CloseDialog,
    })
    expect(result).toEqual({
      open: false,
      title: 'Oops! something went wrong',
      description: '',
    })
  })
})

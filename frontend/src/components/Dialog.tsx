import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { FC } from 'react'
import { DialogState } from '../types'

interface AlertDialogProps {
  handleOnClose: () => void
  dialog: DialogState
}

const AlertDialog: FC<AlertDialogProps> = (props) => {
  const { handleOnClose, dialog } = props
  const { open, title, description } = dialog

  return (
    <Dialog
      aria-describedby="alert-dialog-description"
      aria-labelledby="alert-dialog-title"
      open={open}
      onClose={handleOnClose}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus color="primary" onClick={handleOnClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AlertDialog

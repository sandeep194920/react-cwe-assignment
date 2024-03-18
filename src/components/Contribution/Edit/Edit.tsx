import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Formik, Form } from 'formik'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { isVisible } from '../../../selectors/dialogs'
import { Dialogs } from '../../../types/dialog'
import { State } from '../../../types/store'
import Tfsa from '../../Tfsa/Tfsa'
import Rrsp from '../../Rrsp/Rrsp'
import classes from './Edit.module.scss'
import { getSelected } from '../../../selectors/contributions'
import { Status } from '../../../types/contribution'
import ContributionDelete from './Delete/Delete'
import {
  contributionDeleteConfirm,
  contributionEditDismiss,
} from '../../../features/dialogsSlice'

const ContributionEdit: React.FC = () => {
  const visible = useSelector<State, boolean>((state) =>
    isVisible(state, Dialogs.contributionEdit)
  )
  const selected = useSelector(getSelected)
  const dispatch = useDispatch()
  const close = () => dispatch(contributionEditDismiss())

  return (
    <Dialog open={!!visible} onClose={close}>
      <DialogTitle>Edit Contribution</DialogTitle>
      <Formik initialValues={{}} onSubmit={() => undefined}>
        {() => (
          <Form>
            <DialogContent classes={classes}>
              <Rrsp />
              <Tfsa />
            </DialogContent>
            <DialogActions>
              <Button
                disabled={selected?.status !== Status.Pending}
                onClick={() => dispatch(contributionDeleteConfirm())}
              >
                Delete
              </Button>
              <Button
                disabled={selected?.status !== Status.Pending}
                onClick={close}
              >
                Accept
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
      <ContributionDelete />
    </Dialog>
  )
}

export default ContributionEdit

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Formik, Form } from 'formik'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isVisible } from '../../../../selectors/dialogs'
import { Dialogs } from '../../../../types/dialog'
import { State } from '../../../../types/store'
import Tfsa from '../../../Tfsa/Tfsa'
import Rrsp from '../../../Rrsp/Rrsp'
import classes from '../Edit.module.scss'
import { getSelected } from '../../../../selectors/contributions'
import { contributionEditDismiss } from '../../../../features/dialogsSlice'
import { contributionDelete } from '../../../../features/contributionsSlice'
import { contributionDeleteComplete } from '../../../../features/dialogsSlice'
import { Contribution } from '../../../../types/contribution'
import { contributionSelect } from '../../../../features/selectedContributionSlice'

const ContributionDelete: React.FC = () => {
  const visible = useSelector<State, boolean>((state) =>
    isVisible(state, Dialogs.ContributionDeleteConfirm)
  )
  const selected = useSelector(getSelected)
  const dispatch = useDispatch()
  const close = () => dispatch(contributionEditDismiss())

  const handleDelete = (selected: Contribution) => {
    dispatch(contributionDelete(selected))
    dispatch(contributionDeleteComplete())
    dispatch(contributionSelect(null))
  }

  return (
    <Dialog open={!!visible} onClose={close}>
      <DialogTitle>
        Are you sure you want to delete this contribution?
      </DialogTitle>
      <Formik initialValues={{}} onSubmit={() => undefined}>
        {() => (
          <Form>
            <DialogContent classes={classes}>
              <Rrsp />
              <Tfsa />
            </DialogContent>
            <DialogActions>
              <Button onClick={close}>Cancel</Button>
              <Button
                disabled={!selected}
                onClick={() => selected && handleDelete(selected)}
              >
                Delete Contribution
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  )
}

export default ContributionDelete

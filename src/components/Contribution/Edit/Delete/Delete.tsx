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
import { dismiss, remove } from '.././Edit.actions'
import classes from '../Edit.module.scss'
import { getSelected } from '../../../../selectors/contributions'

const ContributionDelete: React.FC = () => {
  const visible = useSelector<State, boolean>((state) =>
    isVisible(state, Dialogs.contributionDelete)
  )
  const selected = useSelector(getSelected)
  const dispatch = useDispatch()
  const close = () => dispatch(dismiss())

  return (
    <Dialog open={!!visible} onClose={close}>
      <DialogTitle>
        Are you sure you want to cancel this contribution?
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
                onClick={() => selected && dispatch(remove(selected))}
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

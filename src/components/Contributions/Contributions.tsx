import List from '@mui/material/List'
import Contribution from '../Contribution/Contribution'
import { useGetAllContributionsQuery } from '../../features/async/contributions'

const Contributions: React.FC = () => {
  const { data, isFetching } = useGetAllContributionsQuery()

  if (isFetching) {
    return <div>Loading...</div>
  }
  return (
    <List>
      {data?.map((contribution) => (
        <Contribution key={contribution.uuid} contribution={contribution} />
      ))}
    </List>
  )
}

export default Contributions

import { memo } from 'react';
import { TableContainer } from '..';

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  return <TableContainer />;
};
export default memo(Home);

import { UserDTO } from '@/common/dto';
import { Home } from '@/containers/components';
import { useUsersQuery } from '@/hooks';

const HomeModule = () => {
  const { data: users, isLoading } = useUsersQuery<UserDTO[]>();
  return <Home users={users} isLoading={isLoading} />;
};

export default HomeModule;

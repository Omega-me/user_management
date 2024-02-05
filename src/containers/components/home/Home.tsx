import { Modal, TableContainer } from '..';
import { eActionType } from '@/common/enums';
import { RowDTO, UserDTO } from '@/common/dto';

interface HomeProps {
  users?: UserDTO[];
  isLoading: boolean;
}

const Home: React.FC<HomeProps> = props => {
  return (
    <>
      <Modal btnLabel="Save" title="New User Info" onClose={() => console.log('close')} onSubmit={() => console.log('Submit')} />
      <TableContainer
        config={{
          showActions: true,
          isLoading: props.isLoading,
          onClickAction: (type: eActionType, row: RowDTO) => {
            console.log(type, row);
          },
          columns: {
            configs: [
              {
                title: 'ID',
              },
              {
                title: 'Name',
              },
              {
                title: 'Email',
              },
              {
                title: 'Phone',
              },
            ],
            values: props?.users?.map(user => {
              return [user?.id, user?.name, user?.email, user?.phone];
            }),
          },
        }}
      />
    </>
  );
};
export default Home;

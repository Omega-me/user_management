import { Input, Modal, Spinner, TableContainer } from '..';
import { eActionType } from '@/common/enums';
import { RowDTO, UserDTO } from '@/common/dto';
import { FieldErrors, UseFormGetValues, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import s from './home.module.scss';

interface HomeProps {
  users?: UserDTO[];
  user: UserDTO;
  userId: string | null;
  isLoading: boolean;
  showModal: boolean;
  showDeleteModal: boolean;
  isDeleteUserPending: boolean;
  isSaveUserPending: boolean;
  isUserLoading: boolean;
  onClickAction: (type: eActionType, row: RowDTO) => void;
  onDeleteUser: () => void;
  onCloseModal: (type: eActionType) => void;
  onNew: () => void;
  register: UseFormRegister<UserDTO>;
  onSubmit: (e?: React.BaseSyntheticEvent<UserDTO, any, any> | undefined) => Promise<void>;
  watch: UseFormWatch<UserDTO>;
  setValue: UseFormSetValue<UserDTO>;
  getValues: UseFormGetValues<UserDTO>;
  errors: FieldErrors<UserDTO>;
}

const Home: React.FC<HomeProps> = props => {
  return (
    <>
      <TableContainer
        config={{
          showActions: true,
          isLoading: props.isLoading,
          onNew: props.onNew,
          onClickAction: props.onClickAction,
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
            values:
              props?.users &&
              props?.users?.map(user => {
                return [user?.id, user?.name, user?.email, user?.phone];
              }),
          },
        }}
      />
      <Modal
        btnLabel={props.isSaveUserPending ? 'Saving...' : 'Save'}
        isActive={props.showModal}
        title={!props?.userId ? 'New User Info' : 'Edit User Info'}
        onClose={() => props.onCloseModal(eActionType.EDIT)}
        typeButton="submit"
        onSubmit={() => {
          props.onSubmit();
        }}>
        <>
          {props.userId && props.isUserLoading ? (
            <div className={s.nouser_loading}>
              <Spinner />
            </div>
          ) : (
            <form className={s.form} onSubmit={() => props.onSubmit()}>
              <div className={s.form_left}>
                <div className={s.input_field}>
                  <Input
                    id="fullnameid"
                    label="Full Name"
                    name="name"
                    placeholder="Enter full name"
                    required={'Full name is required'}
                    register={props.register}
                    errors={props.errors}
                  />
                </div>
                <div className={s.input_field}>
                  <Input
                    id="usernameid"
                    label="Username"
                    name="username"
                    placeholder="Enter username"
                    required={'Username is required'}
                    register={props.register}
                    errors={props.errors}
                  />
                </div>
                <div className={s.input_field}>
                  <Input
                    id="emailid"
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Enter email address"
                    register={props.register}
                    errors={props.errors}
                    required={'Email address is required'}
                    options={{
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email, use format (email@domain.com)',
                      },
                    }}
                  />
                </div>
                <div className={s.input_field}>
                  <Input
                    id="phoneid"
                    label="Phone Nr"
                    name="phone"
                    placeholder="Enter phone number"
                    register={props.register}
                    errors={props.errors}
                    required={'Phone number is required'}
                    type="phone"
                    options={{
                      pattern: {
                        value: /[1-9]{1}[0-9]{11}/,
                        message: 'Invalid phone number, use format (+355xxxxxxx,355xxxxxxx)',
                      },
                    }}
                  />
                </div>
              </div>
              <div className={s.form_right}>
                <div className={s.input_field}>
                  <Input
                    id="addressid"
                    label="Address"
                    name="address.street"
                    field="street"
                    watch={props.watch}
                    setValue={props.setValue}
                    getValues={props.getValues}
                    placeholder="Enter address"
                    required={'Street is required'}
                    register={props.register}
                    errors={props.errors}
                    checkbox={{
                      label: 'Use Google Location',
                      id: 'googlelocid',
                      name: 'gooleLoc',
                    }}
                  />
                </div>
                <div className={s.input_field}>
                  <Input
                    id="cityid"
                    label="City"
                    name="address.city"
                    field="address"
                    placeholder="Enter city name"
                    required={'City is required'}
                    register={props.register}
                    errors={props.errors}
                  />
                </div>
                <div className={s.input_field}>
                  <Input
                    id="zipcodeid"
                    label="Zip Code"
                    name="address.zipcode"
                    placeholder="Enter zip code"
                    required={'Zip code  is required'}
                    register={props.register}
                    errors={props.errors}
                  />
                </div>
                {props.watch('gooleLoc') && (
                  <div className={s.coordinates}>
                    <div className={`${s.input_field} ${s.input_field__lat}`}>
                      <Input
                        id="latid"
                        label="Latitude"
                        type="number"
                        name="address.geo.lat"
                        placeholder="Enter latitude"
                        required={'Latitude is required'}
                        register={props.register}
                        errors={props.errors}
                      />
                    </div>
                    <div className={`${s.input_field} ${s.input_field__lng}`}>
                      <Input
                        id="lngid"
                        type="number"
                        label="Longtitude"
                        name="address.geo.lng"
                        placeholder="Enter longtitude"
                        required={'Longtitude is required'}
                        register={props.register}
                        errors={props.errors}
                      />
                    </div>
                  </div>
                )}
              </div>
            </form>
          )}
        </>
      </Modal>
      <Modal
        type="message"
        btnLabel={props.isDeleteUserPending ? 'Deleting...' : 'Delete'}
        isActive={props.showDeleteModal}
        title="Delete User"
        onClose={() => props.onCloseModal(eActionType.DELETE)}
        onSubmit={() => props.onDeleteUser()}>
        <div>Are you sure you want te delete this user?</div>
      </Modal>
    </>
  );
};
export default Home;

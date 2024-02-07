import { RowDTO, UpdateUserDTO, UserDTO } from '@/common/dto';
import { eActionType, eHttpMethod } from '@/common/enums';
import { Home } from '@/containers/components';
import { useUsersMutation, useUsersQuery } from '@/hooks';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const HomeModule = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
    getValues,
  } = useForm<UserDTO>();

  const { data: users, isLoading, getCachedData } = useUsersQuery<UserDTO[]>();
  const { data: user, isLoading: isUserLoading } = useUsersQuery<UserDTO>({
    queryConfig: {
      queryParam: userId ? userId : '',
      enabled: !!userId && isEdit,
    },
  });

  useEffect(() => {
    if (userId && user) {
      setValue('id', user?.id);
      setValue('username', user?.username);
      setValue('name', user?.name);
      setValue('email', user?.email);
      setValue('phone', user?.phone);
      setValue('address', user?.address);
    }
  }, [setValue, user, userId]);

  const { mutate: saveUser, isPending: isSaveUserPending } = useUsersMutation<UpdateUserDTO>({
    queryConfig: {
      queryParam: userId ? userId : '',
      onSuccessFn(_data: UserDTO, variables) {
        const data: UserDTO[] | undefined = getCachedData();
        if (data) {
          if (!(variables as UserDTO)?.id) {
            data?.push(_data);
          } else {
            const index = data?.findIndex(user => user.id === Number((variables as UserDTO)?.id));
            if (index === 0 || index) {
              data[index] = _data;
            }
          }
        }
        setShowModal(false);
        reset();
      },
    },
  });

  const { mutate: deleteUser, isPending: isDeleteUserPending } = useUsersMutation({
    httpConfig: {
      methode: eHttpMethod.DELETE,
      message: 'test',
    },
    queryConfig: {
      queryParam: userId ? userId : '',
      onSuccessFn() {
        setShowDeleteModal(false);
        const data: UserDTO[] | undefined = getCachedData();
        if (userId && !isNaN(Number(userId))) {
          const index = data?.findIndex(user => user.id === Number(userId));
          if (index === 0 || index) {
            data?.splice(index, 1);
            setUserId(null);
          }
        }
      },
    },
  });

  const onSubmit = handleSubmit(data => {
    delete data.gooleLoc;
    if (!getValues('gooleLoc')) {
      setValue('address.geo', undefined);
      delete data.address.geo;
    }
    saveUser(data);
  });

  const onNew = () => {
    setShowModal(true);
    setUserId(null);
    setIsEdit(false);
    reset();
  };

  const onDeleteUser = () => {
    if (userId) {
      deleteUser({});
    }
  };

  const onClickAction = (type: eActionType, row: RowDTO) => {
    setUserId(row.id.toString());
    switch (type) {
      case eActionType.EDIT:
        setShowModal(true);
        setIsEdit(true);
        reset();
        break;
      case eActionType.DELETE:
        setShowDeleteModal(true);
        setIsEdit(false);
        break;
      default:
        break;
    }
  };

  const onCloseModal = (type: eActionType) => {
    switch (type) {
      case eActionType.EDIT:
        setShowModal(false);
        setUserId(null);
        reset();
        break;
      case eActionType.DELETE:
        setShowDeleteModal(false);
        break;
      default:
        break;
    }
  };

  return (
    <Home
      users={users}
      isLoading={isLoading}
      user={user}
      isUserLoading={isUserLoading}
      userId={userId}
      onClickAction={onClickAction}
      showModal={showModal}
      showDeleteModal={showDeleteModal}
      onDeleteUser={onDeleteUser}
      isDeleteUserPending={isDeleteUserPending}
      isSaveUserPending={isSaveUserPending}
      onNew={onNew}
      onCloseModal={onCloseModal}
      errors={errors}
      onSubmit={onSubmit}
      register={register}
      watch={watch}
      setValue={setValue}
      getValues={getValues}
    />
  );
};

export default HomeModule;

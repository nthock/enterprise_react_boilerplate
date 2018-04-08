import React from 'react';
import { Button } from 'antd';
import AdminForm from '../components/AdminForm';
import AdminList from '../components/AdminList';

const AdminListContainer = (props) => {
  const { Dialog } = props;

  return (
    <div>
      <h1>All Admins</h1>
      <Button
        type="primary"
        onClick={(e) => {
          Dialog.open(
            <AdminForm Dialog={Dialog} />,
            { title: 'Add New Admin' }
          );
        }}>Add Admin</Button>
      <div className="mt-20">
        <AdminList />
      </div>
    </div>
  );
};

export default AdminListContainer;

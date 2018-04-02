import React from 'react';
import { Button } from 'antd';
import AdminForm from '../components/AdminForm';

const AdminListContainer = (props) => {
  const { Dialog } = props;

  return (
    <div>
      <h1>All Admins</h1>
      <Button
        type="primary"
        onClick={(e) => {
          e.preventDefault;
          Dialog.open(
            <AdminForm Dialog={Dialog} />,
            { title: 'Add New Admin' }
          );
        }}>Add Admin</Button>
    </div>
  );
};

export default AdminListContainer;

import React from 'react';
import { Table, Button } from 'antd';
import enhance from '../composers/AdminListComposer';

const AdminList = (props) => {
  const { data: { admins }, handleDelete, sendInvite } = props;
  console.log('admins', props);
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <div>
        <span>
          <Button type="danger" id={`delete-admin-${record.id}`} onClick={e => handleDelete(record.id)}>Delete User</Button>
        </span>
        { record.status === 'invited' &&
          <span>
            <Button type="primary ml-10" id={`invite-admin-${record.id}`} onClick={e => sendInvite(record.id)}>Send Invitation Again</Button>
          </span>
        }
      </div>
    ),
  }];

  return (
    <Table rowKey={record => `user-${record.id}`} dataSource={admins} columns={columns} />
  );
}

export default enhance(AdminList);

import React from "react";
import PropTypes from "prop-types";
import { Table, Button } from "antd";
import enhance from "../composers/AdminListComposer";

export const AdminList = props => {
  const {
    data: { admins },
    handleDelete,
    sendInvite
  } = props;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div>
          <span>
            <Button
              type="danger"
              id={`delete-admin-${record.id}`}
              onClick={() => handleDelete(record.id)}
            >
              Delete User
            </Button>
          </span>
          {record.status === "invited" && (
            <span>
              <Button
                type="primary ml-10"
                id={`invite-admin-${record.id}`}
                onClick={() => sendInvite(record.id)}
              >
                Send Invitation Again
              </Button>
            </span>
          )}
        </div>
      )
    }
  ];

  return (
    <Table
      rowKey={record => `user-${record.id}`}
      dataSource={admins}
      columns={columns}
    />
  );
};

AdminList.propTypes = {
  data: PropTypes.shape({
    admins: PropTypes.array.isRequired
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  sendInvite: PropTypes.func.isRequired
};

export default enhance(AdminList);

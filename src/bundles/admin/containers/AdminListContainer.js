import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import AdminForm from "../components/AdminForm";
import AdminList from "../components/AdminList";

const AdminListContainer = props => {
  const { Dialog } = props;
  return (
    <div>
      <h1>All Admins</h1>
      <Button
        type="primary"
        onClick={() => {
          Dialog.open(<AdminForm Dialog={Dialog} />, {
            title: "Add New Admin"
          });
        }}
      >
        Add Admin
      </Button>
      <div className="mt-20">
        <AdminList />
      </div>
    </div>
  );
};

AdminListContainer.defaultProps = {
  Dialog: {}
};

AdminListContainer.propTypes = {
  Dialog: PropTypes.shape({
    close: PropTypes.func,
    open: PropTypes.func
  })
};

export default AdminListContainer;

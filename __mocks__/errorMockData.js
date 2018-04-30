const adminList = {
  admins: [
    {
      id: 1,
      name: "admin1",
      email: "admin1@eg.com",
      designation: null,
      status: "active",
      admin: true,
      super_admin: false,
      errors: [{ key: "error", message: "error message" }]
    },
    {
      id: 2,
      name: "admin2",
      email: "admin2@eg.com",
      designation: null,
      status: "active",
      admin: true,
      super_admin: false,
      errors: []
    }
  ]
};

const admin = adminList.admins[0];

const sendInviteMutate = {
  sendInviteMutate: jest
    .fn()
    .mockReturnValueOnce(Promise.resolve({ data: { sendInvite: admin } }))
};

const errorMockData = {
  admins: adminList,
  sendInvite: sendInviteMutate
};

export default errorMockData;

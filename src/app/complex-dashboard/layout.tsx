const DashboardLayout = ({
  children,
  users,
  notification,
  revenue,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
}) => {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flexGrow: 1 }}>{notification}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

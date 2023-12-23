import { Typography, Flex, Divider, Tag } from "antd";
import { useSelector } from "react-redux";

function ProfilePage() {
  const { user } = useSelector((state) => state.user);
  const { Text, Title } = Typography;
  return (
    <>
      <Flex gap={10} justify="center" align="center" vertical>
        {user?.role === "user" ? <Tag color="magenta">User</Tag> : null}
        {user?.role === "admin" ? <Tag color="blue">Admin</Tag> : null}
        <Title level={4}>Welcome, {user?.userName}!</Title>
        <Text>{user?.email}</Text>
        <Text>9090909088</Text>
      </Flex>
      <Divider />
      <Title level={4}>My Bookings</Title>
    </>
  );
}

export default ProfilePage;

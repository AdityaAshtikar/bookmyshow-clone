import { useEffect } from "react";
import { Drawer, Form, Input, Select, Button } from "antd";
import { useGetAllUsersQuery } from "../services/userServices";
import { useAddNewTheatreMutation } from "../services/theatreServices";
function UpdateTheatreForm(props) {
  const [form] = Form.useForm();
  const { open, onClose, data } = props;
  const { data: allUsers, isLoading: usersLoading } = useGetAllUsersQuery();
  const [addTheatre] = useAddNewTheatreMutation();
  useEffect(() => {
    const formData = {
      name: data.name,
      address: data.address,
      email: data.email,
      owner: data.owner._id,
      phone: data.phone,
    };
    form.setFieldsValue(formData);
  }, []);

  if (usersLoading) {
    return <p>Loading...</p>;
  }

  const usersList = allUsers.map((user) => ({
    label: user.userName,
    value: user._id,
  }));

  const onAddNewTheatreHandler = async (values) => {
    try {
      await addTheatre(values);
      onClose(false);
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Drawer
      title="Edit Theatre"
      size="large"
      placement="right"
      onClose={() => onClose(false)}
      open={open}
    >
      <Form layout="vertical" form={form} onFinish={onAddNewTheatreHandler}>
        <Form.Item name="name" label="Name">
          <Input placeholder="Enter Theatre Name" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input placeholder="Enter Theatre's Email" />
        </Form.Item>
        <Form.Item name="phone" label="Phone number">
          <Input placeholder="Enter Theatre's Contact Details" />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <Input.TextArea rows={6} placeholder="Enter Theatre Address" />
        </Form.Item>
        <Form.Item name="owner" label="Theatre Owner">
          <Select options={usersList} />
        </Form.Item>
        <Form.Item>
          <Button size="large" block htmlType="submit" type="primary">
            Add Theatre
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

UpdateTheatreForm.propTypes = {
  open: Boolean,
  onClose: Function,
};

export default UpdateTheatreForm;

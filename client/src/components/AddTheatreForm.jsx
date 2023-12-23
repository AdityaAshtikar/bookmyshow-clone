import { Drawer, Form, Input, Select, Button } from "antd";
function AddTheatreForm(props) {
  const [form] = Form.useForm();
  const { open, onClose } = props;
  return (
    <Drawer
      title="Add A New Theatre"
      size="large"
      placement="right"
      onClose={() => onClose(false)}
      open={open}
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="Name">
          <Input placeholder="Enter Theatre Name" />
        </Form.Item>
        <Form.Item label="Address">
          <Input.TextArea rows={6} placeholder="Enter Theatre Address" />
        </Form.Item>
        <Form.Item label="Phone number">
          <Input placeholder="Enter Theatre's Contact Details" />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder="Enter Theatre's Email" />
        </Form.Item>
        <Form.Item label="Genre">
          <Select options={[]} />
        </Form.Item>
        <Form.Item>
          <Button size="large" block type="primary">
            Add Theatre
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

AddTheatreForm.propTypes = {
  open: Boolean,
  onClose: Function,
};

export default AddTheatreForm;

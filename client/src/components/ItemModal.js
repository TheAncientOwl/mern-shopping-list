import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ItemModal = ({ addItem }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  const toggle = () => setOpen(!open);

  const handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: name,
    };

    // Add item via addItem action
    addItem(newItem);

    // Close modal
    toggle();
  };

  const handleInputChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <Button color='dark' style={{ marginBottom: '2rem' }} onClick={toggle}>
        Add Item
      </Button>

      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='item'>Item</Label>
              <Input type='text' name='name' id='item' placeholder='Add shopping item' onChange={handleInputChange} />
              <Button color='dark' style={{ marginTop: '2rem' }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

ItemModal.propTypes = {
  addItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);

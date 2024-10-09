import { useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PropTypes } from 'prop-types';

function UserDetails({ userObj }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {userObj.name.first} {userObj.name.last}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image style={{ width: '350px' }} src={userObj.picture.large} />
          <p className="details">Email: {userObj.email}</p>
          <p className="details">Phone: {userObj.phone}</p>
          <p className="details">Age: {userObj.dob.age}</p>
          <p className="details">
            Location: {userObj.location.city}, {userObj.location.country}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

UserDetails.propTypes = {
  userObj: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    picture: PropTypes.shape({
      large: PropTypes.string,
    }),
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }),
    email: PropTypes.string,
    phone: PropTypes.string,
    dob: PropTypes.shape({
      age: PropTypes.number,
    }),
  }).isRequired,
};

export default UserDetails;

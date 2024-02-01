import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setToDelete } from '../store/motorcycleSlice';

const DeleteItem = ({ motorcycle }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(setToDelete(motorcycle.id));

    const deleteModal = document.querySelector('#deleteModal');
    const bodyContainer = document.querySelector('.bodyContainer');

    if (deleteModal) {
      deleteModal.classList.remove('hideComponent');
    }

    if (bodyContainer) {
      bodyContainer.classList.add('hiddenScroll');
    }
  };

  return (
    <>
      <div className="motorcyclesItemsContainer">
        <div className="motorcycleToDelete flexH">
          <h3>{motorcycle.name}</h3>
          <div className="flexV">
            <button type="button" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

DeleteItem.propTypes = {
  motorcycle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default DeleteItem;

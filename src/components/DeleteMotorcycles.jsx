import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMotorcycles } from '../store/motorcycleSlice';
import DeleteItem from './DeleteItem';
import DeleteModal from './Modal';
import Navbar from './Navbar';
import '../styles/deleteMotorcycle.css';
import Message from './Message';

const DeleteMotorcycles = () => {
  const { requestHeader } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    motorcycles, information,
  } = useSelector((state) => state.motorcycle);

  useEffect(() => {
    dispatch(getMotorcycles(requestHeader));
  }, [requestHeader]);

  const currentUser = useSelector((state) => state.user.currentUser);
  if (!currentUser) return (<Navigate to="/login" />);
  return (
    <>
      <DeleteModal />
      <section className="mainUi">
        <Navbar />
        <div className="motorcycleItemListContainer">
          {Array.isArray(motorcycles)
            ? motorcycles.map((motorcycle) => (
              <DeleteItem
                key={(1 + (Math.sin(Math.random() * 10) + Math.cos(Math.random() * 11)))}
                motorcycle={motorcycle}
              />
            )) : (
              <div className="infoContainer flexV">
                <p>There is no motorcycles</p>
              </div>
            )}
          {information && information !== 'Loading...' && <Message message={information} />}
        </div>
      </section>
    </>
  );
};

export default DeleteMotorcycles;

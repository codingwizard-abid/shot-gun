import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';
import Modal from 'react-modal';
import CartModal from './Components/CartModal/CartModal';
import { GrClose } from "react-icons/gr";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    fetch('guns.json')
    .then(res => res.json())
    .then(data => setGuns(data));
  }, [])
  const handleAddCart = (gun) => {
    const newCart = [...cart ,gun];
    setCart(newCart);
  }
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <Navbar/>
      <button onClick={openModal}>Open Modal</button>
      <div className='card-container'>
        {
          guns.map(gun => <Card key={gun.id} guns={gun} addToCart={handleAddCart}></Card>)
        }
      </div>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className='icon' onClick={closeModal}> <GrClose/> </button>
        {
          cart.map(item => <CartModal key={item.id} items={item}></CartModal>)
        }
      </Modal>
    </div>
  );
}

export default App;

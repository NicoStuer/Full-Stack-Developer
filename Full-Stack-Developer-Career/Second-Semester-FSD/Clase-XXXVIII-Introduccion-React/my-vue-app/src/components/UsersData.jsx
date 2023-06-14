/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line react/prop-types

import { useState } from 'react';

function UsersData({ users }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCard(id);
  }
  return (
    <div className="row">
      {users.map((usr) => (
        <div className='col-md-4 mb-3' key={usr.id}>
          <div className="card">
            <div className='card-header text-center'>{usr.id}</div>
            <div className={`card-body text-center ${selectedCard === usr.id ? 'selected-card' : ''}`}>
              <h5 className="card-title text-center">{usr.name}</h5>
              <p className="card-text text-center">{usr.email}</p>
              <button className="btn btn-primary " onClick={() => handleCardClick(usr.id)}>
                Change Color
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersData;

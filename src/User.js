import React from 'react';
import './card.css';

class User extends React.Component {

  render() {
    const { name, gender, height, hair_color, skin_color, eye_color, mass } = this.props.details;
    // let imagepath = `https://picsum.photos/200?image=${this.props.index + 3}`;
    return (
      <div className="card-user">

        <div className="box">
          <div id="card-container">
            <div id="card1">
              <div className="front face">
                <h1 className="user-name">{name}</h1>
              </div>
              <div className="back face">
                <h1>{name}</h1>
                <p className="fact">gender:{ gender }</p>
                <p className="fact">height: { height }</p>
                <p className="fact">mass: { mass }</p>
                <p className="fact">skin: { skin_color }</p>
                <p className="fact">hair: { hair_color }</p>
                <p className="fact">eyes:{ eye_color }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default User;

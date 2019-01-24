import React, { Component } from 'react';
import './Card.css';

export const SmallCard = (props) => {
    return (
      <div className="small-card">
        <div className="in">
            <div className="pic-in">
            <img src="https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=large"></img>
            <p className="text">{props.text}</p>
            </div>
        </div>
      </div>
    );
}

export const MediumCard = () => {
  return (
    <div className="medium-card">
          <div className="medium-bg" style={{backgroundImage:`url("https://a0.muscache.com/im/pictures/82af5bc4-ed5b-44d9-9209-ac0f2fbf8986.jpg?aki_policy=large")`}}>
          </div>

          <div className="medium-text">
             <p className="title">testtt</p>
            <div class="start-from-text">Rata-rata <br/>Rp1714586/malam</div>
          </div>
         
    </div>
  );
}

export const ProductCard = () => {
  return (
    <div className="product-card">
          <div className="product-img">
            <img src="https://a0.muscache.com/im/pictures/537913b3-f15b-40a0-a2e4-0f8be5816a5f.jpg?aki_policy=large"></img>
          </div>

          <div className="product-text">
             <p className="title">MENGAMATI SATWA LIAR </p>
            <div class="price">Rp363.485 per orang</div>
          </div>
          <div>
          </div>

    </div>
  );
}



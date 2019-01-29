import React, { Component } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

import {Star} from '../../../Atom/Star';
export const SmallCard = (props) => {

    return (
      <div className="small-card">
      
        <div className="in">
        <Link to={`/${props.text}`}>
            <div className="pic-in">
            <img src={props.img}></img>
            <p className="text">{props.text}</p>
            </div>
        </Link>
        </div>
        
      </div>
    );
}

export const MediumCard = (props) => {
  return (
    <div className="medium-card">
          <div className="medium-bg" style={{backgroundImage:`url("${props.img}")`}}>
          </div>
          
          <div className="medium-text">
             <p className="title">{props.nama}</p>
            <div class="start-from-text">Rata-rata <br/>Rp {props.harga}/malam</div>
          </div>
         
    </div>
  );
}

export const BedCard = () => {
  return (
    <div className="bed-card">
           <div className="bed-img">
           <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" ><path d="m23.96 14.81-2.96-7.41v-5.02a1.39 1.39 0 0 0 -1.39-1.38h-15.22c-.77 0-1.39.62-1.39 1.38v5.02l-2.96 7.41-.04.19v5.61c0 .64.43 1.17 1.01 1.33 0 .02-.01.04-.01.06v1.5a.5.5 0 0 0 1 0v-1.5h20v1.5a.5.5 0 0 0 1 0v-1.5c0-.02-.01-.04-.01-.06a1.39 1.39 0 0 0 1.01-1.33v-5.61zm-19.96-12.43c0-.21.17-.38.39-.38h15.22a.39.39 0 0 1 .39.39v4.61h-1v-1.61c0-.77-.62-1.39-1.39-1.39h-3.21c-.78 0-1.4.62-1.4 1.39v1.61h-2v-1.61c0-.77-.62-1.39-1.39-1.39h-3.22c-.77 0-1.39.62-1.39 1.39v1.61h-1zm14 3.01v3.21a.39.39 0 0 1 -.39.39h-3.21a.39.39 0 0 1 -.4-.38v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-8 0v3.21a.39.39 0 0 1 -.39.4h-3.22a.39.39 0 0 1 -.39-.39v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-6.16 2.61h1.16v.61c0 .77.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h2v .61c0 .78.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h1.16l2.8 7h-21.92zm19.16 12.61c0 .21-.18.39-.39.39h-21.22a.39.39 0 0 1 -.39-.39v-4.61h22z" fill-rule="evenodd"></path></svg>
            </div>
          
          <div className="bed-text">
             <p className="title">testtt</p>
            <div className="detail">1 tempat tidur ganda</div>
          </div>
         
    </div>
  );
}

export const ProductCard = (props) => {
  const star = [];
    for (var i=0; i < props.productData.rate; i++) {
        star.push( <Star />);
    }

  return (
    
    <div className="product-card">
        <div className="product-img">
            <img src={props.productData===undefined? "https://a0.muscache.com/im/pictures/537913b3-f15b-40a0-a2e4-0f8be5816a5f.jpg?aki_policy=large":props.productData.foto_rumah}></img>
        </div>
        <Link to={`/room/${props.productData===undefined?'Rumah/1':props.ctg+'/'+props.productData.id}`}>
        <div className="product-text">
            <p className="title">{props.productData===undefined?"MENGAMATI SATWA LIAR":props.productData.nama} </p>
            <div className="price">{props.productData===undefined? "Rp363.485 per orang" :"Rp "+props.productData.harga+" per orang"}</div>
           
            <div style={{textAlign:"left"}}>
              <span className="rank">
                <span className="skor-rating">
                {props.productData.nilai}
                </span>
              </span>
              <span className="star-rating">

               {star}
              </span>
              </div>
            
          </div>
          </Link>
    </div>
  );
}



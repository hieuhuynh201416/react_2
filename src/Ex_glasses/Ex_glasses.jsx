import React, { Component } from 'react'
import "./style.css";
import { getValue } from '@testing-library/user-event/dist/utils';
export default class Ex_glasses extends Component {
    state = {
        item: "1"
    }
    handleChangeItem = (value) => {
        this.setState ({item: value});
    };
  render() {
    return (
        <div  style={{backgroundImage:`url('./Ex_glasses/background.jpg')`}}>
    <div className='container'>
        <div className="header" style={{background:"#A699A6", height:"100%"}}>
            <h1>Try Glasses App Online</h1>
        </div>
        <div className='containter-picture'>
           <div className="picture-model">
            <img src={`./Ex_glasses/model.jpg`} alt="" />
                <div className="picture-change">
                    <img src={`./Ex_glasses/v${this.state.item}.png`} alt=''/>
                </div>
                <div className="picture-detail">
                <h3>FENDI F8750</h3>
                    <p>Light pink square lenses define these <br />
                    sunglasses, ending with amother of pearl effect tip</p>
                </div>
           </div>
           <div className="picture-model-1">
            <img src={`./Ex_glasses/model.jpg`} alt="" />
            </div>
        </div>
        <div className="container-item">
            <div className="item-picture">
            <button onClick={() => {this.handleChangeItem("1");}} className="image-button">
                <img src={`./Ex_glasses/v1.png`} alt="Button Image" className="button-image" />
            </button> 
            <button onClick={() => {this.handleChangeItem("2");}} className="image-button">
                <img src={`./Ex_glasses/v2.png`} alt="Button Image" className="button-image" />
            </button> 
            <button onClick={() => {this.handleChangeItem("3");}} className="image-button">
                <img src={`./Ex_glasses/v3.png`} alt="Button Image" className="button-image" />
            </button> 
            <button onClick={() => {this.handleChangeItem("4");}} className="image-button">
                <img src={`./Ex_glasses/v4.png`} alt="Button Image" className="button-image" />
            </button> 
            <button onClick={() => {this.handleChangeItem("5");}} className="image-button">
                <img src={`./Ex_glasses/v5.png`} alt="Button Image" className="button-image" />
            </button> 
            <button onClick={() => {this.handleChangeItem("6");}} className="image-button">
                <img src={`./Ex_glasses/v6.png`} alt="Button Image" className="button-image" />
            </button> 
            <button onClick={() => {this.handleChangeItem("7");}} className="image-button">
                <img src={`./Ex_glasses/v7.png`} alt="Button Image" className="button-image" />
            </button> 
            <button onClick={() => {this.handleChangeItem("8");}} className="image-button">
                <img src={`./Ex_glasses/v8.png`} alt="Button Image" className="button-image" />
            </button> 
            <button onClick={() => {this.handleChangeItem("9");}} className="image-button">
                <img src={`./Ex_glasses/v9.png`} alt="Button Image" className="button-image" />
            </button> 
            
            </div>
        </div>
    </div>
    </div>
    )
  }
}

import React, { Component } from 'react';

class Exercice5 extends React.Component {
    state = {
        firstVal: 0,
        secondVal: 0
    };

    updateInputValue = evt => {
        const { name, value } = evt.target;
        this.setState({
            [name]: parseInt(value)
        });
    };

    add = () => {
        const { firstVal, secondVal } = this.state;
        alert("La somme est " + (firstVal + secondVal));
    };

    substract = () => {
        const { firstVal, secondVal } = this.state;
        alert(" La differance est " + (firstVal - secondVal));
    };


    multip = () => {
        const { firstVal, secondVal } = this.state;
        alert(" Le total est  " + (firstVal * secondVal));
    };

    render() {
        return (
            <div>
                <input
                    placeholder="first value"
                    value={this.state.inputValue}
                    name="firstVal"
                    onChange={evt => this.updateInputValue(evt)}
                />
                <input
                    placeholder="second value"
                    value={this.state.inputValue}
                    name="secondVal"
                    onChange={evt => this.updateInputValue(evt)}
                />
                <button onClick={this.add}>+</button>
                <button onClick={this.substract}>-</button>
                <button onClick={this.multip}>x</button>
            </div>
        );
    }
}

export default Exercice5;





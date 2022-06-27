import React, { Component } from 'react';


class Exercice1 extends React.Component {

    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <h1>Exercice 1</h1>
                <form>
                    <label>Enter text</label>
                    <input type="text"
                           onChange={this.onInputChange}/>
                </form>
            </div>
        );
    }
}

export default Exercice1;
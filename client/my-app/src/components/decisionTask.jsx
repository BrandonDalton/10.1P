import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default class DecisionTask extends React.Component {
    render() {
        return (
            <div className={'selectTask'}>
                <div className={'title'}>
                <h1>New Requester Task</h1>
            </div>
            <div className={'checkBoxes'}>
                <div>
                    <h3>Decision Task:</h3>
                </div>
                <div>
                    <label for="decisionTask1"> Decision #1</label>
                    <label for="decisionTask1"> True:</label>
                    <input type="radio" id="decisionTask1" name="decisionTask1" value="true" onChange={this.props.onChangeValue}></input>
                    <label for="decisionTask1">False:</label>
                    <input type="radio" id="decisionTask1" name="decisionTask1" value="false" onChange={this.props.onChangeValue}></input>
                </div>
                <div>
                    <label for="decisionTask2"> Decision #2</label>
                    <label for="decisionTask2"> True:</label>
                    <input type="radio" id="decisionTask2" name="decisionTask2" value="true" onChange={this.props.onChangeValue}></input>
                    <label for="decisionTask2"> False:</label>
                    <input type="radio" id="decisionTask2" name="decisionTask2" value="false" onChange={this.props.onChangeValue}></input>
                </div>
                <div>
                    <label for="decisionTask3"> Decision #3</label>
                    <label for="decisionTask3"> True:</label>
                    <input type="radio" id="decisionTask3" name="decisionTask3" value="true" onChange={this.props.onChangeValue}></input>
                    <label for="decisionTask3"> False:</label>
                    <input type="radio" id="decisionTask3" name="decisionTask3" value="false" onChange={this.props.onChangeValue}></input>
                </div>
            </div>
        </div>
        )
    }
}


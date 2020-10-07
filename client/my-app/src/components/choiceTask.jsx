import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default class ChoiceeTask extends React.Component {
    render() {
        return (
            <div className={'selectTask'}>
                <div className={'title'}>
                <h1>New Requester Task</h1>
            </div>  
                <div className={'checkBoxes'}>
                    <div>
                        <h3>Choice Task:</h3>
                    </div>
                    <div>
                        <input type="checkbox" id="choiceTask1" name="task" value="choiceTask1" onChange={this.props.onChangeValue}></input>
                        <label for="choiceTask"> Choice #1</label>
                    </div>
                    <div>
                        <input type="checkbox" id="choiceTask2" name="task" value="choiceTask2" onChange={this.props.onChangeValue}></input>
                        <label for="choiceTask"> Choice #2</label>
                    </div>
                    <div>
                        <input type="checkbox" id="choiceTask3" name="task" value="choiceTask3" onChange={this.props.onChangeValue}></input>
                        <label for="choiceTask"> Choice #3</label>
                    </div>
                </div>
            </div>
        )
    }

}



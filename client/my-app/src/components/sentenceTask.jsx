import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default class SentenceTask extends React.Component {
    render() {
        return (
            <div className={'selectTask'}>
                <div className={'title'}>
                <h1>New Requester Task</h1>
            </div>
                        <div className={'checkBoxes'}>
                            <div>
                                <h3>Sentence Task:</h3>
                            </div>
                            <div>
                                <label for="setenceTask"> Sentence Input:</label>
                                <input type="text" id="sentenceTask" name="sentenceTask" onChange={this.props.onChangeValue}></input>
                            </div>
                        </div>
                    </div>
        )
    }
}



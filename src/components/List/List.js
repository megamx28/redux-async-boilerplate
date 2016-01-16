import React, { Component, PropTypes } from 'react'

export default class List extends Component {
    static propTypes: {
        items: React.PropTypes.array.isRequired,
        displayKey: React.PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ol>
                {this.props.items.map((item, index) => {
                    return <li key={index}>{item[this.props.displayKey]}</li>
                })}
            </ol>
        )
    }
}
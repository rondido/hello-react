import React, { Component } from 'react';

class Myname extends Component {
    render() {
        return (
            <div>
                안녕하세요! 제이름은 {this.props.rol}입니다.
            </div>
        );
    }
}

export default Myname;

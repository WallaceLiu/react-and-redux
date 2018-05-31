import React, {Component} from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                {[
                    <span>React.js </span>,
                    <span>is </span>,
                    <span>good</span>
                ]}
            </div>
        )
    }
}

export default Index;
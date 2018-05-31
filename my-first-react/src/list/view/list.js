import React, {Component} from 'react';
import {view as ListOne} from '../../listOne'
import {view as ListTwo} from '../../listTwo'
import {view as ListThree} from '../../listThree'
import {view as ListFour} from '../../listFour'

class Index extends Component {
    render() {
        return (
            <div>
                <ListOne/>
                <hr/>
                <ListTwo/>
                <hr/>
                <ListThree/>
                <hr/>
                <span>four</span>
                <ListFour/>
            </div>
        )
    }
}

export default Index;
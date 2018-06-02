import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions.js';

// Link组件，过滤待办事项状态
// 与Link.propTypes对应
const Link = ({active, children, onClick}) => {
    console.log('enter Link of active...',children)
    if (active) {
        return <b className="filter selected">{children}</b>;
    } else {
        return (
            <a href="#" className="filter not-selected" onClick={(ev) => {
                ev.preventDefault();
                onClick();
            }}>
                {children}
            </a>
        );
    }
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    console.log('enter Link mapStateToProps...')
    return {
        active: state.filter === ownProps.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);

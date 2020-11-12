import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';


const PostItem = props => {
    return (
        <div>
            
        </div>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ 
    auth:state.auth
});

export default connect(mapStateToProps, {})(PostItem)

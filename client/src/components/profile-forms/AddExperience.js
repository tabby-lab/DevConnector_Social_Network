import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom';


const AddExperience = props => {
    return (
        <div>
            
        </div>
    )
}

AddExperience.propTypes = {
addExperience: PropTypes.func.isRequired
}

export default connect(null, {addExperience})(AddExperience)

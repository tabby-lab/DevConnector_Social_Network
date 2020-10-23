import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom';


const AddExperience = props => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
     });
     
    return (
        <Fragment>
             <h1 class="large text-primary">
       Add An Experience
      </h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form class="form">
        <div class="form-group">
          <input type="text" placeholder="* Job Title" name="title" required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="* Company" name="company" required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Location" name="location" />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" />
        </div>
         <div class="form-group">
          <p><input type="checkbox" name="current" value="" /> Current Job</p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" />
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
        </Fragment>
    )
}

AddExperience.propTypes = {
addExperience: PropTypes.func.isRequired
}

export default connect(null, {addExperience})(AddExperience)

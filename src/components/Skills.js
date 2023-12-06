import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from './Button';
import { connect } from 'react-redux';
import { addSkill, fetchSkills, deleteSkill } from '../actions/skillActions';

function Skills(props) {
    const { skills, addSkill, fetchSkills } = props;
    const [localSkills, setLocalSkills] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [skillToDelete, setSkillToDelete] = useState('');
    const [showDelete, setShowDelete] = useState(false);
    const initialValues = {
        name: '',
        range: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Skill name is a required field'),
        range: Yup.number()
            .typeError('Skill range must be a number')
            .required('Skill range is a required field')
            .min(10, 'Skill range must be greater than or equal to 10')
            .max(100, 'Skill range must be less than or equal to 100'),
    });

    useEffect(() => {
        fetchSkills();
        const storedSkills = JSON.parse(localStorage.getItem('localSkills')) || [];
        setLocalSkills(storedSkills);
    }, []);


    const handleSubmit = (values, { resetForm, setSubmitting }) => {
        const newSkills = [...localSkills, values];
        localStorage.setItem('localSkills', JSON.stringify(newSkills));
        setLocalSkills(newSkills);
        resetForm();
        setSubmitting(false);
    };
    
    const handleDelete = () => {
        const updatedLocalSkills = localSkills.filter(skill => skill.name !== skillToDelete);
        localStorage.setItem('localSkills', JSON.stringify(updatedLocalSkills));
        setLocalSkills(updatedLocalSkills);
        deleteSkill(skillToDelete);
        fetchSkills()
        setSkillToDelete('');
    };


    const allSkills = [...skills, ...localSkills];
    return (
        <>
            <div className='skill-header'>
                <h1>Skills</h1>
                <div>
                <Button color='black' icon="fa-pen-to-square" text="Show Form" textColor="white" onClick={() => setShowForm(!showForm)} />
                <Button color='black' icon="fa-delete-left" text="Delete" textColor="white" onClick={() => setShowDelete(!showDelete)} />
                </div>
            </div>
            
            {showForm && (
                <div className='skill-form'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div>
                                    <div className='skill-form-div'>
                                        <label htmlFor="name">Skill Name:</label>
                                        <div className='skill-input'>
                                            <Field type="text" id="name" name="name" />
                                        </div>
                                    </div>

                                    <ErrorMessage name="name" component="div" />
                                </div>
                                <div>
                                    <div className='skill-form-div'>
                                        <label htmlFor="range">Skill Range:</label>
                                        <div className='skill-input'>
                                            <Field type="number" id="range" name="range" />
                                        </div>
                                    </div>
                                    <ErrorMessage name="range" component="div" />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    color="black"
                                    textColor='white'
                                    text="Add Skill"
                                    onClick={() => handleSubmit}
                                />
                            </Form>
                        )}
                    </Formik>
                </div>
            )}
            {showDelete && (
                <div>
                    <input
                        type="text"
                        value={skillToDelete}
                        onChange={(e) => setSkillToDelete(e.target.value)}
                        placeholder="Enter skill name to delete"
                    />
                    <Button onClick={handleDelete} text="Delete Skill" />
                </div>
            )}
            <div>
                <ul className='skill-list'>
                    {allSkills && allSkills.length > 0 ? (
                        allSkills.map((skill, index) => (
                            <li key={index}>
                                <div className='skill-range' style={{ width: `${skill.range}%` }}>{skill.name}</div>
                            </li>
                        ))
                    ) : (
                        <p>Loading skills...</p>
                    )}
                </ul>
                <div className='skill-list-footer'>
                    <hr className='skill-list-footer-line' />
                    <ul className='skill-list-footer-text'>
                        <li>Beginer</li>
                        <li>Proficient</li>
                        <li>Expert</li>
                        <li>Master</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        skills: state.skills.skills
    };
};

export default connect(mapStateToProps, { addSkill, fetchSkills })(Skills);
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Home.css';

const validationSchema = Yup.object({
    task: Yup.string()
        .min(5, 'Завдання повинно містити не менше 5 символів')
        .required('Це поле обов’язкове'),
});

const Home = () => {
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <h2>TODO List</h2>
            <Formik
                initialValues={{ task: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    setTodos([...todos, values.task]);
                    resetForm();
                }}
            >
                <Form>
                    <Field name="task" placeholder="Введіть задачу" />
                    <ErrorMessage name="task" component="div" className="error" />
                    <button type="submit">Додати</button>
                </Form>
            </Formik>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

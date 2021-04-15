import React from 'react';

const Form = () => {
    return (
        <div>
                <div>
                    <label for="first-name">First name</label>
                    <input type="text" id="first-name"/>
                </div> 
                <div>
                    <label for="last-name">Last name</label>
                    <input type="text" id="last-name"/>
                </div> 
                <div>
                    <label for="phone">Phone number</label>
                    <input type="text" id="phone"/>
                </div> 
                <div>
                    <label for="role">Role</label>
                    <select id="role">
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="other">Other</option>
                    </select>
                </div> 
                <div>
                    <label for="message">Message</label>
                    <textarea id="message" cols="30" rows="4"/>
                </div> 
            </div>
    );
};

export default Form;
import React from 'react';

const Form = () => {
    return (
        <div>
                <div>
                    <label htmlFor="firstname">First name</label>
                    <input type="text" name="firstname" id="firstname"/>
                </div> 
                <div>
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" name="lastname" id="lastname"/>
                </div> 
                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" name="phone" id="phone"/>
                </div> 
                <div>
                    <label htmlFor="role">Role</label>
                    <select name="role" id="role">
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="other">Other</option>
                    </select>
                </div> 
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="4"/>
                </div> 
            </div>
    );
};

export default Form;
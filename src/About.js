import React from 'react';
 
class About extends React.Component {
  render() {
    return (
        <div className="About">
            <h1>I am a Module 4 Student Here at Flatiron School!</h1>
            <img width="300" height="300" alt="me" src="https://media-exp1.licdn.com/dms/image/C4E03AQHSB9f5XGoeGQ/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=cv-y7ujvr6h5f9E5cvw1vTJ9An6ZdWk1lL2opTRapsk" />
            <br></br>
            <a href="https://www.linkedin.com/in/bgubitosa/" target="_blank"  rel="noopener noreferrer" >Follow Me on Linkedin</a>
            <br></br>
            <a href="https://github.com/brandongubitosa" target="_blank" rel="noopener noreferrer" >Here is My GitHub Repo</a>
        </div>
    ) 
  }
}
 
export default About;
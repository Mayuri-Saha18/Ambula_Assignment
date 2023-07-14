import React from 'react'
import "./About.css"

const About = () => {

  return (
    
    <div className="about">

        <h1>About the Todo App</h1>

                <p>
                    The Todo App is a simple and intuitive task management tool designed to help you stay organized and productive. 
                    It allows you to create a list of tasks, mark them as completed, and remove them as needed.
                </p>

                <p>
                    Our mission is to provide a user-friendly interface that helps you manage your daily tasks efficiently. 
                    Whether you are organizing your personal to-do list or collaborating with a team, the Todo App can streamline your workflow.
                </p>

                <h2>Features:</h2>

                <ul>

                        <li>Create tasks with detailed descriptions</li>
                        <li>Mark tasks as completed</li>
                        <li>Remove tasks from the list</li>
                        <li>Track the total number of tasks and completed tasks</li>
                        
                </ul>


                <h2>Meet the Team:</h2>

                <p>
                    Our dedicated team of developers has worked hard to bring you this reliable and user-friendly Todo App.
                    We are passionate about creating useful tools that simplify your life and boost your productivity.
                </p>

                <p>
                    We hope you enjoy using the Todo App and that it helps you stay organized and accomplish your goals.
                    Thank you for choosing our app!
                </p>

    </div>

  )
}

export default About
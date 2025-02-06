import { nanoid } from "nanoid"
import { FaHtml5, FaJs, FaReact } from "react-icons/fa"
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
]

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
]

export const projects = [
  {
    id: nanoid(),
    img: "./../public/Bmi Calculator.png",
    url: "https://bmi-calculator-5ad32.web.app/",
    github: "https://github.com/Hellshot0/Bmi-Calculator",
    title: "BMI Calculator",
    text: "This project demonstrates proficiency in React, state management (e.g., using useState), handling user inputs, and creating clean, functional UIs. It's a great example of translating user requirements into a functional, user-friendly app.",
  }, 
  {
    id: nanoid(),
    img: "./../public/weather app.png",
    url: "https://weather-app-e113d.web.app/",
    github: "https://github.com/Hellshot0/WeatherApp",
    title: "Weather Forecast",
    text: "The Weather Forecast app is an interactive web application built using React that provides real-time weather data for any city. It fetches data from the OpenWeatherMap API and displays current weather conditions in a clean, user-friendly interface."
  }

]

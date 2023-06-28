const skills = [
    {id: 111, skill: 'HTML', learned: true, description: 'HTML (Hypertext Markup Language) is the standard language for creating web pages, using tags to define their structure and content. It allows the inclusion of text, images, links, and other elements to build interactive and visually appealing websites.'},
    {id: 222, skill: 'CSS', learned: true, description: 'CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation and visual appearance of HTML elements on a webpage. It defines how elements should be displayed, including layout, colors, fonts, and other design aspects.'},
    {id: 333, skill: 'Javascript', learned: true, description: 'JavaScript (JS) is a programming language that enables interactivity and dynamic behavior on web pages. It allows you to add functionality, manipulate HTML elements, handle events, make API requests, and perform calculations, enhancing the user experience and adding interactivity to websites.'},
    {id: 444, skill: 'React', learned: false, description: 'React is a JavaScript library used for building user interfaces in web applications. It allows you to create reusable UI components and efficiently update the user interface as the data changes, resulting in fast and interactive web experiences.'},
    {id: 555, skill: 'Python', learned: false, description: 'Python is a high-level programming language known for its simplicity and readability. It is widely used for web development, data analysis, machine learning, and more. Pythons extensive libraries and frameworks, such as Django, make it a popular choice for developing scalable and robust web applications.'},
    {id: 666, skill: 'Django', learned: false, description: 'Django is a high-level Python web framework that follows the Model-View-Controller (MVC) architectural pattern. It provides a convenient and efficient way to build web applications by handling common web development tasks, such as URL routing, database management, form handling, and user authentication, allowing developers to focus on writing application logic.'}

  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return skills;
  }

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
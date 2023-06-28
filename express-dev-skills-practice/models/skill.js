const skills = [
    {id: 111, skill: 'HTML', learned: true},
    {id: 222, skill: 'CSS', learned: true},
    {id: 333, skill: 'Javascript', learned: true},
    {id: 444, skill: 'React', learned: false},
    {id: 555, skill: 'Python', learned: false},
    {id: 666, skill: 'Django', learned: false}

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
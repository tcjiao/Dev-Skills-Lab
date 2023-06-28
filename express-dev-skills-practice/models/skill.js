const skills = [
    {id: 111, skill: 'HTML', learned: true},
    {id: 222, skill: 'CSS', learned: false},
    {id: 333, skill: 'Javascript', learned: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }
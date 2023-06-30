const skills = [
    {id: 111111, skill: 'HTML', learned: true},
    {id: 222222, skill: 'CSS', learned: true},
    {id: 333333, skill: 'Javascript', learned: true},
    {id: 444444, skill: 'React', learned: false},
    {id: 555555, skill: 'Python', learned: false},
    {id: 666666, skill: 'Django', learned: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };

  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    skill.skill = updatedSkill.skill;
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }


	
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.learned = false;
    skills.push(skill);
  }

  function getAll() {
    return skills;
  }

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
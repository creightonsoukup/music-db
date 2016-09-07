var knex = require('./knex');

function Houses() {
  return knex('houses')
}

function Students() {
  return knex('students')
}

function Potronus() {
  return knex('students').select('patronus')
}


module.exports = {
  Houses: Houses,
  Students: Students,
  Potronus: Potronus,
  getStudentByName: function(name) {
    return Students().where('name',name)
  },
  insertNewStudent: function(name, house_id, year, patronus) {
    return Students().insert({
      name: name,
      house_id: house_id,
      year: year,
      patronus: patronus
    })
  },
  deleteStudent: function(name) {
    return Students()
      .where('name', name)
      .del()
  }
}


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('parent').insert('Bathsheda Babbling'),
        knex('parent').insert('Cuthbert Binns'),
        knex('parent').insert('Charity Burbage'),
        knex('parent').insert('Filius Flitwick'),
        knex('parent').insert('Wilhelmina Grubbly-Plank'),
        knex('parent').insert('Minerva McGonagall'),
        knex('parent').insert('Severus Snape'),
        knex('parent').insert('Pomona Sprout'),
        knex('parent').insert('Sybill Trelawney'),
        knex('parent').insert('Septima Vector'),
        knex('parent').insert('Libatius Borage'),
        knex('parent').insert('Leonardo da Vinci'),
        knex('parent').insert('Aurora Sinistra'),
        knex('parent').insert('Wilkie Twycross'),
        knex('parent').insert('Katarina Cremin'),
        knex('parent').insert('Madam Hooch'),
        knex('parent').insert('Alastor Moody'),
        knex('parent').insert('Adalbert Waffling')
      ]);
    });
};

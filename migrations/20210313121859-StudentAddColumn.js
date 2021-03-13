'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all ([ 
      queryInterface.addColumn(
      'students', // table name
      'gender', // new field name/ attribute name
       {  // attribute definition
       type: Sequelize.STRING
       },
      ), 
      queryInterface.addColumn(
        'students', 
        'quiz',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )
    ])   
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all ([
      queryInterface.removeColumn('students', 'gender'),
      queryInterface.removeColumn('students', 'age'),
    ]);  
  }
};
// const boom = require('@hapi/boom');

const { models } = require('../../libs/sequelize');


class EmployeeService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    return [];
  }

  async findOne(phoneNumber) {
    
    // const employee = await models.Employee.findOne({
    //   where:{ phoneNumber}
    // });

    // console.log(phoneNumber)
    // if (employee === null) { throw boom.notFound('User not found'); }
     
    // return employee;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = EmployeeService;

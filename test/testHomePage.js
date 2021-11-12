const chai = require('chai')

const chaiHttp = require('chai-http')

const server = require('../app')

chai.should()

chai.use(chaiHttp)

describe('Task api',() => {
    describe('get welcome page',() => {
        it('should return success true as json',() => {
            chai.request(server)
            .get('/welcome')
             .then((err,res) => {
                 res.should.have.status(200)
             })
        })
    })
})
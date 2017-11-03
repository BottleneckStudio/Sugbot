var chai = require('chai');
var should = chai.should;
var expect = chai.expect;
var chaiHttp = require('chai-http');

var app = require("../app");

chai.use(chaiHttp)

describe('User Routes', function () {
    it('error should be null on index route', function () {
        chai.request(app)
            .get('/')
            .end(function (err, res) {
                expect(err).to.be.null
            })
    });

    it('should have a status code of 200 on index route', function () {
        chai.request(app)
            .get('/')
            .end(function (err, res) {
                expect(res).to.have.status(200)
            })
    })
})
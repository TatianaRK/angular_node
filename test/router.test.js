var should = require('should');
var assert = require('assert');
var supertest = require('supertest');

var app = require("../app").app;

var api = supertest('http://localhost:3000');

describe("SAMPLE unit test", function() {


    it("should return 404", function(done) {
        api.get("/random")
        .expect(404)
        .end(function(err, res) {
            res.status.should.equal(404);
            done();
        });
    });

     it("should authorise correct", function(done) {
        api.post("/api/login")

        .send({ login: "antoxa", password: "123456"})
        .set('Content-Type', 'application/json')
        .expect(200)
        .end(function(err, res) {
             res.body.message.should.equal('success');
             done();
        });
      });

    /*it("should registration correct", function(done) {
        api.post("/api/signup")

            .send({
                loginuser: "cccc",
                password: "123456",
                client: {
                    nameuser: "ccc",
                    surname: "aaaaaa",
                    lastname: "aaaaaa",
                    mail: "cccc@cccc.ru",
                    phone: "11111"
            }})
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(function(err, res) {
                res.body.status.should.equal(200);
                res.body.message.should.equal('User register');
                done();
            });
    });*/

    it("should return users", function (done) {
        api.get('/api/users')
            .expect(200)
            .end(function (err, res) {
                res.body.listUsers.should.not.equal('undefined');
                done();
            });
    })

});
'use strict';
process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);


describe('Pagina Principal', function() {
    it('Check Status 200', function (done) {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
        });

    it('Check Return Welcome to PicApp web services.', function (done) {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                res.body.message.should.equal('Welcome to PicApp web services.');
                done();
            });
        });

    // it('Check Status 200', function (done) {
    //     chai.request(server)
    //     .post('/api/user/super')
    //     .set('content-type', 'application/json')
    //     .send({"username": "superuser",
    //       "password": "steelsoft",
    //       "id": "0",
    //       "_rev": "asd",
    //       "applicationOwner": "grupo3"})
    //     .end(function (err, res) {
    //         res.should.have.status(200);
    //         done();
    //         });
    //     });

      /*it('Check Status 200', function (done) {
          chai.request(server)
              .get('/api/users')
              .end(function (err, res) {
                  res.should.have.status(200);
                  done();
              });
          });


        it('Check Status 200', function (done) {
            chai.request(server)
            .post('/api/user/super')
            .set('content-type', 'application/json')
            .send({"username": "superuser",
              "password": "steelsoft",
              "id": "0",
              "_rev": "asd",
              "applicationOwner": "grupo3"})
            .end(function (err, res) {
                res.should.have.status(200);
                done();
                });
            });
            */
});

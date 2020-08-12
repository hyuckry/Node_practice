const assert = require('assert')
const should = require('should')
const request = require('supertest')
const app = require('./index.js')


describe('GET /users',()=>{
    describe('성공',()=>{
        it('배열을 반환한다.',(done)=>{
            //assert.equal(1,1);
            //(1).should.equal(0);
            request(app)
                .get('/users')
                .end((err,res)=>{
                    if(err) throw err;
                    console.log(res.body);
                    var user = res.body.should.be.instanceof(Array)
                    res.body.forEach(user=>{
                        user.should.be.have.property('name');
                    })
                    done();
                })
        })
        it('최대 리밋 갯수만큼 응답한다.', done => {
            request(app)
                .get('/users?limit=2') 
                .end((err,res)=>{
                    res.body.should.have.lengthOf(2)
                    done();
                })
        })
    });
    describe('실패',()=>{
        it('limit이 정수가 아니면 400응답', done=>{
            request(app)
                .get('/users?limit=one')
                .expect(400)
                .end(done)
        })
    }); 
})

describe('GET /users/:id',()=>{
    describe('성공',()=>{
        it('유저 객체를 반환', done=>{
            request(app)
                .get('/users/2')
                .end((err, res)=>{
                    res.body.should.have.property('id',2);
                    done();
                })
        })
    })
    describe('실패',()=>{ 
        it('id 정수가 아니면 400응답', done=>{
            request(app)
                .get('/users/one')
                .expect(400)
                .end(done)
        })
        it('id 없으면 404응답', done=>{
            request(app)
                .get('/users/5')
                .expect(404)
                .end(done)
        })
    })
});
describe('DELETE /users/:id',()=>{
    describe('성공',()=>{
        it('204 response!', done=>{
            request(app)
                .delete('/users/2')
                .expect(204)
                .end(done)
        })
    })
    describe('실패',()=>{ 
        it('id 정수가 아니면 400응답', done=>{
            request(app)
                .delete('/users/one')
                .expect(400)
                .end(done)
        })
        it('id 없으면 404응답', done=>{
            request(app)
                .delete('/users/5')
                .expect(404)
                .end(done)
        })
    })
})

describe('POST /users',()=>{
    describe('성공',()=>{
        it('201 response!', done=>{
            request(app)
                .post('/users')
                .send({name: 'Daniel'})
                .expect(201)
                .end((err,res)=>{
                    res.body.should.have.property('name', 'Daniel');
                    done();
                })
        }) 
    })
    describe('실패',()=>{ 
        it('name이 없으면 400응답', done=>{
            request(app)
                .post('/users').send({})
                .expect(400)
                .end(done)
        })
        it('name이 중복이면 409응답', done=>{
            request(app)
                .post('/users')
                .send({name: 'Alice'})
                .expect(409)
                .end(done)
        })
    })
})
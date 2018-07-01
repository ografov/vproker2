import mongoose from 'mongoose'
import mockgoose from 'mockgoose'
import { expect } from 'chai'

import User from '../../src/models/User'

describe("User", ()=> {

  before(done => {
    mockgoose(mongoose).then(() => {
      mongoose.connect('mongodb://example.com/TestingDB', done)
    })
  })

  after(done => {
    mockgoose.reset(done)
  })

  it("should be retrieved after saved", () => {
    const user = new User({ name: 'pepito' })

    return user.save()
        .then(() => User.find()
            .then(users => {
              expect(users).not.to.be.equal(undefined)
              expect(users.length).to.be.equal(1)
              expect(users[0]).to.be.have.property('name', 'pepito')
            })
        )
  })

})
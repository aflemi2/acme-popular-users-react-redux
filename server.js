const express = require('express');
const app = express();
const path = require('path');

app.use(require('body-parser').json());
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/vendor', express.static(path.join(__dirname, '')));
app.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/users', (req, res, next)=> {
  User.findAll()
  .then( users => res.send(users))
  .catch(next);
});

app.post('/api/users', (req, res, next)=> {
  User.create(req.body)
  .then( user => res.send(user))
  .catch(next);
});

app.put('/api/users/:id', (req, res, next)=> {
  User.findById(req.params.id)
  .then( user => {
    Object.assign(user, req.body);
    return user.save();
  })
  .then( user => res.send(user))
  .catch(next);
});

app.delete('/api/users/:id', (req, res, next)=> {
  User.findById(req.params.id)
  .then( user => user.destroy())
  .then( ()=> res.sendStatus(204))
  .catch(next);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on ${port}`));

const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/my_db');

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  rating: Sequelize.INTEGER
});

conn.sync({ force: true })
.then( ()=> Promise.all([
  User.create({ name: 'Goku', rating: 9001}),
  User.create({ name: 'Gohan', rating: 10}),
  User.create({ name: 'Moe', rating: 5000}),
]));

module.exports = {
  User
};

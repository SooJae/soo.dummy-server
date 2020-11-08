const generator = require('./lib/generator');
const fs = require('fs');

if(fs.existsSync('data.json')) {
  fs.unlinkSync('data.json');
}

const post = {
  id: 'id',
  name: 'name.findName',
  title: 'lorem.sentence',
  shortContent: 'lorem.paragraph',
  longContent: 'lorem.paragraphs(3)',
  createdAt: 'date.past',
  updatedAt: 'date.recent',
  image: 'image.imageUrl(400/420)',
  views: 'random.number',
  comment: [{
    title: 'lorem.sentence',
    name: 'name.findName',
    createdAt: 'date.past',
    updatedAt: 'date.recent',
  }, 4],
  avatar: {
    id: 'random.uuid',
    name: 'name.findName',
    avatar:'image.avatar'
  }
}

const user = {
  id: 'id',
  name: 'name.findName',
  birthDay:'date.past',
  email: 'internet.email'
}

generator(post, 2,'post');
generator(user, 3,'user');


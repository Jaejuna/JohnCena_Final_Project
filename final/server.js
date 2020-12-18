const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res) => {
  res.send([
    {
    'id' : '1',
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '이철수',
    'birthday' : '951208',
    'gender' : '남자',
    'job' : '대학생',
  },
  {
    'id' : '2',
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '정짱구',
    'birthday' : '990809',
    'gender' : '남자',
    'job' : '개발자',
  },
  {
    'id' : '3',
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '김맹구',
    'birthday' : '990424',
    'gender' : '남자',
    'job' : '디자이너',
  }]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
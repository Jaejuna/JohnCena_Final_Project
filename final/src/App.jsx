import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = [{
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
}
]

class App extends Component{
  render(){
  return (
    <div>
      { customer.map(c => {
          return (
            <Customer
            key = {c.id}
            id = {c.id}
            image = {c.image}
            name = {c.name}
            birthday = {c.birthday}
            gender = {c.gender}
            job = {c.job}
            />
          )})}
    </div>
  );}}

export default App;

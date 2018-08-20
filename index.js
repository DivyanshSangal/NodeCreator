var uniqid = require('uniqid');
var crypto = require('crypto');
var express = require('express');
var bodyParser = require('body-parser');
var Encrypt=  require('./encrypter');

var app = express();
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function (req, res) {
  res.sendfile('./public/index.html');
})
app.get('/create-node', function (req, res) {
  res.sendfile('./public/create-node.html');
})
app.get('/create-user', function (req, res) {
  res.sendfile('./public/create-user.html');
})
app.get('/add-node', function (req, res) {
  res.sendfile('./public/add-node.html');
})
app.get('/delete-node', function (req, res) {
  res.sendfile('./public/delete-node.html');
})
app.get('/transfer-node', function (req, res) {
  res.sendfile('./public/transfer-node.html');
})
app.get('/merge-node', function (req, res) {
  res.sendfile('./public/merge-node.html');
})
 
app.post('/myaction', function(req, res) {
	console.log("I was here");
  res.send('You sent the name "' + req.body.name + '".');
});

class Person{
	constructor(name,address,mobile,value){
		this.name=name;
		this.address=address;
		this.mobile=mobile;
		this.value=value;
	}


}

let NodeNumber=0; // will come from db;

class Node{
	constructor(){

	  this.dateTime= (new Date).getTime();
	  this.NodeId=uniqid();

	  this.childNodeId=[];
	}

}


function createNode(name,address,mobile,value){
  let obj=new Node();
  let data=new Person(name,address,mobile,value);

  obj.data=Encrypt.encrypt(data,obj.NodeId);
  obj.NodeNumber=NodeNumber;
  NodeNumber+=1;
  // store obj in database
  return obj;
}


obj=createNode("aman","Delhi","83718312","12");
console.log(obj);

obj.data=Encrypt.decrypt(obj.data,obj.NodeId);
console.log(obj);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
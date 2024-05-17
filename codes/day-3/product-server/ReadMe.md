###
GET ALL request: 
http://localhost:3000/products
reponse: all product objects as part of a JSON array

###
GET single request:
request: http://localhost:3000/products/1
response: a product object

###
add product request:
request: http://localhost:3000/products
through request body send a json object (product)
response: same product object which is added

###
update product request:
request: http://localhost:3000/products/1
through request body send a json object (product)
response: same product object which is updated

###
delete product request:
request: http://localhost:3000/products/1
response: same product object which is deleted
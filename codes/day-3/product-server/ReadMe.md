###
get all products request: 
Method: GET
URL: http://localhost:3000/products
request data: None
reponse: all product objects as part of a JSON array

###
GET single product request:
Method: GET
URL: http://localhost:3000/products/1
request data: a product id with the url
response: a product object

###
add product request:
Method: POST
URL: http://localhost:3000/products
request data: through request body send a json object (product)
response: same product object which is added

###
update product request:
Method: PUT
URL: http://localhost:3000/products/1
request data: through request body send a json object (product)
response: same product object which is updated

###
delete product request:
Method: DELETE
URL: http://localhost:3000/products/1
request data: a product id with the URL
response: same product object which is deleted
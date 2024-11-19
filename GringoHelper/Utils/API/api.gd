# Para usar este script hay que agregar la escena API a la escena donde se quiera utilizar y 
# relacionarlo al script que lo quiera invocar (un botton por ejemplo)
class_name Api extends HTTPRequest

@onready var http_request = $"."

const DOMAIN = 'http://localhost:3000/'
const HEADERS = ["Content-Type: application/json"]

func _on_send_request(path: String, method: String = 'GET', body = null):
	var url = DOMAIN + path
	var data = null
	if body:
		data = JSON.stringify(body)
	match method:
		'GET':
			print('get method', url)
			http_request.request(url, HEADERS, HTTPClient.METHOD_GET)
		'POST':
			print('post method')
			http_request.request(url, HEADERS, HTTPClient.METHOD_POST, data)
		'PUT':
			print('put method')
			http_request.request(url, HEADERS, HTTPClient.METHOD_PUT, data)
		'DELETE':
			print('delete method')
			http_request.request(url, HEADERS, HTTPClient.METHOD_DELETE, data)
			

func _on_request_completed(result, response_code, headers, body):
	print(body.get_string_from_utf8()) # Replace with function body.

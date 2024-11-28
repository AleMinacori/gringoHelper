# Para usar este script hay que agregar la escena API a la escena donde se quiera utilizar y 
# relacionarlo al script que lo quiera invocar (un botton por ejemplo)
class_name Api extends HTTPRequest

@onready var http_request = $"."

const DOMAIN = 'http://localhost:3000/'
const HEADERS = ["Content-Type: application/json"]

signal _on_request_success

var result
var response_code
var headers
var body

func _list(path: String):
	_on_send_request(path, HTTPClient.METHOD_GET)

func _create(path: String, body):
	_on_send_request(path, HTTPClient.METHOD_POST, body)

func _update(path: String, body):
	_on_send_request(path, HTTPClient.METHOD_PUT, body)

func _delete(path: String, body):
	_on_send_request(path, HTTPClient.METHOD_DELETE, body)

func _on_send_request(path: String, method, body = null):
	var url = DOMAIN + path
	var data = null
	if body:
		data = JSON.stringify(body)
		http_request.request(url, HEADERS, method, data)
	else:
		http_request.request(url, HEADERS, method)
	result = ''
	response_code = ''
	headers = ''
	body = ''

func _on_request_completed(_result, _response_code, _headers, _body):
	result = _result
	response_code = _response_code
	headers = _headers
	body = JSON.parse_string(_body.get_string_from_utf8())
	_on_request_success.emit()

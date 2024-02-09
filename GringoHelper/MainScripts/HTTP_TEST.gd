extends Button

@onready var http_request = $"../../../../../HTTPRequest"

const URL = "https://www.dnd5eapi.co"
var page := "/api"


func _on_pressed():
	http_request.request(URL + page) # Replace with function body.


func _on_request_completed(result, response_code, headers, body):
	print(body.get_string_from_utf8()) # Replace with function body.

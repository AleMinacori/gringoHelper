class_name Tile
extends Button

var _text: String
var image: Texture
var value: String

func _set_properties(_value: String, __text: String= "hola", _image: String = "res://Assets/img/icon-godot.svg"):
	value = _value
	_text = __text
	image = load(_image)

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	text = _text
	icon = image

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass


func _on_pressed() -> void:
	pass

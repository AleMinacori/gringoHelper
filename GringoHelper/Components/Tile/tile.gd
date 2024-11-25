class_name Tile
extends Control

@onready var imageContainer = get_node('Button/VBoxContainer/TextureRect')
@onready var label = get_node('Button/VBoxContainer/Label')

var text: String
var image: Texture

func _init(_text: String= "hola", _image: String = "res://Assets/img/icon-godot.svg"):
	text = _text
	image = load(_image)

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	label.text = text
	imageContainer.texture = image


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass


func _on_button_pressed() -> void:
	print(label.text)

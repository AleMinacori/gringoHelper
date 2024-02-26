class_name Lote extends BaseButton

var nombre: String = ""
var area: int = 0
var textureButton: TextureButton

# Called when the node enters the scene tree for the first time.
func _ready():
	add_child(textureButton)
	textureButton.connect('pressed', handle_pressed)

func handle_pressed():
	print(area)

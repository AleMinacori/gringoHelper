class_name Lote extends BaseButton

var nombre: String = ""
var area: int = 0
var textureButton: TextureButton

# Called when the node enters the scene tree for the first time.
func _ready():
	add_child(textureButton)
	textureButton.connect('pressed', handle_pressed)
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func handle_pressed():
	print(area)

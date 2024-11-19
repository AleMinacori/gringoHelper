class_name Forma extends VBoxContainer

@onready var nombre :LineEdit = $Nombre
@onready var area :LineEdit = $Area

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func _on_button_pressed():
	print(nombre.text)
	pass # Replace with function body.

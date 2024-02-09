class_name Form extends Control

@onready var nombre = $HBoxContainer/Nombre
@onready var area = $HBoxContainer/Area
@onready var v_box_container = $HBoxContainer/VBoxContainer

# Called when the node enters the scene tree for the first time.
func _ready():
	nombre.editable = false
	area.editable = false

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func _on_button_pressed():
	print(nombre.text)
	pass # Replace with function body.

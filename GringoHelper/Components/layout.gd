class_name Layout
extends Control

@onready var sidebar: Sidebar = get_node("HBoxContainer/Sidebar")
@onready var content = get_node("HBoxContainer/Content")

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
	# print(sidebar.optionSelected)

func _on_option_changed(option):
	print(option)

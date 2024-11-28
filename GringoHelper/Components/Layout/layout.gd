class_name Layout
extends Control

@onready var sidebar: Sidebar = get_node("HBoxContainer/Sidebar")
@onready var content: Content = get_node("HBoxContainer/Content")

# Called when the node enters the scene tree for the first time.
func _ready():
	sidebar._option_selected.connect(_on_option_changed)
	# content.hide()
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func _on_option_changed():
	var optionSelected = sidebar.optionSelected
	if (optionSelected):
		content.show()
		content._on_option_selected(sidebar.optionSelected)

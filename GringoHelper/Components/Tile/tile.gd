extends Control

@onready var imageContainer = $Button/VBoxContainer/PanelContainer
@onready var label = $Button/VBoxContainer/Label
@export var text: String
@export var image: String

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	label.text = text
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass

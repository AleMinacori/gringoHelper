extends Control

@onready var tile_board = $TileBoard
var campos = []

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	tile_board._add_tile({'text': 'hola', 'image': "res://Assets/img/icon-godot.svg"})
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass


func _set

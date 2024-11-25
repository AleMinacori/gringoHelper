class_name TileBoard
extends Control


# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass

func _add_tile(data: Dictionary):
	var tile_scene = load("res://Components/Tile/tile.tscn")
	var tile = tile_scene.instantiate()
	tile._init(data.text, data.image)
	self.add_child(tile)
	

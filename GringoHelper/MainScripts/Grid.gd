class_name Grid
extends Node2D

@export var width: int = 36
@export var height: int = 20
@export var cell_size: int = 32
@export var show_debug: bool = false

var grid: Dictionary = {}

func _input(event):
	if event is InputEventMouseButton:
		pass
		

func generate_grid():
	for x in width:
		for y in height:
			var button = CustomTile.new(str(Vector2(x,y)))
			button.position = grid_to_world(Vector2(x,y))
			button.size = Vector2(cell_size, cell_size)
			add_child(button)
			grid[Vector2(x,y)] = button

func grid_to_world(_pos: Vector2) -> Vector2:
	return _pos * cell_size

func world_to_grid(_pos: Vector2) -> Vector2:
	return floor(_pos / cell_size)

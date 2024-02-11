class_name Grid
extends Node2D

@export var width: int = 25
@export var height: int = 15
@export var cell_size: int = 32

enum states {DEFAULT, EDITING}

var grid: Dictionary = {}
var state = states.DEFAULT

var lotes: Array[Lote] = []

func _input(event):
	if event is InputEventMouseButton:
		pass
		
func generate_grid():
	for x in width:
		for y in height:
			var button = CustomTile.new(str(Vector2(x,y)))
			button.position = grid_to_world(Vector2(x,y))
			button.size = Vector2(cell_size, cell_size)
			button.disabled = true
			add_child(button)
			grid[Vector2(x,y)] = button

func grid_to_world(_pos: Vector2) -> Vector2:
	return _pos * cell_size

func world_to_grid(_pos: Vector2) -> Vector2:
	return floor(_pos / cell_size)

func toggle_state(newState):
	match newState:
		states.EDITING:
			state = states.EDITING
			toggle_custom_tile_state(false)
		states.DEFAULT:
			toggle_custom_tile_state(true)
			state = states.DEFAULT

func toggle_custom_tile_state(value: bool):
	for key in grid:
		grid[key].disabled = value

func _on_crear_lote_pressed():
	toggle_state(states.EDITING)

func _on_aceptar_pressed():
	var newLote = false
	for key in grid:
		if grid[key].button_pressed and grid[key].text == '':
			newLote = true
			grid[key].text = str(lotes.size())
	if newLote:
		var lote = Lote.new()
		lotes.append(lote)
	toggle_state(states.DEFAULT)


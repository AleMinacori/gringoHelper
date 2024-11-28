class_name ContentCampo extends Control

@onready var tile_board = $TileBoard
@onready var form = $FormCampo

var campos = []
var campo_selected

func _ready():
	form.hide()

func _set_campos_to_list(_campos):
	campos = _campos
	for campo in campos:
		tile_board._add_tile(str(campo.id), campo.name, campo.image)
	tile_board._add_tile('0', 'Nuevo', "res://Assets/img/icon-godot.svg")
	for tile in tile_board.get_children(false):
		tile.connect("pressed", _on_campo_selected.bind(tile.value))

func _on_campo_selected(id):
	tile_board.hide()
	if (id == '0'):
		form.show()
	else:
		print(id)

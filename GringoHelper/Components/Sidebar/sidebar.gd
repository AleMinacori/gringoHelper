class_name Sidebar
extends Control

const OPTIONS = [
	'Campos',
	'Ciclos',
	'Granos',
	'Tratamientos',
	'Productos',
	'Contratistas',
	'Impuestos',
	'Clima',
	'Mercado',
	'Salir'
]

@export var optionSelected: String = ''

signal _option_selected

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	var optionContainer = get_child(0)
	for option in OPTIONS:
		var optionButton = Button.new()
		optionButton.text = option
		optionButton.name = option
		optionButton.size_flags_vertical = 3
		optionButton.pressed.connect(handle_pressed.bind(option))
		optionContainer.add_child(optionButton)

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass

func handle_pressed(name: String) -> void:
	if optionSelected == 'Salir':
		optionSelected = ''
		# Salir de la app
	elif optionSelected == name:
		optionSelected = ''
	else:
		optionSelected = name
	_option_selected.emit()
# https://docs.godotengine.org/en/stable/tutorials/best_practices/scene_organization.html

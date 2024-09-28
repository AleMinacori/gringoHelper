extends Control

const options = [
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

var state = {
	'optionSelected': null
}
# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	var optionContainer = get_child(0)
	for option in options:
		var optionButton = Button.new()
		optionButton.text = option
		optionButton.name = option
		optionContainer.add_child(optionButton)

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass

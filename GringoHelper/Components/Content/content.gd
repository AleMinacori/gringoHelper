class_name Content
extends Control

@onready var title = $PanelContainer/MainContainer/Title

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

func _on_option_selected(optionSelected):
	title.text = optionSelected

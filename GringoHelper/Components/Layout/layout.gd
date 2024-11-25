class_name Layout
extends Control

@onready var sidebar: Sidebar = get_node("HBoxContainer/Sidebar")
@onready var content: Content = get_node("HBoxContainer/Content")
@onready var API = $Api

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
	if (optionSelected == 'Campos'):
		_on_campo_option_selected()
	if (optionSelected == 'Clima'):
		API._create('campo', {'name':'Campo 1'})
	if (optionSelected):
		content.show()
		content._on_option_selected(sidebar.optionSelected)

func _on_campo_option_selected():
	API._list('campo')
	API._on_request_success.connect(_on_campo_request_completed)
	
func _on_campo_request_completed():
	var campos = []
	for campo in API.body:
		campos.append(Campo.new(campo.id, campo.name))
	
	print(campos)
	API._on_request_success.disconnect(_on_campo_request_completed)

class_name Content
extends Control

@onready var title = $PanelContainer/MainContainer/HeaderContainer/Title
@onready var content_campo: ContentCampo = $PanelContainer/MainContainer/BodyContainer/ContentCampo
@onready var footer = $PanelContainer/MainContainer/FooterContainer
@onready var API = $Api

var state: String = ''

func _on_option_selected(optionSelected):
	title.text = optionSelected
	match(optionSelected):
		'Campos':
			_show_campo()
			
func _show_campo():
	title.text = "Campo"
	API._list('campo')
	API._on_request_success.connect(_on_campo_request_completed)

func _show_grano():
	# algoq ue hacer con los granos
	pass


func _on_campo_request_completed():
	var campos = []
	for campo in API.body:
		campos.append(Campo.new(campo.id, campo.name, "res://Assets/img/icon-godot.svg"))

	API._on_request_success.disconnect(_on_campo_request_completed)
	content_campo._set_campos_to_list(campos)

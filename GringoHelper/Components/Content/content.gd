class_name Content
extends Control

@onready var title = $PanelContainer/MainContainer/HeaderContainer/Title
@onready var campo = $PanelContainer/MainContainer/BodyContainer/ContentCampo

func _on_option_selected(optionSelected):
	title.text = optionSelected

func _show_campo():
	title.text = "Campo"
	pass

func _show_grano():
	# algoq ue hacer con los granos
	pass

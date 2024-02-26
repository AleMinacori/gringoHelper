extends VBoxContainer

@onready var principal_container = $PrincipalContainer
@onready var campos_container = $CamposContainer
# Called when the node enters the scene tree for the first time.
func _ready():
	campos_container.visible = false
	pass # Replace with function body.

func _on_campos_pressed():
	principal_container.visible = false
	campos_container.visible = true

func _on_campo_atras_pressed():
	campos_container.visible = false
	principal_container.visible = true

func _on_salir_pressed():
	get_tree().quit()

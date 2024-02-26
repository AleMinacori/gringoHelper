extends VBoxContainer

@onready var nuevo = $Nuevo
@onready var editar = $Editar
@onready var eliminar = $Eliminar
@onready var atras = $Atras
@onready var nuevo_campo_form = $NuevoCampoForm
@onready var campos_list = $"../../Panel/CamposList"

# Called when the node enters the scene tree for the first time.
func _ready():
	nuevo_campo_form.visible = false

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func _on_nuevo_pressed():
	nuevo.visible = false
	editar.visible = false
	eliminar.visible = false
	atras.visible = false
	nuevo_campo_form.visible = true
	campos_list.visible = false

func _on_nuevo_atras_pressed():
	nuevo.visible = true
	editar.visible = true
	eliminar.visible = true
	atras.visible = true
	nuevo_campo_form.visible = false
	campos_list.visible = true

func _on_visibility_changed():
	if self.visible:
		campos_list.visible = true
		nuevo_campo_form.visible = false
	else:
		campos_list.visible = false

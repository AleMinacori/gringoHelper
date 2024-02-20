class_name NuevoCampoForm extends VBoxContainer

@onready var grid = $"../../../Panel/Grid"

@onready var crear_lote = $NuevoLoteForm/CrearLote
@onready var nombre = $NuevoLoteForm/Nombre
@onready var area = $NuevoLoteForm/Area
@onready var v_box_container = $NuevoLoteForm/VBoxContainer
@onready var aceptar = $NuevoLoteForm/VBoxContainer/Aceptar
@onready var cancelar = $NuevoLoteForm/VBoxContainer/Cancelar


# Called when the node enters the scene tree for the first time.
func _ready():
	grid.generate_grid()
	pass

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func _on_aceptar_pressed():
	nombre.text = ""
	area.text = ""
	nombre.editable = false
	area.editable = false
	crear_lote.disabled = false
	aceptar.disabled = true
	cancelar.disabled = true

func _on_cancelar_pressed():
	nombre.text = ""
	area.text = ""
	nombre.editable = false
	area.editable = false
	crear_lote.disabled = false
	aceptar.disabled = true
	cancelar.disabled = true

func _on_crear_lote_pressed():
	nombre.editable = true
	area.editable = true
	crear_lote.disabled = true
	aceptar.disabled = false
	cancelar.disabled = false

func _on_visibility_changed():
	if self.visible:
		grid.visible = true
	else:
		grid.visible = false

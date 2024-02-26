class_name NuevoLoteForm extends VBoxContainer

@onready var nombre = $Nombre
@onready var area = $Area
@onready var cancelar = $VBoxContainer/Cancelar
@onready var aceptar = $VBoxContainer/Aceptar
@onready var crear_lote = $CrearLote

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass


func _on_crear_lote_pressed():
	nombre.editable = true
	area.editable = true
	crear_lote.disabled = true
	aceptar.disabled = false
	cancelar.disabled = false

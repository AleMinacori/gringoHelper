class_name Form extends Control

@onready var nombre = $HBoxContainer/Nombre
@onready var area = $HBoxContainer/Area
@onready var v_box_container = $HBoxContainer/VBoxContainer
@onready var crear_lote = $"HBoxContainer/CrearLote"

# Called when the node enters the scene tree for the first time.
func _ready():
	nombre.editable = false
	area.editable = false

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func _on_aceptar_pressed():
	print(nombre.text)
	print(area.text)
	nombre.text = ""
	area.text = ""
	nombre.editable = false
	area.editable = false
	crear_lote.disabled = false
	
func _on_cancelar_pressed():
	nombre.text = ""
	area.text = ""
	nombre.editable = false
	area.editable = false
	crear_lote.disabled = false

func _on_crear_lote_pressed():
	nombre.editable = true
	area.editable = true
	crear_lote.disabled = true


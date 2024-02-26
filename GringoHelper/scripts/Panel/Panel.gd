extends Panel

@onready var campos_list = $CamposList
@onready var grid = $Grid


# Called when the node enters the scene tree for the first time.
func _ready():
	campos_list.visible = false
	grid.visible = false
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

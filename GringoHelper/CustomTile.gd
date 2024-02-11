class_name CustomTile extends Button

@export var id = ''
const UNSELECTED_GRASS = preload("res://unselected_grass.tres")

func _init(arg):
	id = arg
	set_toggle_mode(true)

func _ready():
	self.connect('mouse_entered', entered_listener)
	self.connect('pressed', entered_listener)
	self.set_theme(UNSELECTED_GRASS)
	set_button_mask(MOUSE_BUTTON_MASK_LEFT | MOUSE_BUTTON_MASK_RIGHT)
	set_action_mode(0)

func entered_listener():
	if self.is_disabled():
		return
	else:
		if Input.is_mouse_button_pressed( 1 ):
			self.set_pressed(true)
		if Input.is_mouse_button_pressed( 2 ):
			self.set_pressed(false)

func _toggled(toggled):
	if toggled:
		self.text = ''
	else:
		self.text = ''

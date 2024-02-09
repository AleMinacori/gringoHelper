class_name CustomTile extends Button

@export var id = ''

func _init(arg):
	id = arg
	set_toggle_mode(true)

func _ready():
	self.connect('mouse_entered', entered_listener)
	set_action_mode(0)

# ver que si clickeo sin entrar no hace el evento
func entered_listener():
	if Input.is_mouse_button_pressed( 1 ):
		self.set_pressed(true)
	if Input.is_mouse_button_pressed( 2 ):
		self.set_pressed(false)

func _toggled(toggled):
	if toggled:
		self.text = 'a'
	else:
		self.text = ''

class_name Grid extends Node2D

@export var width: int = 25
@export var height: int = 15
@export var cell_size: int = 32

enum states {DEFAULT, EDITING, SHOWING}

var grid: Dictionary = {}
var state = states.DEFAULT
var lotes: Array[Lote] = []

@onready var nuevo_lote_form = $"../../Sidebar/CamposContainer/NuevoCampoForm/NuevoLoteForm"

func _input(event):
	if event is InputEventMouseButton:
		pass
		
func generate_grid():
	for x in width:
		for y in height:
			var button = CustomTile.new(str(Vector2(x,y)))
			button.position = grid_to_world(Vector2(x,y))
			button.size = Vector2(cell_size, cell_size)
			button.disabled = true
			add_child(button)
			grid[Vector2(x,y)] = button

func grid_to_world(_pos: Vector2) -> Vector2:
	return _pos * cell_size

func world_to_grid(_pos: Vector2) -> Vector2:
	return floor(_pos / cell_size)

func toggle_state(newState):
	match newState:
		states.EDITING:
			state = states.EDITING
			toggle_custom_tile_state(false)
		states.DEFAULT:
			toggle_custom_tile_state(true)
			state = states.DEFAULT
		states.SHOWING:
			for lote in lotes:
				add_child(lote)

func toggle_custom_tile_state(value: bool):
	for key in grid:
		grid[key].disabled = value

func _on_crear_lote_pressed():
	toggle_state(states.EDITING)

func _on_aceptar_pressed():
	var newLote = false
	var leftTile = width
	var rightTile = -1
	var topTile = height
	var bottomTile = -1
	var pixels = []
	for key in grid:
		if grid[key].button_pressed and not grid[key].asigned:
			newLote = true
			grid[key].text = str(lotes.size())
			grid[key].asigned = true
			grid[key].group = str(lotes.size())
			pixels.append(key)
			if Vector2(key).x <= leftTile:
				leftTile = Vector2(key).x
			if Vector2(key).x >= rightTile:
				rightTile = Vector2(key).x
			if Vector2(key).y <= topTile:
				topTile = Vector2(key).y
			if Vector2(key).y >= bottomTile:
				bottomTile = Vector2(key).y
	if newLote:
		var rect = ReferenceRect.new()
		rect.set_begin(Vector2(leftTile * cell_size, topTile * cell_size))
		rect.set_end(Vector2((rightTile + 1) * cell_size, (bottomTile + 1) * cell_size))
		var textureButton = generate_textureButton(rect.size, pixels, topTile, leftTile)
		create_lote(textureButton)
	toggle_state(states.DEFAULT)

func generate_textureButton(size, pixels, top, left):
	var img_normal = generate_img(size, pixels, top, left, Color(1,1,1,1))
	var img_hover = generate_img(size, pixels, top, left, Color(0,1,1,1))
	var img_pressed = generate_img(size, pixels, top, left, Color(1,0,1,1))
	var img_focus = generate_img(size, pixels, top, left, Color(1,1,0,1))

	var textureBtn = TextureButton.new()
	var texture = ImageTexture.create_from_image(img_normal)
	textureBtn.texture_normal = texture
	texture = ImageTexture.create_from_image(img_hover)
	textureBtn.texture_hover = texture
	texture = ImageTexture.create_from_image(img_pressed)
	textureBtn.texture_pressed = texture
	texture = ImageTexture.create_from_image(img_focus)
	textureBtn.texture_focused = texture
	var bitMap = BitMap.new()
	bitMap.create_from_image_alpha(img_normal, 0.5)
	textureBtn.set_click_mask(bitMap)
	textureBtn.size = img_normal.get_size()
	textureBtn.global_position = Vector2(left * cell_size, top * cell_size)
	return textureBtn

	# img.save_png('res://MainScripts/white_test.png')

func create_lote(textureButton: TextureButton):
	var lote = Lote.new()
	lote.textureButton = textureButton
	lote.nombre = nuevo_lote_form.nombre.text
	lote.area = nuevo_lote_form.area.text
	lotes.append(lote)

func _on_previsualizar_pressed():
	toggle_state(states.SHOWING)

func generate_img(size, pixels, top, left, color):
	var img = Image.create(size.x, size.y, false, Image.FORMAT_RGBA8)
	img.fill(Color(0,0,0,0))
	for px in pixels:
		var pix = Image.create(cell_size, cell_size, false, Image.FORMAT_RGBA8)
		var rect = Rect2(Vector2(0,0), pix.get_size())
		var pos = Vector2i((px.x - left) * cell_size, (px.y - top) * cell_size)
		pix.fill(color)
		img.blend_rect(pix, rect, pos)
	return img

func _on_cancelar_pressed():
	# limpiar los botones seleccionados
	pass # Replace with function body.

class_name SaveHandler extends Node
# Note: This can be called from anywhere inside the tree. This function is
# path independent.
# Go through everything in the persist category and ask them to return a
# dict of relevant variables.
func save_game(save_nodes):
	var save_game = FileAccess.open("user://savegame.save", FileAccess.WRITE)
	for node in save_nodes:
		print(node.scene_file_path)
		# Check the node is an instanced scene so it can be instanced again during load.
		if node.scene_file_path.is_empty():
			print("persistent node '%s' is not an instanced scene, skipped" % node.name)
			continue

		# Check the node has a save function.
		if !node.has_method("save"):
			print("persistent node '%s' is missing a save() function, skipped" % node.name)
			continue

		# Call the node's save function.
		var node_data = node.call("save")

		# JSON provides a static method to serialized JSON string.
		var json_string = JSON.stringify(node_data)

		# Store the save dictionary as a new line in the save file.
		save_game.store_line(json_string)

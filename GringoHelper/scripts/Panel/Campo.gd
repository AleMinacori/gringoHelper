class_name Campo extends Node

var nombre: String = ""
var foto: Texture2D = null
var disponible: bool = true
var lotes: Array[Lote] = []

func _init(name: String, img: Texture2D = null, available: bool = true):
	nombre = name
	foto = img
	disponible = available

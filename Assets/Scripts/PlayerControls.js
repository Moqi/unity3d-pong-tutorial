﻿#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;

var speed : float = 10;

function Update () {
	if (Input.GetKey(moveUp)) {
		rigidbody2D.velocity.y = speed;
	} else if (Input.GetKey(moveDown)) {
		rigidbody2D.velocity.y = -speed;
	} else {
		rigidbody2D.velocity.y = 0;
	}
	rigidbody2D.velocity.x = 0;
	
}
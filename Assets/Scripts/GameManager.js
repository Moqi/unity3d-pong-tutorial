#pragma strict

static var Player01Score : int = 0;
static var Player02Score : int = 0;

var GUISkin : GUISkin;

static function Score (wallName : String) {
	if (wallName == "leftWall") {
		Player02Score += 1;
	} else if (wallName == "rightWall") {
		Player01Score += 1;
	}
}

function OnGUI () {
	GUI.skin = GUISkin;
	GUI.Label (new Rect (Screen.width/2 - 150 - 12, 20, 100, 100), "" + Player01Score);
	GUI.Label (new Rect (Screen.width/2 + 150 - 12, 20, 100, 100), "" + Player02Score);
}
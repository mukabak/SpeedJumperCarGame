#pragma strict
var rotate_object_1 : GameObject;
var image_back_object : GameObject;
var image_map_01_object : GameObject;
var image_map_02_object : GameObject;
var image_map_03_object : GameObject;
var image_map_04_object : GameObject;
var image_map_05_object : GameObject;
var image_map_06_object : GameObject;
var image_back_1 : Texture2D;
var image_back_2 : Texture2D;
var image_map_01_3 : Texture2D;
var image_map_01_4 : Texture2D;
var image_map_02_1 : Texture2D;
var image_map_02_2 : Texture2D;
var image_map_02_3 : Texture2D;
var image_map_02_4 : Texture2D;
var image_map_03_1 : Texture2D;
var image_map_03_2 : Texture2D;
var image_map_03_3 : Texture2D;
var image_map_03_4 : Texture2D;
var image_map_04_1 : Texture2D;
var image_map_04_2 : Texture2D;
var image_map_04_3 : Texture2D;
var image_map_04_4 : Texture2D;
var image_map_05_1 : Texture2D;
var image_map_05_2 : Texture2D;
var image_map_05_3 : Texture2D;
var image_map_05_4 : Texture2D;
var image_map_06_1 : Texture2D;
var image_map_06_2 : Texture2D;
var image_map_06_3 : Texture2D;
var image_map_06_4 : Texture2D;
private var image_back : GUITexture;
private var image_map_01 : GUITexture;
private var image_map_02 : GUITexture;
private var image_map_03 : GUITexture;
private var image_map_04 : GUITexture;
private var image_map_05 : GUITexture;
private var image_map_06 : GUITexture;
private var int_level : int = 0;

function Start () {
if (PlayerPrefs.HasKey("int_level") == false) {
PlayerPrefs.SetInt("int_level", 1);
}
else {
int_level = PlayerPrefs.GetInt("int_level");
}
image_back = image_back_object.GetComponent(GUITexture);
image_map_01 = image_map_01_object.GetComponent(GUITexture);
image_map_02 = image_map_02_object.GetComponent(GUITexture);
image_map_03 = image_map_03_object.GetComponent(GUITexture);
image_map_04 = image_map_04_object.GetComponent(GUITexture);
image_map_05 = image_map_05_object.GetComponent(GUITexture);
image_map_06 = image_map_06_object.GetComponent(GUITexture);

if (int_level == 6) {
image_map_01.GetComponent.<GUITexture>().texture = image_map_01_3;
image_map_02.GetComponent.<GUITexture>().texture = image_map_02_3;
image_map_03.GetComponent.<GUITexture>().texture = image_map_03_3;
image_map_04.GetComponent.<GUITexture>().texture = image_map_04_3;
image_map_05.GetComponent.<GUITexture>().texture = image_map_05_3;
image_map_06.GetComponent.<GUITexture>().texture = image_map_06_3;
}
else if (int_level == 5) {
image_map_01.GetComponent.<GUITexture>().texture = image_map_01_3;
image_map_02.GetComponent.<GUITexture>().texture = image_map_02_3;
image_map_03.GetComponent.<GUITexture>().texture = image_map_03_3;
image_map_04.GetComponent.<GUITexture>().texture = image_map_04_3;
image_map_05.GetComponent.<GUITexture>().texture = image_map_05_3;
}
else if (int_level == 4) {
image_map_01.GetComponent.<GUITexture>().texture = image_map_01_3;
image_map_02.GetComponent.<GUITexture>().texture = image_map_02_3;
image_map_03.GetComponent.<GUITexture>().texture = image_map_03_3;
image_map_04.GetComponent.<GUITexture>().texture = image_map_04_3;
}
else if (int_level == 3) {
image_map_01.GetComponent.<GUITexture>().texture = image_map_01_3;
image_map_02.GetComponent.<GUITexture>().texture = image_map_02_3;
image_map_03.GetComponent.<GUITexture>().texture = image_map_03_3;
}
else if (int_level == 2) {
image_map_01.GetComponent.<GUITexture>().texture = image_map_01_3;
image_map_02.GetComponent.<GUITexture>().texture = image_map_02_3;
}
else {
image_map_01.GetComponent.<GUITexture>().texture = image_map_01_3;
}
}

function FixedUpdate () {
DetectTouch ();
rotate_object_1.transform.Rotate(Vector3.up * Time.deltaTime * 10, Space.World);
if (Screen.width > 1000) {
image_back.pixelInset.width = 500;
image_back.pixelInset.height = 100;
image_map_01.pixelInset.width = 200;
image_map_01.pixelInset.height = 200;
image_map_02.pixelInset.width = 200;
image_map_02.pixelInset.height = 200;
image_map_03.pixelInset.width = 200;
image_map_03.pixelInset.height = 200;
image_map_04.pixelInset.width = 200;
image_map_04.pixelInset.height = 200;
image_map_05.pixelInset.width = 200;
image_map_05.pixelInset.height = 200;
image_map_06.pixelInset.width = 200;
image_map_06.pixelInset.height = 200;
image_back.pixelInset.x = (Screen.width - 500) / 2;
image_back.pixelInset.y = 0;
image_map_01.pixelInset.x = (Screen.width - 600) / 4;
image_map_01.pixelInset.y = (Screen.height - 400) * 3 / 4 + 200;
image_map_02.pixelInset.x = (Screen.width - 600) / 2 + 200;
image_map_02.pixelInset.y = (Screen.height - 400) * 3 / 4 + 200;
image_map_03.pixelInset.x = (Screen.width - 600) * 3 / 4 + 400;
image_map_03.pixelInset.y = (Screen.height - 400) * 3 / 4 + 200;
image_map_04.pixelInset.x = (Screen.width - 600) / 4;
image_map_04.pixelInset.y = (Screen.height - 400) / 2;
image_map_05.pixelInset.x = (Screen.width - 600) / 2 + 200;
image_map_05.pixelInset.y = (Screen.height - 400) / 2;
image_map_06.pixelInset.x = (Screen.width - 600) * 3 / 4 + 400;
image_map_06.pixelInset.y = (Screen.height - 400) / 2;
}
else {
image_back.pixelInset.width = Screen.width / 2;
image_back.pixelInset.height = Screen.width / 10;
image_map_01.pixelInset.width = Screen.width / 5;
image_map_01.pixelInset.height = Screen.width / 5;
image_map_02.pixelInset.width = Screen.width / 5;
image_map_02.pixelInset.height = Screen.width / 5;
image_map_03.pixelInset.width = Screen.width / 5;
image_map_03.pixelInset.height = Screen.width / 5;
image_map_04.pixelInset.width = Screen.width / 5;
image_map_04.pixelInset.height = Screen.width / 5;
image_map_05.pixelInset.width = Screen.width / 5;
image_map_05.pixelInset.height = Screen.width / 5;
image_map_06.pixelInset.width = Screen.width / 5;
image_map_06.pixelInset.height = Screen.width / 5;
image_back.pixelInset.x = Screen.width / 4;
image_back.pixelInset.y = 0;
image_map_01.pixelInset.x = Screen.width * 1 / 10;
image_map_01.pixelInset.y = (Screen.height - Screen.width * 2 / 5) * 3 / 4 + Screen.width * 1 / 5;
image_map_02.pixelInset.x = Screen.width * 2 / 5;
image_map_02.pixelInset.y = (Screen.height - Screen.width * 2 / 5) * 3 / 4 + Screen.width * 1 / 5;
image_map_03.pixelInset.x = Screen.width * 7 / 10;
image_map_03.pixelInset.y = (Screen.height - Screen.width * 2 / 5) * 3 / 4 + Screen.width * 1 / 5;
image_map_04.pixelInset.x = Screen.width * 1 / 10;
image_map_04.pixelInset.y = (Screen.height - Screen.width * 2 / 5) / 2;
image_map_05.pixelInset.x = Screen.width * 2 / 5;
image_map_05.pixelInset.y = (Screen.height - Screen.width * 2 / 5) / 2;
image_map_06.pixelInset.x = Screen.width * 7 / 10;
image_map_06.pixelInset.y = (Screen.height - Screen.width * 2 / 5) / 2;
}
}

function DetectTouch () {
if (Input.touches.Length <= 0) {
}
else {
if (Input.touches.Length >= 1) {
for (var i = 0; i < Input.touchCount; i++) {
//image_map_1
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_map_01.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level >= 1)) {
image_map_01.GetComponent.<GUITexture>().texture = image_map_01_4;
}
else {
image_map_01.GetComponent.<GUITexture>().texture = image_map_01_3;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_map_01.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level >= 1)) {
Application.LoadLevel("level_01");
}
// End
//image_map_2
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_map_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level >= 2)) {
image_map_02.GetComponent.<GUITexture>().texture = image_map_02_4;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_map_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level < 2)) {
image_map_02.GetComponent.<GUITexture>().texture = image_map_02_2;
}
else if (int_level >= 2) {
image_map_02.GetComponent.<GUITexture>().texture = image_map_02_3;
}
else {
image_map_02.GetComponent.<GUITexture>().texture = image_map_02_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_map_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level >= 2)) {
Application.LoadLevel("level_02");
}
// End
//image_map_3
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_map_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level >= 3)) {
image_map_03.GetComponent.<GUITexture>().texture = image_map_03_4;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_map_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level < 3)) {
image_map_03.GetComponent.<GUITexture>().texture = image_map_03_2;
}
else if (int_level >= 3) {
image_map_03.GetComponent.<GUITexture>().texture = image_map_03_3;
}
else {
image_map_03.GetComponent.<GUITexture>().texture = image_map_03_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_map_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level >= 3)) {
Application.LoadLevel("level_03");
}
// End
//image_map_4
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_map_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level >= 4)) {
image_map_04.GetComponent.<GUITexture>().texture = image_map_04_4;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_map_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level < 4)) {
image_map_04.GetComponent.<GUITexture>().texture = image_map_04_2;
}
else if (int_level >= 4) {
image_map_04.GetComponent.<GUITexture>().texture = image_map_04_3;
}
else {
image_map_04.GetComponent.<GUITexture>().texture = image_map_04_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_map_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level >= 4)) {
Application.LoadLevel("level_04");
}
// End
//image_map_5
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_map_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level >= 5)) {
image_map_05.GetComponent.<GUITexture>().texture = image_map_05_4;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_map_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level < 5)) {
image_map_05.GetComponent.<GUITexture>().texture = image_map_05_2;
}
else if (int_level >= 5) {
image_map_05.GetComponent.<GUITexture>().texture = image_map_05_3;
}
else {
image_map_05.GetComponent.<GUITexture>().texture = image_map_05_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_map_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level >= 5)) {
Application.LoadLevel("level_05");
}
// End
//image_map_6
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_map_06.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level >= 6)) {
image_map_06.GetComponent.<GUITexture>().texture = image_map_06_4;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_map_06.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level < 6)) {
image_map_06.GetComponent.<GUITexture>().texture = image_map_06_2;
}
else if (int_level >= 6) {
image_map_06.GetComponent.<GUITexture>().texture = image_map_06_3;
}
else {
image_map_06.GetComponent.<GUITexture>().texture = image_map_06_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_map_06.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && int_level >= 6)) {
Application.LoadLevel("level_06");
}
// End
//image_back
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && image_back.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) {
image_back.GetComponent.<GUITexture>().texture = image_back_2;
}
else {
image_back.GetComponent.<GUITexture>().texture = image_back_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && image_back.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) {
Application.LoadLevel("menu_garage");
}
// End
}
}
}
}
#pragma strict
var music_click_object : GameObject;
var material_body_object : Material;
var material_wheel_object : Material;
var rotate_object_1 : GameObject;
var rotate_object_2 : GameObject;
var image_watch_video_object : GameObject;
var image_play_object : GameObject;
var image_back_object : GameObject;
var image_color_object : GameObject;
var image_color_01_object : GameObject;
var image_color_02_object : GameObject;
var image_color_03_object : GameObject;
var image_color_04_object : GameObject;
var image_color_05_object : GameObject;
var image_design_object : GameObject;
var image_design_01_object : GameObject;
var image_design_02_object : GameObject;
var image_design_03_object : GameObject;
var image_design_04_object : GameObject;
var image_design_05_object : GameObject;
var image_engine_object : GameObject;
var image_engine_01_object : GameObject;
var image_engine_02_object : GameObject;
var image_engine_03_object : GameObject;
var image_engine_04_object : GameObject;
var image_engine_05_object : GameObject;
var image_wheel_object : GameObject;
var image_wheel_01_object : GameObject;
var image_wheel_02_object : GameObject;
var image_wheel_03_object : GameObject;
var image_wheel_04_object : GameObject;
var image_wheel_05_object : GameObject;
var image_watch_video_1 : Texture2D;
var image_watch_video_2 : Texture2D;
var image_play_1 : Texture2D;
var image_play_2 : Texture2D;
var image_back_1 : Texture2D;
var image_back_2 : Texture2D;
var image_design_01_texture : Texture2D;
var image_design_02_texture : Texture2D;
var image_design_03_texture : Texture2D;
var image_design_04_texture : Texture2D;
var image_design_05_texture : Texture2D;
var image_color_01_1 : Texture2D;
var image_color_01_2 : Texture2D;
var image_color_02_1 : Texture2D;
var image_color_02_2 : Texture2D;
var image_color_03_1 : Texture2D;
var image_color_03_2 : Texture2D;
var image_color_04_1 : Texture2D;
var image_color_04_2 : Texture2D;
var image_color_05_1 : Texture2D;
var image_color_05_2 : Texture2D;
var image_design_01_1 : Texture2D;
var image_design_01_2 : Texture2D;
var image_design_02_1 : Texture2D;
var image_design_02_2 : Texture2D;
var image_design_03_1 : Texture2D;
var image_design_03_2 : Texture2D;
var image_design_04_1 : Texture2D;
var image_design_04_2 : Texture2D;
var image_design_05_1 : Texture2D;
var image_design_05_2 : Texture2D;
var image_engine_01_1 : Texture2D;
var image_engine_01_2 : Texture2D;
var image_engine_02_1 : Texture2D;
var image_engine_02_2 : Texture2D;
var image_engine_02_3 : Texture2D;
var image_engine_02_4 : Texture2D;
var image_engine_03_1 : Texture2D;
var image_engine_03_2 : Texture2D;
var image_engine_03_3 : Texture2D;
var image_engine_03_4 : Texture2D;
var image_engine_04_1 : Texture2D;
var image_engine_04_2 : Texture2D;
var image_engine_04_3 : Texture2D;
var image_engine_04_4 : Texture2D;
var image_engine_05_1 : Texture2D;
var image_engine_05_2 : Texture2D;
var image_engine_05_3 : Texture2D;
var image_engine_05_4 : Texture2D;
var image_wheel_01_1 : Texture2D;
var image_wheel_01_2 : Texture2D;
var image_wheel_02_1 : Texture2D;
var image_wheel_02_2 : Texture2D;
var image_wheel_02_3 : Texture2D;
var image_wheel_02_4 : Texture2D;
var image_wheel_03_1 : Texture2D;
var image_wheel_03_2 : Texture2D;
var image_wheel_03_3 : Texture2D;
var image_wheel_03_4 : Texture2D;
var image_wheel_04_1 : Texture2D;
var image_wheel_04_2 : Texture2D;
var image_wheel_04_3 : Texture2D;
var image_wheel_04_4 : Texture2D;
var image_wheel_05_1 : Texture2D;
var image_wheel_05_2 : Texture2D;
var image_wheel_05_3 : Texture2D;
var image_wheel_05_4 : Texture2D;
private var image_watch_video : GUITexture;
private var image_play : GUITexture;
private var image_back : GUITexture;
private var image_color : GUITexture;
private var image_color_01 : GUITexture;
private var image_color_02 : GUITexture;
private var image_color_03 : GUITexture;
private var image_color_04 : GUITexture;
private var image_color_05 : GUITexture;
private var image_design : GUITexture;
private var image_design_01 : GUITexture;
private var image_design_02 : GUITexture;
private var image_design_03 : GUITexture;
private var image_design_04 : GUITexture;
private var image_design_05 : GUITexture;
private var image_engine : GUITexture;
private var image_engine_01 : GUITexture;
private var image_engine_02 : GUITexture;
private var image_engine_03 : GUITexture;
private var image_engine_04 : GUITexture;
private var image_engine_05 : GUITexture;
private var image_wheel : GUITexture;
private var image_wheel_01 : GUITexture;
private var image_wheel_02 : GUITexture;
private var image_wheel_03 : GUITexture;
private var image_wheel_04 : GUITexture;
private var image_wheel_05 : GUITexture;
private var int_color : int = 0;
private var int_design : int = 0;
private var int_engine : int = 0;
private var int_wheel : int = 0;
private var int_available_engine_02 : int = 0;
private var int_available_engine_03 : int = 0;
private var int_available_engine_04 : int = 0;
private var int_available_engine_05 : int = 0;
private var int_available_wheel_02 : int = 0;
private var int_available_wheel_03 : int = 0;
private var int_available_wheel_04 : int = 0;
private var int_available_wheel_05 : int = 0;
private var music_click : AudioSource;

function Start () {
music_click = music_click_object.GetComponent(AudioSource);
if (PlayerPrefs.HasKey("int_color") == false) {
PlayerPrefs.SetInt("int_color", 1);
}
else {
int_color = PlayerPrefs.GetInt("int_color");
}
if (PlayerPrefs.HasKey("int_design") == false) {
PlayerPrefs.SetInt("int_design", 1);
}
else {
int_design = PlayerPrefs.GetInt("int_design");
}
if (PlayerPrefs.HasKey("int_engine") == false) {
PlayerPrefs.SetInt("int_engine", 1);
}
else {
int_engine = PlayerPrefs.GetInt("int_engine");
}
if (PlayerPrefs.HasKey("int_wheel") == false) {
PlayerPrefs.SetInt("int_wheel", 1);
}
else {
int_wheel = PlayerPrefs.GetInt("int_wheel");
}
if (PlayerPrefs.HasKey("int_available_engine_02") == false) {
PlayerPrefs.SetInt("int_available_engine_02", 0);
}
else {
int_available_engine_02 = PlayerPrefs.GetInt("int_available_engine_02");
}
if (PlayerPrefs.HasKey("int_available_engine_03") == false) {
PlayerPrefs.SetInt("int_available_engine_03", 0);
}
else {
int_available_engine_03 = PlayerPrefs.GetInt("int_available_engine_03");
}
if (PlayerPrefs.HasKey("int_available_engine_04") == false) {
PlayerPrefs.SetInt("int_available_engine_04", 0);
}
else {
int_available_engine_04 = PlayerPrefs.GetInt("int_available_engine_04");
}
if (PlayerPrefs.HasKey("int_available_engine_05") == false) {
PlayerPrefs.SetInt("int_available_engine_05", 0);
}
else {
int_available_engine_05 = PlayerPrefs.GetInt("int_available_engine_05");
}
if (PlayerPrefs.HasKey("int_available_wheel_02") == false) {
PlayerPrefs.SetInt("int_available_wheel_02", 0);
}
else {
int_available_wheel_02 = PlayerPrefs.GetInt("int_available_wheel_02");
}
if (PlayerPrefs.HasKey("int_available_wheel_03") == false) {
PlayerPrefs.SetInt("int_available_wheel_03", 0);
}
else {
int_available_wheel_03 = PlayerPrefs.GetInt("int_available_wheel_03");
}
if (PlayerPrefs.HasKey("int_available_wheel_04") == false) {
PlayerPrefs.SetInt("int_available_wheel_04", 0);
}
else {
int_available_wheel_04 = PlayerPrefs.GetInt("int_available_wheel_04");
}
if (PlayerPrefs.HasKey("int_available_wheel_05") == false) {
PlayerPrefs.SetInt("int_available_wheel_05", 0);
}
else {
int_available_wheel_05 = PlayerPrefs.GetInt("int_available_wheel_05");
}
image_watch_video = image_watch_video_object.GetComponent(GUITexture);
image_play = image_play_object.GetComponent(GUITexture);
image_back = image_back_object.GetComponent(GUITexture);
image_color = image_color_object.GetComponent(GUITexture);
image_color_01 = image_color_01_object.GetComponent(GUITexture);
image_color_02 = image_color_02_object.GetComponent(GUITexture);
image_color_03 = image_color_03_object.GetComponent(GUITexture);
image_color_04 = image_color_04_object.GetComponent(GUITexture);
image_color_05 = image_color_05_object.GetComponent(GUITexture);
image_design = image_design_object.GetComponent(GUITexture);
image_design_01 = image_design_01_object.GetComponent(GUITexture);
image_design_02 = image_design_02_object.GetComponent(GUITexture);
image_design_03 = image_design_03_object.GetComponent(GUITexture);
image_design_04 = image_design_04_object.GetComponent(GUITexture);
image_design_05 = image_design_05_object.GetComponent(GUITexture);
image_engine = image_engine_object.GetComponent(GUITexture);
image_engine_01 = image_engine_01_object.GetComponent(GUITexture);
image_engine_02 = image_engine_02_object.GetComponent(GUITexture);
image_engine_03 = image_engine_03_object.GetComponent(GUITexture);
image_engine_04 = image_engine_04_object.GetComponent(GUITexture);
image_engine_05 = image_engine_05_object.GetComponent(GUITexture);
image_wheel = image_wheel_object.GetComponent(GUITexture);
image_wheel_01 = image_wheel_01_object.GetComponent(GUITexture);
image_wheel_02 = image_wheel_02_object.GetComponent(GUITexture);
image_wheel_03 = image_wheel_03_object.GetComponent(GUITexture);
image_wheel_04 = image_wheel_04_object.GetComponent(GUITexture);
image_wheel_05 = image_wheel_05_object.GetComponent(GUITexture);
availability ();
car_design ();
}

function FixedUpdate () {
DetectTouch ();
rotate_object_1.transform.Rotate(Vector3.up * Time.deltaTime * 10, Space.World);
rotate_object_2.transform.Rotate(Vector3.up * Time.deltaTime * 10, Space.World);
if (Screen.width > 1000) {
image_watch_video.pixelInset.width = 500;
image_watch_video.pixelInset.height = 250;
image_play.pixelInset.width = 500;
image_play.pixelInset.height = 100;
image_back.pixelInset.width = 500;
image_back.pixelInset.height = 100;
image_color.pixelInset.width = 100;
image_color.pixelInset.height = 33;
image_color_01.pixelInset.width = 100;
image_color_01.pixelInset.height = 100;
image_color_02.pixelInset.width = 100;
image_color_02.pixelInset.height = 100;
image_color_03.pixelInset.width = 100;
image_color_03.pixelInset.height = 100;
image_color_04.pixelInset.width = 100;
image_color_04.pixelInset.height = 100;
image_color_05.pixelInset.width = 100;
image_color_05.pixelInset.height = 100;
image_design.pixelInset.width = 100;
image_design.pixelInset.height = 33;
image_design_01.pixelInset.width = 100;
image_design_01.pixelInset.height = 100;
image_design_02.pixelInset.width = 100;
image_design_02.pixelInset.height = 100;
image_design_03.pixelInset.width = 100;
image_design_03.pixelInset.height = 100;
image_design_04.pixelInset.width = 100;
image_design_04.pixelInset.height = 100;
image_design_05.pixelInset.width = 100;
image_design_05.pixelInset.height = 100;
image_engine.pixelInset.width = 100;
image_engine.pixelInset.height = 33;
image_engine_01.pixelInset.width = 100;
image_engine_01.pixelInset.height = 100;
image_engine_02.pixelInset.width = 100;
image_engine_02.pixelInset.height = 100;
image_engine_03.pixelInset.width = 100;
image_engine_03.pixelInset.height = 100;
image_engine_04.pixelInset.width = 100;
image_engine_04.pixelInset.height = 100;
image_engine_05.pixelInset.width = 100;
image_engine_05.pixelInset.height = 100;
image_wheel.pixelInset.width = 100;
image_wheel.pixelInset.height = 33;
image_wheel_01.pixelInset.width = 100;
image_wheel_01.pixelInset.height = 100;
image_wheel_02.pixelInset.width = 100;
image_wheel_02.pixelInset.height = 100;
image_wheel_03.pixelInset.width = 100;
image_wheel_03.pixelInset.height = 100;
image_wheel_04.pixelInset.width = 100;
image_wheel_04.pixelInset.height = 100;
image_wheel_05.pixelInset.width = 100;
image_wheel_05.pixelInset.height = 100;
image_watch_video.pixelInset.x = (Screen.width / 2) - 250;
image_watch_video.pixelInset.y = Screen.height - 250;
image_play.pixelInset.x = (Screen.width - 500) / 2;
image_play.pixelInset.y = 100;
image_back.pixelInset.x = (Screen.width - 500) / 2;
image_back.pixelInset.y = 0;
image_color.pixelInset.x = 5;
image_color.pixelInset.y = Screen.height - 38;
image_color_01.pixelInset.x = 5;
image_color_01.pixelInset.y = Screen.height - 143;
image_color_02.pixelInset.x = 5;
image_color_02.pixelInset.y = Screen.height - 248;
image_color_03.pixelInset.x = 5;
image_color_03.pixelInset.y = Screen.height - 353;
image_color_04.pixelInset.x = 5;
image_color_04.pixelInset.y = Screen.height - 458;
image_color_05.pixelInset.x = 5;
image_color_05.pixelInset.y = Screen.height - 563;
image_design.pixelInset.x = 110;
image_design.pixelInset.y = Screen.height - 38;
image_design_01.pixelInset.x = 110;
image_design_01.pixelInset.y = Screen.height - 143;
image_design_02.pixelInset.x = 110;
image_design_02.pixelInset.y = Screen.height - 248;
image_design_03.pixelInset.x = 110;
image_design_03.pixelInset.y = Screen.height - 353;
image_design_04.pixelInset.x = 110;
image_design_04.pixelInset.y = Screen.height - 458;
image_design_05.pixelInset.x = 110;
image_design_05.pixelInset.y = Screen.height - 563;
image_engine.pixelInset.x = Screen.width - 210;
image_engine.pixelInset.y = Screen.height - 38;
image_engine_01.pixelInset.x = Screen.width - 210;
image_engine_01.pixelInset.y = Screen.height - 143;
image_engine_02.pixelInset.x = Screen.width - 210;
image_engine_02.pixelInset.y = Screen.height - 248;
image_engine_03.pixelInset.x = Screen.width - 210;
image_engine_03.pixelInset.y = Screen.height - 353;
image_engine_04.pixelInset.x = Screen.width - 210;
image_engine_04.pixelInset.y = Screen.height - 458;
image_engine_05.pixelInset.x = Screen.width - 210;
image_engine_05.pixelInset.y = Screen.height - 563;
image_wheel.pixelInset.x = Screen.width - 105;
image_wheel.pixelInset.y = Screen.height - 38;
image_wheel_01.pixelInset.x = Screen.width - 105;
image_wheel_01.pixelInset.y = Screen.height - 143;
image_wheel_02.pixelInset.x = Screen.width - 105;
image_wheel_02.pixelInset.y = Screen.height - 248;
image_wheel_03.pixelInset.x = Screen.width - 105;
image_wheel_03.pixelInset.y = Screen.height - 353;
image_wheel_04.pixelInset.x = Screen.width - 105;
image_wheel_04.pixelInset.y = Screen.height - 458;
image_wheel_05.pixelInset.x = Screen.width - 105;
image_wheel_05.pixelInset.y = Screen.height - 563;
}
else {
image_watch_video.pixelInset.width = Screen.width / 2;
image_watch_video.pixelInset.height = Screen.width / 4;
image_play.pixelInset.width = Screen.width / 2;
image_play.pixelInset.height = Screen.width / 10;
image_back.pixelInset.width = Screen.width / 2;
image_back.pixelInset.height = Screen.width / 10;
image_color.pixelInset.width = Screen.width / 10;
image_color.pixelInset.height = Screen.width / 30;
image_color_01.pixelInset.width = Screen.width / 10;
image_color_01.pixelInset.height = Screen.width / 10;
image_color_02.pixelInset.width = Screen.width / 10;
image_color_02.pixelInset.height = Screen.width / 10;
image_color_03.pixelInset.width = Screen.width / 10;
image_color_03.pixelInset.height = Screen.width / 10;
image_color_04.pixelInset.width = Screen.width / 10;
image_color_04.pixelInset.height = Screen.width / 10;
image_color_05.pixelInset.width = Screen.width / 10;
image_color_05.pixelInset.height = Screen.width / 10;
image_design.pixelInset.width = Screen.width / 10;
image_design.pixelInset.height = Screen.width / 30;
image_design_01.pixelInset.width = Screen.width / 10;
image_design_01.pixelInset.height = Screen.width / 10;
image_design_02.pixelInset.width = Screen.width / 10;
image_design_02.pixelInset.height = Screen.width / 10;
image_design_03.pixelInset.width = Screen.width / 10;
image_design_03.pixelInset.height = Screen.width / 10;
image_design_04.pixelInset.width = Screen.width / 10;
image_design_04.pixelInset.height = Screen.width / 10;
image_design_05.pixelInset.width = Screen.width / 10;
image_design_05.pixelInset.height = Screen.width / 10;
image_engine.pixelInset.width = Screen.width / 10;
image_engine.pixelInset.height = Screen.width / 30;
image_engine_01.pixelInset.width = Screen.width / 10;
image_engine_01.pixelInset.height = Screen.width / 10;
image_engine_02.pixelInset.width = Screen.width / 10;
image_engine_02.pixelInset.height = Screen.width / 10;
image_engine_03.pixelInset.width = Screen.width / 10;
image_engine_03.pixelInset.height = Screen.width / 10;
image_engine_04.pixelInset.width = Screen.width / 10;
image_engine_04.pixelInset.height = Screen.width / 10;
image_engine_05.pixelInset.width = Screen.width / 10;
image_engine_05.pixelInset.height = Screen.width / 10;
image_wheel.pixelInset.width = Screen.width / 10;
image_wheel.pixelInset.height = Screen.width / 30;
image_wheel_01.pixelInset.width = Screen.width / 10;
image_wheel_01.pixelInset.height = Screen.width / 10;
image_wheel_02.pixelInset.width = Screen.width / 10;
image_wheel_02.pixelInset.height = Screen.width / 10;
image_wheel_03.pixelInset.width = Screen.width / 10;
image_wheel_03.pixelInset.height = Screen.width / 10;
image_wheel_04.pixelInset.width = Screen.width / 10;
image_wheel_04.pixelInset.height = Screen.width / 10;
image_wheel_05.pixelInset.width = Screen.width / 10;
image_wheel_05.pixelInset.height = Screen.width / 10;
image_watch_video.pixelInset.x = (Screen.width / 2) - Screen.width / 4;
image_watch_video.pixelInset.y = Screen.height - Screen.width / 4;
image_play.pixelInset.x = Screen.width / 4;
image_play.pixelInset.y = Screen.width / 10;
image_back.pixelInset.x = Screen.width / 4;
image_back.pixelInset.y = 0;
image_color.pixelInset.x = 5;
image_color.pixelInset.y = Screen.height - Screen.width / 30 - 5;
image_color_01.pixelInset.x = 5;
image_color_01.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width / 10 - 10;
image_color_02.pixelInset.x = 5;
image_color_02.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width / 5 - 15;
image_color_03.pixelInset.x = 5;
image_color_03.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width * 3 / 10 - 20;
image_color_04.pixelInset.x = 5;
image_color_04.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width * 2 / 5 - 25;
image_color_05.pixelInset.x = 5;
image_color_05.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width * 5 / 10 - 30;
image_design.pixelInset.x = Screen.width / 10 + 10;
image_design.pixelInset.y = Screen.height - Screen.width / 30 - 5;
image_design_01.pixelInset.x = Screen.width / 10 + 10;
image_design_01.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width / 10 - 10;
image_design_02.pixelInset.x = Screen.width / 10 + 10;
image_design_02.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width / 5 - 15;
image_design_03.pixelInset.x = Screen.width / 10 + 10;
image_design_03.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width * 3 / 10 - 20;
image_design_04.pixelInset.x = Screen.width / 10 + 10;
image_design_04.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width * 2 / 5 - 25;
image_design_05.pixelInset.x = Screen.width / 10 + 10;
image_design_05.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width * 5 / 10 - 30;
image_engine.pixelInset.x = Screen.width - Screen.width / 5 - 10;
image_engine.pixelInset.y = Screen.height - Screen.width / 30 - 5;
image_engine_01.pixelInset.x = Screen.width - Screen.width / 5 - 10;
image_engine_01.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width / 10 - 10;
image_engine_02.pixelInset.x = Screen.width - Screen.width / 5 - 10;
image_engine_02.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width / 5 - 15;
image_engine_03.pixelInset.x = Screen.width - Screen.width / 5 - 10;
image_engine_03.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width * 3 / 10 - 20;
image_engine_04.pixelInset.x = Screen.width - Screen.width / 5 - 10;
image_engine_04.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width * 2 / 5 - 25;
image_engine_05.pixelInset.x = Screen.width - Screen.width / 5 - 10;
image_engine_05.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width * 5 / 10 - 30;
image_wheel.pixelInset.x = Screen.width - Screen.width / 10 - 5;
image_wheel.pixelInset.y = Screen.height - Screen.width / 30 - 5;
image_wheel_01.pixelInset.x = Screen.width - Screen.width / 10 - 5;
image_wheel_01.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width / 10 - 10;
image_wheel_02.pixelInset.x = Screen.width - Screen.width / 10 - 5;
image_wheel_02.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width / 5 - 15;
image_wheel_03.pixelInset.x = Screen.width - Screen.width / 10 - 5;
image_wheel_03.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width * 3 / 10 - 20;
image_wheel_04.pixelInset.x = Screen.width - Screen.width / 10 - 5;
image_wheel_04.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width * 2 / 5 - 25;
image_wheel_05.pixelInset.x = Screen.width - Screen.width / 10 - 5;
image_wheel_05.pixelInset.y = Screen.height - Screen.width / 30 - Screen.width * 5 / 10 - 30;
}
}

function DetectTouch () {
if (Input.touches.Length <= 0) {
}
else {
if (Input.touches.Length >= 1) {
for (var i = 0; i < Input.touchCount; i++) {
//image_watch_video
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && image_watch_video.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) {
image_watch_video.GetComponent.<GUITexture>().texture = image_watch_video_2;
}
else {
image_watch_video.GetComponent.<GUITexture>().texture = image_watch_video_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && image_watch_video.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) {
Application.LoadLevel("menu_video");
}
// End
//image_play
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && image_play.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) {
image_play.GetComponent.<GUITexture>().texture = image_play_2;
}
else {
image_play.GetComponent.<GUITexture>().texture = image_play_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && image_play.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) {
Application.LoadLevel("menu_map");
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
Application.LoadLevel("menu_start");
}
// End
//image_color_01
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_color_01.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_color_01.GetComponent.<GUITexture>().texture = image_color_01_2;
}
else {
image_color_01.GetComponent.<GUITexture>().texture = image_color_01_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_color_01.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
PlayerPrefs.SetInt("int_color", 1);
music_click.Play();
car_design ();
}
// End
//image_color_02
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_color_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_color_02.GetComponent.<GUITexture>().texture = image_color_02_2;
}
else {
image_color_02.GetComponent.<GUITexture>().texture = image_color_02_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_color_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
PlayerPrefs.SetInt("int_color", 2);
music_click.Play();
car_design ();
}
// End
//image_color_03
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_color_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_color_03.GetComponent.<GUITexture>().texture = image_color_03_2;
}
else {
image_color_03.GetComponent.<GUITexture>().texture = image_color_03_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_color_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
PlayerPrefs.SetInt("int_color", 3);
music_click.Play();
car_design ();
}
// End
//image_color_04
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_color_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_color_04.GetComponent.<GUITexture>().texture = image_color_04_2;
}
else {
image_color_04.GetComponent.<GUITexture>().texture = image_color_04_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_color_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
PlayerPrefs.SetInt("int_color", 4);
music_click.Play();
car_design ();
}
// End
//image_color_05
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_color_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_color_05.GetComponent.<GUITexture>().texture = image_color_05_2;
}
else {
image_color_05.GetComponent.<GUITexture>().texture = image_color_05_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_color_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
PlayerPrefs.SetInt("int_color", 5);
music_click.Play();
car_design ();
}
// End
//image_design_01
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_design_01.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_design_01.GetComponent.<GUITexture>().texture = image_design_01_2;
}
else {
image_design_01.GetComponent.<GUITexture>().texture = image_design_01_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_design_01.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
PlayerPrefs.SetInt("int_design", 1);
music_click.Play();
car_design ();
}
// End
//image_design_02
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_design_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_design_02.GetComponent.<GUITexture>().texture = image_design_02_2;
}
else {
image_design_02.GetComponent.<GUITexture>().texture = image_design_02_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_design_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
PlayerPrefs.SetInt("int_design", 2);
music_click.Play();
car_design ();
}
// End
//image_design_03
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_design_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_design_03.GetComponent.<GUITexture>().texture = image_design_03_2;
}
else {
image_design_03.GetComponent.<GUITexture>().texture = image_design_03_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_design_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
PlayerPrefs.SetInt("int_design", 3);
music_click.Play();
car_design ();
}
// End
//image_design_04
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_design_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_design_04.GetComponent.<GUITexture>().texture = image_design_04_2;
}
else {
image_design_04.GetComponent.<GUITexture>().texture = image_design_04_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_design_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
PlayerPrefs.SetInt("int_design", 4);
music_click.Play();
car_design ();
}
// End
//image_design_05
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_design_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_design_05.GetComponent.<GUITexture>().texture = image_design_05_2;
}
else {
image_design_05.GetComponent.<GUITexture>().texture = image_design_05_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_design_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
PlayerPrefs.SetInt("int_design", 5);
music_click.Play();
car_design ();
}
// End
//image_engine_01
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_engine_01.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_engine_01.GetComponent.<GUITexture>().texture = image_engine_01_2;
}
else {
image_engine_01.GetComponent.<GUITexture>().texture = image_engine_01_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_engine_01.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
PlayerPrefs.SetInt("int_engine", 1);
music_click.Play();
car_design ();
}
// End
//image_engine_02
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_engine_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_engine_02 == 1) {
image_engine_02.GetComponent.<GUITexture>().texture = image_engine_02_2;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_engine_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_engine_02 == 0) {
image_engine_02.GetComponent.<GUITexture>().texture = image_engine_02_4;
}
else if (int_available_engine_02 == 0) {
image_engine_02.GetComponent.<GUITexture>().texture = image_engine_02_3;
}
else {
image_engine_02.GetComponent.<GUITexture>().texture = image_engine_02_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_engine_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_engine_02 == 1) {
PlayerPrefs.SetInt("int_engine", 2);
music_click.Play();
car_design ();
}
// End
//image_engine_03
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_engine_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_engine_03 == 1) {
image_engine_03.GetComponent.<GUITexture>().texture = image_engine_03_2;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_engine_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_engine_03 == 0) {
image_engine_03.GetComponent.<GUITexture>().texture = image_engine_03_4;
}
else if (int_available_engine_03 == 0) {
image_engine_03.GetComponent.<GUITexture>().texture = image_engine_03_3;
}
else {
image_engine_03.GetComponent.<GUITexture>().texture = image_engine_03_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_engine_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_engine_03 == 1) {
PlayerPrefs.SetInt("int_engine", 3);
music_click.Play();
car_design ();
}
// End
//image_engine_04
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_engine_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_engine_04 == 1) {
image_engine_04.GetComponent.<GUITexture>().texture = image_engine_04_2;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_engine_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_engine_04 == 0) {
image_engine_04.GetComponent.<GUITexture>().texture = image_engine_04_4;
}
else if (int_available_engine_04 == 0) {
image_engine_04.GetComponent.<GUITexture>().texture = image_engine_04_3;
}
else {
image_engine_04.GetComponent.<GUITexture>().texture = image_engine_04_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_engine_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_engine_04 == 1) {
PlayerPrefs.SetInt("int_engine", 4);
music_click.Play();
car_design ();
}
// End
//image_engine_05
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_engine_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_engine_05 == 1) {
image_engine_05.GetComponent.<GUITexture>().texture = image_engine_05_2;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_engine_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_engine_05 == 0) {
image_engine_05.GetComponent.<GUITexture>().texture = image_engine_05_4;
}
else if (int_available_engine_05 == 0) {
image_engine_05.GetComponent.<GUITexture>().texture = image_engine_05_3;
}
else {
image_engine_05.GetComponent.<GUITexture>().texture = image_engine_05_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_engine_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_engine_05 == 1) {
PlayerPrefs.SetInt("int_engine", 5);
music_click.Play();
car_design ();
}
// End
//image_wheel_01
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_wheel_01.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_wheel_01.GetComponent.<GUITexture>().texture = image_wheel_01_2;
}
else {
image_wheel_01.GetComponent.<GUITexture>().texture = image_wheel_01_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_wheel_01.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
PlayerPrefs.SetInt("int_wheel", 1);
music_click.Play();
car_design ();
}
// End
//image_wheel_02
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_wheel_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_wheel_02 == 1) {
image_wheel_02.GetComponent.<GUITexture>().texture = image_wheel_02_2;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_wheel_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_wheel_02 == 0) {
image_wheel_02.GetComponent.<GUITexture>().texture = image_wheel_02_4;
}
else if (int_available_wheel_02 == 0) {
image_wheel_02.GetComponent.<GUITexture>().texture = image_wheel_02_3;
}
else {
image_wheel_02.GetComponent.<GUITexture>().texture = image_wheel_02_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_wheel_02.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_wheel_02 == 1) {
PlayerPrefs.SetInt("int_wheel", 2);
music_click.Play();
car_design ();
}
// End
//image_wheel_03
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_wheel_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_wheel_03 == 1) {
image_wheel_03.GetComponent.<GUITexture>().texture = image_wheel_03_2;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_wheel_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_wheel_03 == 0) {
image_wheel_03.GetComponent.<GUITexture>().texture = image_wheel_03_4;
}
else if (int_available_wheel_03 == 0) {
image_wheel_03.GetComponent.<GUITexture>().texture = image_wheel_03_3;
}
else {
image_wheel_03.GetComponent.<GUITexture>().texture = image_wheel_03_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_wheel_03.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_wheel_03 == 1) {
PlayerPrefs.SetInt("int_wheel", 3);
music_click.Play();
car_design ();
}
// End
//image_wheel_04
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_wheel_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_wheel_04 == 1) {
image_wheel_04.GetComponent.<GUITexture>().texture = image_wheel_04_2;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_wheel_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_wheel_04 == 0) {
image_wheel_04.GetComponent.<GUITexture>().texture = image_wheel_04_4;
}
else if (int_available_wheel_04 == 0) {
image_wheel_04.GetComponent.<GUITexture>().texture = image_wheel_04_3;
}
else {
image_wheel_04.GetComponent.<GUITexture>().texture = image_wheel_04_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_wheel_04.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_wheel_04 == 1) {
PlayerPrefs.SetInt("int_wheel", 4);
music_click.Play();
car_design ();
}
// End
//image_wheel_05
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_wheel_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_wheel_05 == 1) {
image_wheel_05.GetComponent.<GUITexture>().texture = image_wheel_05_2;
}
else if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_wheel_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_wheel_05 == 0) {
image_wheel_05.GetComponent.<GUITexture>().texture = image_wheel_05_4;
}
else if (int_available_wheel_05 == 0) {
image_wheel_05.GetComponent.<GUITexture>().texture = image_wheel_05_3;
}
else {
image_wheel_05.GetComponent.<GUITexture>().texture = image_wheel_05_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_wheel_05.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position)) && int_available_wheel_05 == 1) {
PlayerPrefs.SetInt("int_wheel", 5);
music_click.Play();
car_design ();
}
// End
car_design ();
}
}
}
}

function car_design () {
int_color = PlayerPrefs.GetInt("int_color");
int_design = PlayerPrefs.GetInt("int_design");
int_engine = PlayerPrefs.GetInt("int_engine");
int_wheel = PlayerPrefs.GetInt("int_wheel");
if (int_color == 5) {
material_body_object.color = Color32(100, 100, 100, 0);
image_color_05.GetComponent.<GUITexture>().texture = image_color_05_2;
}
else if (int_color == 4) {
material_body_object.color = Color32(220, 30, 30, 0);
image_color_04.GetComponent.<GUITexture>().texture = image_color_04_2;
}
else if (int_color == 3) {
material_body_object.color = Color32(220, 220, 130, 0);
image_color_03.GetComponent.<GUITexture>().texture = image_color_03_2;
}
else if (int_color == 2) {
material_body_object.color = Color32(130, 80, 240, 0);
image_color_02.GetComponent.<GUITexture>().texture = image_color_02_2;
}
else {
material_body_object.color = Color32(240, 160, 0, 0);
image_color_01.GetComponent.<GUITexture>().texture = image_color_01_2;
}
if (int_design == 5) {
material_body_object.mainTexture = image_design_05_texture;
image_design_05.GetComponent.<GUITexture>().texture = image_design_05_2;
}
else if (int_design == 4) {
material_body_object.mainTexture = image_design_04_texture;
image_design_04.GetComponent.<GUITexture>().texture = image_design_04_2;
}
else if (int_design == 3) {
material_body_object.mainTexture = image_design_03_texture;
image_design_03.GetComponent.<GUITexture>().texture = image_design_03_2;
}
else if (int_design == 2) {
material_body_object.mainTexture = image_design_02_texture;
image_design_02.GetComponent.<GUITexture>().texture = image_design_02_2;
}
else {
material_body_object.mainTexture = image_design_01_texture;
image_design_01.GetComponent.<GUITexture>().texture = image_design_01_2;
}
if (int_engine == 5 && int_available_engine_05 == 1) {
image_engine_05.GetComponent.<GUITexture>().texture = image_engine_05_2;
}
else if (int_engine == 4 && int_available_engine_04 == 1) {
image_engine_04.GetComponent.<GUITexture>().texture = image_engine_04_2;
}
else if (int_engine == 3 && int_available_engine_03 == 1) {
image_engine_03.GetComponent.<GUITexture>().texture = image_engine_03_2;
}
else if (int_engine == 2 && int_available_engine_02 == 1) {
image_engine_02.GetComponent.<GUITexture>().texture = image_engine_02_2;
}
else {
image_engine_01.GetComponent.<GUITexture>().texture = image_engine_01_2;
}
if (int_wheel == 5 && int_available_wheel_05 == 1) {
material_wheel_object.color = Color32(0, 150, 255, 255);
image_wheel_05.GetComponent.<GUITexture>().texture = image_wheel_05_2;
}
else if (int_wheel == 4 && int_available_wheel_04 == 1) {
material_wheel_object.color = Color32(255, 200, 0, 255);
image_wheel_04.GetComponent.<GUITexture>().texture = image_wheel_04_2;
}
else if (int_wheel == 3 && int_available_wheel_03 == 1) {
material_wheel_object.color = Color32(0, 255, 0, 255);
image_wheel_03.GetComponent.<GUITexture>().texture = image_wheel_03_2;
}
else if (int_wheel == 2 && int_available_wheel_02 == 1) {
material_wheel_object.color = Color32(0, 0, 255, 255);
image_wheel_02.GetComponent.<GUITexture>().texture = image_wheel_02_2;
}
else {
material_wheel_object.color = Color32(255, 0, 0, 255);
image_wheel_01.GetComponent.<GUITexture>().texture = image_wheel_01_2;
}
}

function availability () {
if (int_available_engine_02 == 1) {
image_engine_02.GetComponent.<GUITexture>().texture = image_engine_02_1;
}
if (int_available_engine_03 == 1) {
image_engine_03.GetComponent.<GUITexture>().texture = image_engine_03_1;
}
if (int_available_engine_04 == 1) {
image_engine_04.GetComponent.<GUITexture>().texture = image_engine_04_1;
}
if (int_available_engine_05 == 1) {
image_engine_05.GetComponent.<GUITexture>().texture = image_engine_05_1;
}
if (int_available_wheel_02 == 1) {
image_wheel_02.GetComponent.<GUITexture>().texture = image_wheel_02_1;
}
if (int_available_wheel_03 == 1) {
image_wheel_03.GetComponent.<GUITexture>().texture = image_wheel_03_1;
}
if (int_available_wheel_04 == 1) {
image_wheel_04.GetComponent.<GUITexture>().texture = image_wheel_04_1;
}
if (int_available_wheel_05 == 1) {
image_wheel_05.GetComponent.<GUITexture>().texture = image_wheel_05_1;
}
}
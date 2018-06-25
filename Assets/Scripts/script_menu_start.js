#pragma strict
var music_click_object : GameObject;
var rotate_object_1 : GameObject;
var image_play_1 : Texture2D;
var image_play_2 : Texture2D;
var image_about_1 : Texture2D;
var image_about_2 : Texture2D;
var image_exit_1 : Texture2D;
var image_exit_2 : Texture2D;
var image_close_1 : Texture2D;
var image_close_2 : Texture2D;
public var Text_All_Score_Object : GameObject;
public var image_speed_jumper_object : GameObject;
public var image_about_text_object : GameObject;
public var image_play_object : GameObject;
public var image_about_object : GameObject;
public var image_exit_object : GameObject;
public var image_close_object : GameObject;
private var Int_All_Score : int = 0;
private var image_speed_jumper : GUITexture;
private var image_play : GUITexture;
private var image_about : GUITexture;
private var image_exit : GUITexture;
private var image_close : GUITexture;
private var image_about_text : GUITexture;
private var Text_All_Score : UI.Text;
private var music_click : AudioSource;

function Start () {
Text_All_Score = Text_All_Score_Object.GetComponent(UI.Text);
image_speed_jumper = image_speed_jumper_object.GetComponent(GUITexture);
image_play = image_play_object.GetComponent(GUITexture);
image_about = image_about_object.GetComponent(GUITexture);
image_exit = image_exit_object.GetComponent(GUITexture);
image_close = image_close_object.GetComponent(GUITexture);
image_about_text = image_about_text_object.GetComponent(GUITexture);
music_click = music_click_object.GetComponent(AudioSource);
}

function Update () {
}

function FixedUpdate () {
DetectTouch ();
Score ();
rotate_object_1.transform.Rotate(Vector3.up * Time.deltaTime * 10, Space.World);
Text_All_Score.fontSize = Mathf.Abs(Mathf.Round(Screen.width / 20));
Text_All_Score.rectTransform.position.x = Screen.width / 2;
Text_All_Score.rectTransform.position.y = Screen.height - Screen.width / 20;
image_close.pixelInset.width = 100;
image_close.pixelInset.height = 100;
image_close.pixelInset.x = Screen.width - 110;
image_close.pixelInset.y = Screen.height - 110;
if (Screen.width > 1000) {
image_speed_jumper.pixelInset.width = 1000;
image_speed_jumper.pixelInset.height = 200;
image_play.pixelInset.width = 500;
image_play.pixelInset.height = 100;
image_about.pixelInset.width = 500;
image_about.pixelInset.height = 100;
image_exit.pixelInset.width = 500;
image_exit.pixelInset.height = 100;
image_about_text.pixelInset.width = 900;
image_about_text.pixelInset.height = 300;
image_speed_jumper.pixelInset.x = (Screen.width - 1000) / 2;
image_speed_jumper.pixelInset.y = Screen.height - 200;
image_play.pixelInset.x = (Screen.width - 500) / 2;
image_play.pixelInset.y = Screen.height * 3 / 7;
image_about.pixelInset.x = (Screen.width - 500) / 2;
image_about.pixelInset.y = Screen.height * 2 / 7;
image_exit.pixelInset.x = (Screen.width - 500) / 2;
image_exit.pixelInset.y = Screen.height * 1 / 7;
image_about_text.pixelInset.x = (Screen.width - 900) / 2;
image_about_text.pixelInset.y = (Screen.height - 300) / 2;
}
else {
image_speed_jumper.pixelInset.width = Screen.width;
image_speed_jumper.pixelInset.height = Screen.width * 0.2;
image_play.pixelInset.width = Screen.width * 0.5;
image_play.pixelInset.height = Screen.width * 0.1;
image_about.pixelInset.width = Screen.width * 0.5;
image_about.pixelInset.height = Screen.width * 0.1;
image_exit.pixelInset.width = Screen.width * 0.5;
image_exit.pixelInset.height = Screen.width * 0.1;
image_about_text.pixelInset.width = Screen.width;
image_about_text.pixelInset.height = Screen.width / 3;
image_speed_jumper.pixelInset.x = 0;
image_speed_jumper.pixelInset.y = Screen.height - Screen.width * 0.2;
image_play.pixelInset.x = Screen.width / 4;
image_play.pixelInset.y = Screen.height * 3 / 7;
image_about.pixelInset.x = Screen.width / 4;
image_about.pixelInset.y = Screen.height * 2 / 7;
image_exit.pixelInset.x = Screen.width / 4;
image_exit.pixelInset.y = Screen.height * 1 / 7;
image_about_text.pixelInset.x = 0;
image_about_text.pixelInset.y = (Screen.height - Screen.width / 3) / 2;
}
}

function DetectTouch() {
if (Input.touches.Length <= 0) {
}
else {
if (Input.touches.Length >= 1) {
for (var i = 0; i < Input.touchCount; i++) {
//image_play
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_play.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_play.GetComponent.<GUITexture>().texture = image_play_2;
}
else {
image_play.GetComponent.<GUITexture>().texture = image_play_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_play.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_play_object.activeInHierarchy)) {
Application.LoadLevel("menu_garage");
}
// End
//image_about
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_about.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_about.GetComponent.<GUITexture>().texture = image_about_2;
}
else {
image_about.GetComponent.<GUITexture>().texture = image_about_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_about.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_about_object.activeInHierarchy)) {
music_click.Play();
image_close_object.SetActive(true);
image_about_text_object.SetActive(true);
image_speed_jumper_object.SetActive(false);
image_play_object.SetActive(false);
image_about_object.SetActive(false);
image_exit_object.SetActive(false);
}
// End
//image_exit
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_exit.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_exit.GetComponent.<GUITexture>().texture = image_exit_2;
}
else {
image_exit.GetComponent.<GUITexture>().texture = image_exit_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_exit.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_exit_object.activeInHierarchy)) {
music_click.Play();
Application.Quit();
}
// End
//image_close
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_close.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_close.GetComponent.<GUITexture>().texture = image_close_2;
}
else {
image_close.GetComponent.<GUITexture>().texture = image_close_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_close.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_close_object.activeInHierarchy)) {
music_click.Play();
image_about_text_object.SetActive(false);
image_close_object.SetActive(false);
image_speed_jumper_object.SetActive(true);
image_play_object.SetActive(true);
image_about_object.SetActive(true);
image_exit_object.SetActive(true);
}
// End
}
}
}
}

function Score () {
Text_All_Score.text = "SCORE: " + PlayerPrefs.GetInt("score_stored").ToString();
}
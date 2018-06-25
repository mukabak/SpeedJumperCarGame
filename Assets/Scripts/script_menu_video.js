#pragma strict
var music_click_object : GameObject;
var rotate_object_1 : GameObject;
var image_back_1 : Texture2D;
var image_back_2 : Texture2D;
public var Text_All_Score_Object : GameObject;
public var image_thank_you_object : GameObject;
public var image_back_object : GameObject;
private var Int_All_Score : int = 0;
private var image_thank_you : GUITexture;
private var image_back : GUITexture;
private var Text_All_Score : UI.Text;
private var music_click : AudioSource;

function Start () {
Text_All_Score = Text_All_Score_Object.GetComponent(UI.Text);
image_thank_you = image_thank_you_object.GetComponent(GUITexture);
image_back = image_back_object.GetComponent(GUITexture);
music_click = music_click_object.GetComponent(AudioSource);

if (PlayerPrefs.GetInt("int_available_engine_02") == 0) {
PlayerPrefs.SetInt("int_available_engine_02", 1);
}
else if (PlayerPrefs.GetInt("int_available_wheel_02") == 0) {
PlayerPrefs.SetInt("int_available_wheel_02", 1);
}
else if (PlayerPrefs.GetInt("int_available_engine_03") == 0) {
PlayerPrefs.SetInt("int_available_engine_03", 1);
}
else if (PlayerPrefs.GetInt("int_available_wheel_03") == 0) {
PlayerPrefs.SetInt("int_available_wheel_03", 1);
}
else if (PlayerPrefs.GetInt("int_available_engine_04") == 0) {
PlayerPrefs.SetInt("int_available_engine_04", 1);
}
else if (PlayerPrefs.GetInt("int_available_wheel_04") == 0) {
PlayerPrefs.SetInt("int_available_wheel_04", 1);
}
else if (PlayerPrefs.GetInt("int_available_engine_05") == 0) {
PlayerPrefs.SetInt("int_available_engine_05", 1);
}
else if (PlayerPrefs.GetInt("int_available_wheel_05") == 0) {
PlayerPrefs.SetInt("int_available_wheel_05", 1);
}
else {
PlayerPrefs.SetInt("int_available_wheel_02", 0);
PlayerPrefs.SetInt("int_available_wheel_03", 0);
PlayerPrefs.SetInt("int_available_wheel_04", 0);
PlayerPrefs.SetInt("int_available_wheel_05", 0);
PlayerPrefs.SetInt("int_available_engine_02", 0);
PlayerPrefs.SetInt("int_available_engine_03", 0);
PlayerPrefs.SetInt("int_available_engine_04", 0);
PlayerPrefs.SetInt("int_available_engine_05", 0);
}

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
if (Screen.width > 1000) {
image_thank_you.pixelInset.width = 500;
image_thank_you.pixelInset.height = 250;
image_back.pixelInset.width = 500;
image_back.pixelInset.height = 100;
image_thank_you.pixelInset.x = (Screen.width - 500) / 2;
image_thank_you.pixelInset.y = (Screen.height - 250) / 2;
image_back.pixelInset.x = (Screen.width - 500) / 2;
image_back.pixelInset.y = 0;
}
else {
image_thank_you.pixelInset.width = Screen.width / 2;
image_thank_you.pixelInset.height = Screen.width / 4;
image_back.pixelInset.width = Screen.width * 0.5;
image_back.pixelInset.height = Screen.width * 0.1;
image_thank_you.pixelInset.x = Screen.width / 4;
image_thank_you.pixelInset.y = (Screen.height - Screen.width / 4) / 2;
image_back.pixelInset.x = Screen.width / 4;
image_back.pixelInset.y = 0;
}
}

function DetectTouch() {
if (Input.touches.Length <= 0) {
}
else {
if (Input.touches.Length >= 1) {
for (var i = 0; i < Input.touchCount; i++) {
//image_back
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_back.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position))) {
image_back.GetComponent.<GUITexture>().texture = image_back_2;
}
else {
image_back.GetComponent.<GUITexture>().texture = image_back_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_back.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_back_object.activeInHierarchy)) {
Application.LoadLevel("menu_garage");
}
// End
}
}
}
}

function Score () {
Text_All_Score.text = "SCORE: " + PlayerPrefs.GetInt("score_stored").ToString();
}
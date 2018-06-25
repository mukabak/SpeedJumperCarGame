#pragma strict
var images_controller : GameObject;
var image_you_won_object : GameObject;
var image_next_object : GameObject;
var image_replay_object : GameObject;
var image_exit_object : GameObject;
var text_add_score_jump_object : GameObject;
var car : Transform;
var distance : float = 3.4;
var height : float = 1.4;
var rotationDamping : float = 3.0;
var heightDamping : float = 2.0;
var zoomRacio : float = 6;
var xxxxxx : float;
var DefaultFOV : float = 60;
private var rotationVector : Vector3;
private var text_add_score_jump : UI.Text;
private var int_add_score : int = 0;
private var int_score_old : int = 0;
private var int_score_new : int = 0;
private var int_level : int;

function Start () {
text_add_score_jump = text_add_score_jump_object.GetComponent(UI.Text);
int_level = PlayerPrefs.GetInt("int_level");
}

function LateUpdate () {
var wantedAngle = rotationVector.y;
var wantedHeight = car.position.y + height;
var myAngle = transform.eulerAngles.y;
var myHeight = transform.position.y;
myAngle = Mathf.LerpAngle(myAngle, wantedAngle, rotationDamping * Time.deltaTime);
myHeight = Mathf.Lerp(myHeight, wantedHeight, heightDamping * Time.deltaTime);
var currentRotation = Quaternion.Euler(0, myAngle, 0);
transform.position = car.position;
transform.position -= currentRotation * Vector3.forward * distance;
transform.position.y = myHeight;
transform.LookAt(car);
}
function FixedUpdate () {
var localVelocity = car.InverseTransformDirection(car.GetComponent.<Rigidbody>().velocity);
if (localVelocity.z < -0.5) {
rotationVector.y = car.eulerAngles.y + 180;
}
else {

if (Application.loadedLevelName == "level_01") {
if (car.transform.position.y > 5) {
if (car.transform.position.z > -3 && car.transform.position.z < 25 && car.transform.position.x > -155 && car.transform.position.x < -140) {
if (int_level < 2) {
PlayerPrefs.SetInt("int_level", 2);
}
images_controller.SetActive(false);
image_you_won_object.SetActive(true);
image_next_object.SetActive(true);
image_replay_object.SetActive(true);
image_exit_object.SetActive(true);
}
rotationVector.y = car.eulerAngles.y + 120;
Time.timeScale = 0.25;
height = 8;
int_add_score = 1000;
text_add_score_jump.text = "+" +int_add_score.ToString();
text_add_score_jump_object.SetActive(true);
}
else {
rotationVector.y = car.eulerAngles.y;
height = 1.4;
Time.timeScale = 1;
int_score_old = 0;
int_score_old = PlayerPrefs.GetInt("score_stored");
int_score_new = 0;
int_score_new = int_score_old + int_add_score;
PlayerPrefs.SetInt("score_stored", int_score_new);
text_add_score_jump_object.SetActive(false);
int_add_score = 0;
}
}
if (Application.loadedLevelName == "level_02") {
if (car.transform.position.y > 8) {
if (car.transform.position.z > -165 && car.transform.position.z < -140 && car.transform.position.x > -165 && car.transform.position.x < -135) {
if (int_level < 3) {
PlayerPrefs.SetInt("int_level", 3);
}
images_controller.SetActive(false);
image_you_won_object.SetActive(true);
image_next_object.SetActive(true);
image_replay_object.SetActive(true);
image_exit_object.SetActive(true);
}
rotationVector.y = car.eulerAngles.y + 120;
Time.timeScale = 0.25;
height = 8;
int_add_score = 2000;
text_add_score_jump.text = "+" +int_add_score.ToString();
text_add_score_jump_object.SetActive(true);
}
else {
rotationVector.y = car.eulerAngles.y;
height = 1.4;
Time.timeScale = 1;
int_score_old = 0;
int_score_old = PlayerPrefs.GetInt("score_stored");
int_score_new = 0;
int_score_new = int_score_old + int_add_score;
PlayerPrefs.SetInt("score_stored", int_score_new);
text_add_score_jump_object.SetActive(false);
int_add_score = 0;
}
}
if (Application.loadedLevelName == "level_03") {
if (car.transform.position.y > 8 && car.transform.position.y < 15) {
rotationVector.y = car.eulerAngles.y + 120;
Time.timeScale = 0.25;
height = 12;
}
else if (car.transform.position.y > 25) {
if (car.transform.position.z > 165 && car.transform.position.z < 170 && car.transform.position.x > -10 && car.transform.position.x < 10) {
if (int_level < 4) {
PlayerPrefs.SetInt("int_level", 4);
}
images_controller.SetActive(false);
image_you_won_object.SetActive(true);
image_next_object.SetActive(true);
image_replay_object.SetActive(true);
image_exit_object.SetActive(true);
}
rotationVector.y = car.eulerAngles.y + 120;
Time.timeScale = 0.25;
height = 5;
int_add_score = 3000;
text_add_score_jump.text = "+" +int_add_score.ToString();
text_add_score_jump_object.SetActive(true);
}
else {
rotationVector.y = car.eulerAngles.y;
height = 1.4;
Time.timeScale = 1;
int_score_old = 0;
int_score_old = PlayerPrefs.GetInt("score_stored");
int_score_new = 0;
int_score_new = int_score_old + int_add_score;
PlayerPrefs.SetInt("score_stored", int_score_new);
text_add_score_jump_object.SetActive(false);
int_add_score = 0;
}
}
if (Application.loadedLevelName == "level_04") {
if (car.transform.position.y > 30 && car.transform.position.y < 50) {
rotationVector.y = car.eulerAngles.y + 120;
Time.timeScale = 0.25;
height = 12;
}
else if (car.transform.position.y > 55) {
if (car.transform.position.z > 145 && car.transform.position.z < 160 && car.transform.position.x > 130 && car.transform.position.x < 160) {
if (int_level < 5) {
PlayerPrefs.SetInt("int_level", 5);
}
images_controller.SetActive(false);
image_you_won_object.SetActive(true);
image_next_object.SetActive(true);
image_replay_object.SetActive(true);
image_exit_object.SetActive(true);
}
rotationVector.y = car.eulerAngles.y + 120;
Time.timeScale = 0.25;
height = 8;
int_add_score = 4000;
text_add_score_jump.text = "+" +int_add_score.ToString();
text_add_score_jump_object.SetActive(true);
}
else {
rotationVector.y = car.eulerAngles.y;
height = 1.4;
Time.timeScale = 1;
int_score_old = 0;
int_score_old = PlayerPrefs.GetInt("score_stored");
int_score_new = 0;
int_score_new = int_score_old + int_add_score;
PlayerPrefs.SetInt("score_stored", int_score_new);
text_add_score_jump_object.SetActive(false);
int_add_score = 0;
}
}
if (Application.loadedLevelName == "level_05") {
if (car.transform.position.y > 5 && car.transform.position.y < 14.5) {
rotationVector.y = car.eulerAngles.y + 120;
Time.timeScale = 0.25;
height = 12;
}
else if (car.transform.position.y > 15.5 && car.transform.position.y < 25) {
rotationVector.y = car.eulerAngles.y + 120;
Time.timeScale = 0.25;
height = 12;
}
else if (car.transform.position.y > 30.5 && car.transform.position.y < 40) {
rotationVector.y = car.eulerAngles.y + 120;
Time.timeScale = 0.25;
height = 12;
}
else if (car.transform.position.y > 45.5 && car.transform.position.y < 55) {
rotationVector.y = car.eulerAngles.y + 120;
Time.timeScale = 0.25;
height = 12;
}
else if (car.transform.position.y > 60) {
if (car.transform.position.z > 125 && car.transform.position.z < 150 && car.transform.position.x > -155 && car.transform.position.x < -130) {
if (int_level < 6) {
PlayerPrefs.SetInt("int_level", 6);
}
images_controller.SetActive(false);
image_you_won_object.SetActive(true);
image_next_object.SetActive(true);
image_replay_object.SetActive(true);
image_exit_object.SetActive(true);
}
rotationVector.y = car.eulerAngles.y + 120;
Time.timeScale = 0.25;
height = 8;
int_add_score = 5000;
text_add_score_jump.text = "+" +int_add_score.ToString();
text_add_score_jump_object.SetActive(true);
}
else {
rotationVector.y = car.eulerAngles.y;
height = 1.4;
Time.timeScale = 1;
int_score_old = 0;
int_score_old = PlayerPrefs.GetInt("score_stored");
int_score_new = 0;
int_score_new = int_score_old + int_add_score;
PlayerPrefs.SetInt("score_stored", int_score_new);
text_add_score_jump_object.SetActive(false);
int_add_score = 0;
}
}
if (Application.loadedLevelName == "level_06") {
rotationVector.y = car.eulerAngles.y;
height = 1.4;
Time.timeScale = 1;
}

}
var acc = 0.6 * car.GetComponent.<Rigidbody>().velocity.magnitude;
var acc2 = 0.6 * car.GetComponent.<Rigidbody>().velocity.magnitude;
xxxxxx = (car.GetComponent.<Rigidbody>().velocity.magnitude - 30);
if (acc < 18) {
GetComponent.<Camera>().fieldOfView = DefaultFOV + acc * acc * zoomRacio * Time.deltaTime;
} 
else if (acc > 18) {
GetComponent.<Camera>().fieldOfView = xxxxxx + DefaultFOV + 325 * zoomRacio * Time.deltaTime;
}
}
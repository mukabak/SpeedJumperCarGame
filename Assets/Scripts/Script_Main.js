#pragma strict
var material_body_object : Material;
var material_wheel_object : Material;
var music_click_object : GameObject;
var music_car_crash_object : GameObject;
var paused = false;
var enginePitch : float = 0.00;
var wheelFL : WheelCollider;
var wheelFR : WheelCollider;
var wheelBL : WheelCollider;
var wheelBR : WheelCollider;
var wheelFLTrans : Transform;
var wheelFRTrans : Transform;
var wheelBLTrans : Transform;
var wheelBRTrans : Transform;
var currentSpeed : float;
var sppedOMeterDial : Texture2D;
var sppedOMeterPointer : Texture2D;
var image_design_01_texture : Texture2D;
var image_design_02_texture : Texture2D;
var image_design_03_texture : Texture2D;
var image_design_04_texture : Texture2D;
var image_design_05_texture : Texture2D;
var image_forward_texture_01 : Texture2D;
var image_forward_texture_02 : Texture2D;
var image_backward_texture_01 : Texture2D;
var image_backward_texture_02 : Texture2D;
var image_brake_texture_01 : Texture2D;
var image_brake_texture_02 : Texture2D;
var image_left_texture_01 : Texture2D;
var image_left_texture_02 : Texture2D;
var image_right_texture_01 : Texture2D;
var image_right_texture_02 : Texture2D;
var image_menu_1 : Texture2D;
var image_menu_2 : Texture2D;
var image_resume_1 : Texture2D;
var image_resume_2 : Texture2D;
var image_next_1 : Texture2D;
var image_next_2 : Texture2D;
var image_replay_1 : Texture2D;
var image_replay_2 : Texture2D;
var image_exit_1 : Texture2D;
var image_exit_2 : Texture2D;
public var Text_Add_Score_Object : GameObject;
public var Text_Add_Score_Jump_Object : GameObject;
public var Text_All_Score_Object : GameObject;
public var Button_Menu_Object : GameObject;
public var Button_Forward_Object : GameObject;
public var Button_Backward_Object : GameObject;
public var Button_Brake_Object : GameObject;
public var Button_Left_Object : GameObject;
public var Button_Right_Object : GameObject;
public var image_speed_jumper_object : GameObject;
public var image_you_won_object : GameObject;
public var image_next_object : GameObject;
public var image_resume_object : GameObject;
public var image_replay_object : GameObject;
public var image_exit_object : GameObject;
public var image_map_border_object : GameObject;
public var images_controller_object : GameObject;
public var text_Car_Speed_Object : GameObject;
public var text_Car_Gear_Object : GameObject;
public var back_Spot_1_Red : GameObject;
public var back_Spot_2_Red : GameObject;
public var back_Spot_3_Red : GameObject;
public var back_Spot_4_Red : GameObject;
private var maxTorque : int = 0;
private var Int_Add_Score : int = 0;
private var Int_All_Score : int = 0;
private var int_color : int = 0;
private var int_design : int = 0;
private var int_engine : int = 0;
private var int_wheel : int = 0;
private var Button_Menu : GUITexture;
private var Button_Forward : GUITexture;
private var Button_Backward : GUITexture;
private var Button_Brake : GUITexture;
private var Button_Left : GUITexture;
private var Button_Right : GUITexture;
private var image_speed_jumper : GUITexture;
private var image_you_won : GUITexture;
private var image_resume : GUITexture;
private var image_next : GUITexture;
private var image_replay : GUITexture;
private var image_exit : GUITexture;
private var image_map_border : GUITexture;
private var Text_Add_Score : UI.Text;
private var Text_Add_Score_Jump : UI.Text;
private var Text_All_Score : UI.Text;
private var text_Car_Speed : UI.Text;
private var text_Car_Gear : UI.Text;
private var back_Spot_1_Red_Light : Light;
private var back_Spot_2_Red_Light : Light;
private var back_Spot_3_Red_Light : Light;
private var back_Spot_4_Red_Light : Light;
private var mySidewayFriction : float;
private var myForwardFriction : float;
private var slipSidewayFriction : float;
private var slipForwardFriction : float;
private var music_click : AudioSource;
private var music_car_crash : AudioSource;

function Start () {
int_color = PlayerPrefs.GetInt("int_color");
int_design = PlayerPrefs.GetInt("int_design");
int_engine = PlayerPrefs.GetInt("int_engine");
int_wheel = PlayerPrefs.GetInt("int_wheel");
if (int_color == 5) {
material_body_object.color = Color32(100, 100, 100, 0);
}
else if (int_color == 4) {
material_body_object.color = Color32(220, 30, 30, 0);
}
else if (int_color == 3) {
material_body_object.color = Color32(220, 220, 130, 0);
}
else if (int_color == 2) {
material_body_object.color = Color32(130, 80, 240, 0);
}
else {
material_body_object.color = Color32(240, 160, 0, 0);
}
if (int_design == 5) {
material_body_object.mainTexture = image_design_05_texture;
}
else if (int_design == 4) {
material_body_object.mainTexture = image_design_04_texture;
}
else if (int_design == 3) {
material_body_object.mainTexture = image_design_03_texture;
}
else if (int_design == 2) {
material_body_object.mainTexture = image_design_02_texture;
}
else {
material_body_object.mainTexture = image_design_01_texture;
}
if (int_engine == 5) {
maxTorque = 400;
}
else if (int_engine == 4) {
maxTorque = 350;
}
else if (int_engine == 3) {
maxTorque = 300;
}
else if (int_engine == 2) {
maxTorque = 275;
}
else {
maxTorque = 250;
}
if (int_wheel == 5) {
material_wheel_object.color = Color32(0, 150, 255, 255);
}
else if (int_wheel == 4) {
material_wheel_object.color = Color32(255, 200, 0, 255);
}
else if (int_wheel == 3) {
material_wheel_object.color = Color32(0, 255, 0, 255);
}
else if (int_wheel == 2) {
material_wheel_object.color = Color32(0, 0, 255, 255);
}
else {
material_wheel_object.color = Color32(255, 0, 0, 255);
}
myForwardFriction = wheelBR.forwardFriction.stiffness;
mySidewayFriction = wheelBR.sidewaysFriction.stiffness;
slipForwardFriction = 0.1;
slipSidewayFriction = 0.05;
back_Spot_1_Red_Light = back_Spot_1_Red.GetComponent(Light);
back_Spot_2_Red_Light = back_Spot_2_Red.GetComponent(Light);
back_Spot_3_Red_Light = back_Spot_3_Red.GetComponent(Light);
back_Spot_4_Red_Light = back_Spot_4_Red.GetComponent(Light);
Text_Add_Score = Text_Add_Score_Object.GetComponent(UI.Text);
Text_Add_Score_Jump = Text_Add_Score_Jump_Object.GetComponent(UI.Text);
Text_All_Score = Text_All_Score_Object.GetComponent(UI.Text);
text_Car_Speed = text_Car_Speed_Object.GetComponent(UI.Text);
text_Car_Gear = text_Car_Gear_Object.GetComponent(UI.Text);
Button_Menu = Button_Menu_Object.GetComponent(GUITexture);
Button_Forward = Button_Forward_Object.GetComponent(GUITexture);
Button_Backward = Button_Backward_Object.GetComponent(GUITexture);
Button_Brake = Button_Brake_Object.GetComponent(GUITexture);
Button_Left = Button_Left_Object.GetComponent(GUITexture);
Button_Right = Button_Right_Object.GetComponent(GUITexture);
image_speed_jumper = image_speed_jumper_object.GetComponent(GUITexture);
image_you_won = image_you_won_object.GetComponent(GUITexture);
image_resume = image_resume_object.GetComponent(GUITexture);
image_next = image_next_object.GetComponent(GUITexture);
image_replay = image_replay_object.GetComponent(GUITexture);
image_exit = image_exit_object.GetComponent(GUITexture);
image_map_border = image_map_border_object.GetComponent(GUITexture);
music_click = music_click_object.GetComponent(AudioSource);
music_car_crash = music_car_crash_object.GetComponent(AudioSource);

if (Screen.width > 1000) {
image_speed_jumper.pixelInset.width = 1000;
image_speed_jumper.pixelInset.height = 200;
image_you_won.pixelInset.width = 1000;
image_you_won.pixelInset.height = 200;
image_resume.pixelInset.width = 500;
image_resume.pixelInset.height = 100;
image_next.pixelInset.width = 500;
image_next.pixelInset.height = 100;
image_replay.pixelInset.width = 500;
image_replay.pixelInset.height = 100;
image_exit.pixelInset.width = 500;
image_exit.pixelInset.height = 100;
image_speed_jumper.pixelInset.x = (Screen.width - 1000) / 2;
image_speed_jumper.pixelInset.y = Screen.height - 200;
image_you_won.pixelInset.x = (Screen.width - 1000) / 2;
image_you_won.pixelInset.y = Screen.height - 200;
image_resume.pixelInset.x = (Screen.width - 500) / 2;
image_resume.pixelInset.y = Screen.height * 3 / 7;
image_next.pixelInset.x = (Screen.width - 500) / 2;
image_next.pixelInset.y = Screen.height * 3 / 7;
image_replay.pixelInset.x = (Screen.width - 500) / 2;
image_replay.pixelInset.y = Screen.height * 2 / 7;
image_exit.pixelInset.x = (Screen.width - 500) / 2;
image_exit.pixelInset.y = Screen.height * 1 / 7;
}
else {
image_speed_jumper.pixelInset.width = Screen.width;
image_speed_jumper.pixelInset.height = Screen.width * 0.2;
image_you_won.pixelInset.width = Screen.width;
image_you_won.pixelInset.height = Screen.width * 0.2;
image_resume.pixelInset.width = Screen.width * 0.5;
image_resume.pixelInset.height = Screen.width * 0.1;
image_next.pixelInset.width = Screen.width * 0.5;
image_next.pixelInset.height = Screen.width * 0.1;
image_replay.pixelInset.width = Screen.width * 0.5;
image_replay.pixelInset.height = Screen.width * 0.1;
image_exit.pixelInset.width = Screen.width * 0.5;
image_exit.pixelInset.height = Screen.width * 0.1;
image_speed_jumper.pixelInset.x = 0;
image_speed_jumper.pixelInset.y = Screen.height - Screen.width * 0.2;
image_you_won.pixelInset.x = 0;
image_you_won.pixelInset.y = Screen.height - Screen.width * 0.2;
image_resume.pixelInset.x = Screen.width / 4;
image_resume.pixelInset.y = Screen.height * 3 / 7;
image_next.pixelInset.x = Screen.width / 4;
image_next.pixelInset.y = Screen.height * 3 / 7;
image_replay.pixelInset.x = Screen.width / 4;
image_replay.pixelInset.y = Screen.height * 2 / 7;
image_exit.pixelInset.x = Screen.width / 4;
image_exit.pixelInset.y = Screen.height * 1 / 7;
}
}

function FixedUpdate () {
UpdateValues ();
Brake ();
EngineSound ();
DetectTouch ();
Score ();
}

function UpdateValues () {
currentSpeed = Mathf.Abs(Mathf.Round(1.2 * 2 * 22 / 7 * wheelBL.radius * ((wheelFL.rpm + wheelFR.rpm) / 2) * 60 / 1000));
if (Time.timeScale != 1) {
GetComponent.<AudioSource>().volume = 0.2;
}
else {
GetComponent.<AudioSource>().volume = 0.5;
}
Button_Right.GetComponent.<GUITexture>().texture = image_right_texture_01;
Button_Left.GetComponent.<GUITexture>().texture = image_left_texture_01;
Button_Brake.GetComponent.<GUITexture>().texture = image_brake_texture_01;
Button_Forward.GetComponent.<GUITexture>().texture = image_forward_texture_01;
Button_Backward.GetComponent.<GUITexture>().texture = image_backward_texture_01;
back_Spot_1_Red_Light.intensity = 4;
back_Spot_2_Red_Light.intensity = 2;
back_Spot_3_Red_Light.intensity = 2;
back_Spot_4_Red_Light.intensity = 4;
text_Car_Speed.text = (Mathf.Abs(Mathf.Round(1.5 * currentSpeed))).ToString();
Text_Add_Score.fontSize = Mathf.Abs(Mathf.Round(Screen.width / 8));
Text_Add_Score_Jump.fontSize = Mathf.Abs(Mathf.Round(Screen.width / 8));
Text_All_Score.fontSize = Mathf.Abs(Mathf.Round(Screen.width / 20));
text_Car_Speed.fontSize = Mathf.Abs(Mathf.Round(Screen.width / 25));
text_Car_Gear.fontSize = Mathf.Abs(Mathf.Round(Screen.width / 25));
Text_Add_Score.rectTransform.position.x = Screen.width / 1.3;
Text_Add_Score.rectTransform.position.y = Screen.height / 1.7;
Text_Add_Score_Jump.rectTransform.position.x = Screen.width / 1.3;
Text_Add_Score_Jump.rectTransform.position.y = Screen.height / 2.3;
Text_All_Score.rectTransform.position.x = Screen.width / 3;
Text_All_Score.rectTransform.position.y = Screen.height - Screen.width / 20;
text_Car_Gear.rectTransform.position.y = Screen.width / 8 - Screen.width / 35;
text_Car_Gear.rectTransform.position.x = Screen.width / 2 + Screen.width / 25;
text_Car_Speed.rectTransform.position.y = Screen.width / 25;
text_Car_Speed.rectTransform.position.x = Screen.width / 2;
Button_Menu.pixelInset.width = Screen.width / 12;
Button_Menu.pixelInset.height = Screen.width / 12;
Button_Forward.pixelInset.width = Screen.width / 6;
Button_Forward.pixelInset.height = Screen.width / 6;
Button_Backward.pixelInset.width = Screen.width / 6;
Button_Backward.pixelInset.height = Screen.width / 6;
Button_Brake.pixelInset.width = Screen.width / 6;
Button_Brake.pixelInset.height = Screen.width / 6;
Button_Right.pixelInset.width = Screen.width / 6;
Button_Right.pixelInset.height = Screen.width / 6;
Button_Left.pixelInset.width = Screen.width / 6;
Button_Left.pixelInset.height = Screen.width / 6;
Button_Menu.pixelInset.x = Screen.width / 80;
Button_Menu.pixelInset.y = Screen.height - Screen.width / 12 - Screen.width / 80;
Button_Forward.pixelInset.x = Screen.width / 80;
Button_Forward.pixelInset.y = Screen.width / 6 + Screen.width / 40; 
Button_Backward.pixelInset.x = Screen.width / 80;
Button_Backward.pixelInset.y = Screen.width / 80;
Button_Brake.pixelInset.x = Screen.width / 40 + Screen.width / 6;
Button_Brake.pixelInset.y = Screen.width / 80;
Button_Right.pixelInset.x = Screen.width - Screen.width / 6 - Screen.width / 80;
Button_Right.pixelInset.y = Screen.width / 80;
Button_Left.pixelInset.x = Screen.width - Screen.width / 6 - Screen.width / 80 - Screen.width / 6 - Screen.width / 80;
Button_Left.pixelInset.y = Screen.width / 80;
image_map_border.pixelInset.width = Screen.width / 5 - Screen.width * 0.01;
image_map_border.pixelInset.height = Screen.height / 4;
image_map_border.pixelInset.x = Screen.width * 0.79225;
image_map_border.pixelInset.y = Screen.height * 0.739;

}

function Update () {
if (paused == true) {
Time.timeScale = 0;
}

WheelPosition ();
wheelFLTrans.Rotate(wheelFL.rpm / 60 * 360 * Time.deltaTime, 0, 0);
wheelFRTrans.Rotate(wheelFR.rpm / 60 * 360 * Time.deltaTime, 0, 0);
wheelBLTrans.Rotate(wheelBL.rpm / 60 * 360 * Time.deltaTime, 0, 0);
wheelBRTrans.Rotate(wheelBR.rpm / 60 * 360 * Time.deltaTime, 0, 0);
wheelFLTrans.localEulerAngles.y = wheelFL.steerAngle - wheelFLTrans.localEulerAngles.z;
wheelFRTrans.localEulerAngles.y = wheelFR.steerAngle - wheelFRTrans.localEulerAngles.z;
}

function WheelPosition () {
var hit : RaycastHit;
var wheelPos : Vector3;
if (Physics.Raycast(wheelFL.transform.position, -wheelFL.transform.up, hit, wheelFL.radius + wheelFL.suspensionDistance )) {
wheelPos = hit.point + wheelFL.transform.up * wheelFL.radius;
}
else {
wheelPos = wheelFL.transform.position - wheelFL.transform.up * wheelFL.suspensionDistance;
}
wheelFLTrans.position = wheelPos;
if (Physics.Raycast(wheelFR.transform.position, -wheelFR.transform.up, hit, wheelFR.radius + wheelFR.suspensionDistance )) {
wheelPos = hit.point + wheelFR.transform.up * wheelFR.radius;
}
else {
wheelPos = wheelFR.transform.position - wheelFR.transform.up * wheelFR.suspensionDistance;
}
wheelFRTrans.position = wheelPos;
if (Physics.Raycast(wheelBR.transform.position, -wheelBR.transform.up, hit, wheelBR.radius + wheelBR.suspensionDistance )) {
wheelPos = hit.point + wheelBR.transform.up * wheelBR.radius;
}
else {
wheelPos = wheelBR.transform.position - wheelBR.transform.up * wheelBR.suspensionDistance;
}
wheelBRTrans.position = wheelPos;
if (Physics.Raycast(wheelBL.transform.position, -wheelBL.transform.up, hit, wheelBL.radius + wheelBL.suspensionDistance )) {
wheelPos = hit.point + wheelBL.transform.up * wheelBL.radius;
}
else {
wheelPos = wheelBL.transform.position - wheelBL.transform.up * wheelBL.suspensionDistance;
}
wheelBLTrans.position = wheelPos;
}

function Brake () {
wheelFR.brakeTorque = 0;
wheelFL.brakeTorque = 0;
wheelBR.brakeTorque = 0;
wheelBL.brakeTorque = 0;
SetSlip (myForwardFriction, mySidewayFriction);
}

function SetSlip (currentForwardFriction : float, currentSidewayFriction : float) {
wheelBR.forwardFriction.stiffness = currentForwardFriction;
wheelBL.forwardFriction.stiffness = currentForwardFriction;
wheelBR.sidewaysFriction.stiffness = currentSidewayFriction;
wheelBL.sidewaysFriction.stiffness = currentSidewayFriction;
}

function EngineSound () {
GetComponent.<AudioSource>().pitch = 1 + enginePitch;
}

function OnGUI () {
if (images_controller_object.activeInHierarchy) {
GUI.DrawTexture(Rect(Screen.width / 2 - Screen.width / 8, Screen.height - Screen.width / 4 + Screen.width / 40, Screen.width / 4, Screen.width / 4), sppedOMeterDial);
var speedFactor : float = currentSpeed / 215; // top speed
var rotationAngle : float;
if (currentSpeed >= 0) {
rotationAngle = Mathf.Lerp(0, 250, speedFactor);
}
else {
rotationAngle = Mathf.Lerp(0, 250, -speedFactor);
}
GUIUtility.RotateAroundPivot(rotationAngle, Vector2(Screen.width - (((Screen.width / 2 + Screen.width / 8) - Screen.width / 4) + Screen.width / 8), Screen.height - Screen.width / 8 + Screen.width / 40));
GUI.DrawTexture(Rect(Screen.width / 2 - Screen.width / 8, Screen.height - Screen.width / 4 + Screen.width / 40, Screen.width / 4, Screen.width / 4), sppedOMeterPointer);
}
if (paused == true) {
images_controller_object.SetActive(false);
image_speed_jumper_object.SetActive(true);
image_resume_object.SetActive(true);
image_replay_object.SetActive(true);
image_exit_object.SetActive(true);
DetectTouch();
}
}

function DetectTouch() {
if (Input.touches.Length <= 0) {
wheelBR.motorTorque = 0;
wheelBL.motorTorque = 0;
wheelBR.brakeTorque = 50;
wheelBL.brakeTorque = 50;
if (currentSpeed > 176) {
text_Car_Gear.text = "5";
enginePitch = currentSpeed / 220;
}
else if (currentSpeed > 132) {
text_Car_Gear.text = "4";
enginePitch = currentSpeed / 207;
}
else if (currentSpeed > 88) {
text_Car_Gear.text = "3";
enginePitch = currentSpeed / 189;
}
else if (currentSpeed > 44) {
text_Car_Gear.text = "2";
enginePitch = currentSpeed / 159;
}
else if (currentSpeed < 45 && currentSpeed != 0){
text_Car_Gear.text = "1";
enginePitch = currentSpeed / 110;
}
else if (currentSpeed != 0) {
text_Car_Gear.text = "N";
enginePitch = 1;
}
}
else {
if (Input.touches.Length >= 1) {
for (var i = 0; i < Input.touchCount; i++) {
//image_menu
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (Button_Menu.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && images_controller_object.activeInHierarchy)) {
Button_Menu.GetComponent.<GUITexture>().texture = image_menu_2;
}
else {
Button_Menu.GetComponent.<GUITexture>().texture = image_menu_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (Button_Menu.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && images_controller_object.activeInHierarchy)) {
music_click.Play();
paused = true;
}
// End
//image_resume
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_resume.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_resume_object.activeInHierarchy)) {
image_resume.GetComponent.<GUITexture>().texture = image_resume_2;
}
else {
image_resume.GetComponent.<GUITexture>().texture = image_resume_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_resume.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_resume_object.activeInHierarchy)) {
music_click.Play();
images_controller_object.SetActive(true);
image_speed_jumper_object.SetActive(false);
image_resume_object.SetActive(false);
image_replay_object.SetActive(false);
image_exit_object.SetActive(false);
Time.timeScale = 1;
paused = false;
}
// End
//image_next
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_next.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_next_object.activeInHierarchy)) {
image_next.GetComponent.<GUITexture>().texture = image_next_2;
}
else {
image_next.GetComponent.<GUITexture>().texture = image_next_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_next.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_next_object.activeInHierarchy)) {
music_click.Play();
Application.LoadLevel(Application.loadedLevel + 1);
}
// End
//image_replay
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_replay.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_replay_object.activeInHierarchy)) {
image_replay.GetComponent.<GUITexture>().texture = image_replay_2;
}
else {
image_replay.GetComponent.<GUITexture>().texture = image_replay_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_replay.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_replay_object.activeInHierarchy)) {
music_click.Play();
Time.timeScale = 1;
paused = false;
Application.LoadLevel(Application.loadedLevel);
}
// End
//image_exit
if ((Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) && (image_exit.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_exit_object.activeInHierarchy)) {
image_exit.GetComponent.<GUITexture>().texture = image_exit_2;
}
else {
image_exit.GetComponent.<GUITexture>().texture = image_exit_1;
}
if (Input.GetTouch(i).phase == TouchPhase.Ended && (image_exit.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && image_exit_object.activeInHierarchy)) {
music_click.Play();
paused = false;
Time.timeScale = 1;
Application.LoadLevel("menu_start");
}
// End
//Car_controller
if (Input.GetTouch(i).phase == TouchPhase.Stationary || Input.GetTouch(i).phase == TouchPhase.Moved) {
var currentSteerAngle = Mathf.Lerp(7, 12, 1 - currentSpeed / 220);
if (Button_Left.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && images_controller_object.activeInHierarchy) {
Button_Left.GetComponent.<GUITexture>().texture = image_left_texture_02;
Button_Left.pixelInset.width = Screen.width / 6.5;
Button_Left.pixelInset.height = Screen.width / 6.5;
Button_Left.pixelInset.x = Screen.width - Screen.width / 6 - Screen.width / 80 - Screen.width / 6 - Screen.width / 80 + Screen.width / 6 * 0.045;
Button_Left.pixelInset.y = Screen.width / 80 + Screen.width / 6 * 0.045;
wheelFL.steerAngle = -currentSteerAngle;
wheelFR.steerAngle = -currentSteerAngle;
}
else if (Button_Right.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && images_controller_object.activeInHierarchy) {
Button_Right.GetComponent.<GUITexture>().texture = image_right_texture_02;
Button_Right.pixelInset.width = Screen.width / 6.5;
Button_Right.pixelInset.height = Screen.width / 6.5;
Button_Right.pixelInset.x = Screen.width - Screen.width / 6 - Screen.width / 80 + Screen.width / 6 * 0.045;
Button_Right.pixelInset.y = Screen.width / 80 + Screen.width / 6 * 0.045;
wheelFL.steerAngle = currentSteerAngle;
wheelFR.steerAngle = currentSteerAngle;
}
if (Button_Forward.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && images_controller_object.activeInHierarchy) {
Button_Forward.GetComponent.<GUITexture>().texture = image_forward_texture_02;
back_Spot_1_Red_Light.intensity = 1;
back_Spot_2_Red_Light.intensity = 2;
back_Spot_3_Red_Light.intensity = 2;
back_Spot_4_Red_Light.intensity = 1;
Button_Forward.pixelInset.width = Screen.width / 6.6;
Button_Forward.pixelInset.height = Screen.width / 6.6;
Button_Forward.pixelInset.x = Screen.width / 80 + Screen.width / 6 * 0.045;
Button_Forward.pixelInset.y = Screen.width / 6 * 1.045 + Screen.width / 40; 
if (currentSpeed > 176) {
wheelBR.motorTorque = 0.71 * maxTorque;
wheelBL.motorTorque = 0.71 * maxTorque;
text_Car_Gear.text = "5";
enginePitch = currentSpeed / 220;
}
else if (currentSpeed > 132) {
wheelBR.motorTorque = 1 * maxTorque;
wheelBL.motorTorque = 1 * maxTorque;
text_Car_Gear.text = "4";
enginePitch = currentSpeed / 207;
}
else if (currentSpeed > 88) {
wheelBR.motorTorque = 1.55 * maxTorque;
wheelBL.motorTorque = 1.55 * maxTorque;
text_Car_Gear.text = "3";
enginePitch = currentSpeed / 189;
}
else if (currentSpeed > 44) {
wheelBR.motorTorque = 2.22 * maxTorque;
wheelBL.motorTorque = 2.22 * maxTorque;
text_Car_Gear.text = "2";
enginePitch = currentSpeed / 159;
}
else {
text_Car_Gear.text = "1";
wheelBR.motorTorque = 3.11 * maxTorque;
wheelBL.motorTorque = 3.11 * maxTorque;
enginePitch = currentSpeed / 110;
}
}
//----------------------------------------

if (Button_Backward.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && images_controller_object.activeInHierarchy) {
Button_Backward.GetComponent.<GUITexture>().texture = image_backward_texture_02;
back_Spot_1_Red_Light.intensity = 5;
back_Spot_2_Red_Light.intensity = 5;
back_Spot_3_Red_Light.intensity = 5;
back_Spot_4_Red_Light.intensity = 5;
Button_Backward.pixelInset.width = Screen.width / 6.5;
Button_Backward.pixelInset.height = Screen.width / 6.5;
Button_Backward.pixelInset.x = Screen.width / 80 + Screen.width / 6 * 0.045;
Button_Backward.pixelInset.y = Screen.width / 80 + Screen.width / 6 * 0.045;
if (currentSpeed > 35) {
wheelBR.motorTorque = 0;
wheelBL.motorTorque = 0;
wheelBR.brakeTorque = 5000;
wheelBL.brakeTorque = 5000;
}
else if (currentSpeed > 30) {
wheelBR.brakeTorque = 0;
wheelBL.brakeTorque = 0;
text_Car_Gear.text = "R";
wheelBR.motorTorque = -0.25 * maxTorque;
wheelBL.motorTorque = -0.25 * maxTorque;
enginePitch = currentSpeed / 110;
}
else {
wheelBR.brakeTorque = 0;
wheelBL.brakeTorque = 0;
text_Car_Gear.text = "R";
wheelBR.motorTorque = -5 * maxTorque;
wheelBL.motorTorque = -5 * maxTorque;
enginePitch = currentSpeed / 110;
}
}
if (Button_Brake.GetComponent.<GUITexture>().HitTest(Input.GetTouch(i).position) && images_controller_object.activeInHierarchy) {
Button_Brake.GetComponent.<GUITexture>().texture = image_brake_texture_02;
Button_Brake.pixelInset.width = Screen.width / 6.5;
Button_Brake.pixelInset.height = Screen.width / 6.5;
Button_Brake.pixelInset.x = Screen.width / 40 + Screen.width / 6 * 1.045;
Button_Brake.pixelInset.y = Screen.width / 80 + Screen.width / 6 * 0.045;
wheelFR.brakeTorque = 1000;
wheelFL.brakeTorque = 1000;
wheelBR.brakeTorque = 1000;
wheelBL.brakeTorque = 1000;
SetSlip (slipForwardFriction, slipSidewayFriction);
wheelBR.motorTorque = 0;
wheelBL.motorTorque = 0;
back_Spot_1_Red_Light.intensity = 5;
back_Spot_2_Red_Light.intensity = 5;
back_Spot_3_Red_Light.intensity = 5;
back_Spot_4_Red_Light.intensity = 5;
}
}
else {
wheelFL.steerAngle = 0;
wheelFR.steerAngle = 0;
}
//End
}
}
}
}

function Score () {
Int_Add_Score += 1;
Text_All_Score.text = "SCORE: " + PlayerPrefs.GetInt("score_stored").ToString();
}

function OnCollisionEnter () {
if (currentSpeed > 35) {
music_car_crash.Play();
}
}
#pragma strict
var currentFrictionValue : float;
var skidAt : float = 0.5;
var markWidth : float = 0.15;
var soundEmition : float = 10;
var smokeDepth : float = 0.4;
var skidSound : GameObject;
var text_add_score_001_object : GameObject;
var skidSmoke : GameObject;
var skidMaterial : Material;
var skidding : int;
private var int_add_score : int = 0;
private var int_score_old : int = 0;
private var int_score_new : int = 0;
private var lastPos = new Vector3[2];
private var timer_visible : float;
private var timer_score : float;
private var soundWait : float;
private var text_add_score_001 : UI.Text;

function Start () {
skidSmoke.transform.position = transform.position;
skidSmoke.transform.position.y -= smokeDepth;
text_add_score_001 = text_add_score_001_object.GetComponent(UI.Text);
}

function Update () {
var hit : WheelHit;
transform.GetComponent(WheelCollider).GetGroundHit(hit);
currentFrictionValue = Mathf.Abs(hit.sidewaysSlip);
if (skidAt <= currentFrictionValue && soundWait <= 0) {
Instantiate(skidSound, hit.point, Quaternion.identity);
soundWait = 1;
}
soundWait -= Time.deltaTime * soundEmition;
if (skidAt <= currentFrictionValue) {
skidSmoke.GetComponent.<ParticleEmitter>().emit = true;
SkidMesh();

timer_score += Time.deltaTime;
int_add_score += 5 * timer_score;
text_add_score_001.text = "+" +int_add_score.ToString();
if (int_add_score >= 3) {
text_add_score_001_object.SetActive(true);
}
timer_visible = 0;
}
else {
timer_visible += Time.deltaTime;
if (3 <= timer_visible) {
int_score_old = 0;
int_score_old = PlayerPrefs.GetInt("score_stored");
int_score_new = 0;
int_score_new = int_score_old + int_add_score / 3;
PlayerPrefs.SetInt("score_stored", int_score_new);
text_add_score_001_object.SetActive(false);
timer_score = 0;
int_add_score = 0;
}

skidSmoke.GetComponent.<ParticleEmitter>().emit = false;
skidding = 0;
}
}

function SkidMesh () {
var hit : WheelHit;
transform.GetComponent(WheelCollider).GetGroundHit(hit);
var mark : GameObject = new GameObject("Mark");
var filter : MeshFilter = mark.AddComponent(MeshFilter);
mark.AddComponent(MeshRenderer);
var markMesh : Mesh = new Mesh();
var vertices = new Vector3 [4];
var triangles = new int[6];
if (skidding == 0) {
vertices[0] = hit.point + Quaternion.Euler(transform.eulerAngles.x, transform.eulerAngles.y, transform.eulerAngles.z) * Vector3(markWidth, 0.01, 0);
vertices[1] = hit.point + Quaternion.Euler(transform.eulerAngles.x, transform.eulerAngles.y, transform.eulerAngles.z) * Vector3(-markWidth, 0.01, 0);
vertices[2] = hit.point + Quaternion.Euler(transform.eulerAngles.x, transform.eulerAngles.y, transform.eulerAngles.z) * Vector3(-markWidth, 0.01, 0);
vertices[3] = hit.point + Quaternion.Euler(transform.eulerAngles.x, transform.eulerAngles.y, transform.eulerAngles.z) * Vector3(markWidth, 0.01, 0);
lastPos[0] = vertices[2];
lastPos[1] = vertices[3];
skidding = 1;
}
else {
vertices[1] = lastPos[0];
vertices[0] = lastPos[1];
vertices[2] = hit.point + Quaternion.Euler(transform.eulerAngles.x, transform.eulerAngles.y, transform.eulerAngles.z) * Vector3(-markWidth, 0.01, 0);
vertices[3] = hit.point + Quaternion.Euler(transform.eulerAngles.x, transform.eulerAngles.y, transform.eulerAngles.z) * Vector3(markWidth, 0.01, 0);
lastPos[0] = vertices[2];
lastPos[1] = vertices[3];
}
triangles = [0,1,2,2,3,0];
markMesh.vertices = vertices;
markMesh.triangles = triangles;
markMesh.RecalculateNormals();
var uvm: Vector2[] = new Vector2[4];
uvm[0] = Vector2(1,0);
uvm[1] = Vector2(0,0);
uvm[2] = Vector2(0,1);
uvm[3] = Vector2(1,1);
markMesh.uv = uvm;
filter.mesh = markMesh;
mark.GetComponent.<Renderer>().material = skidMaterial;
mark.AddComponent(DestroyTimerScript);
}
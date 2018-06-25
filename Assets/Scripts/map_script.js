#pragma strict

var target : Transform;
var image_map_point: GameObject;


function Update () {
gameObject.transform.position.x = target.transform.position.x;
gameObject.transform.position.z = target.transform.position.z;

image_map_point.transform.position.x = target.transform.position.x;
image_map_point.transform.position.z = target.transform.position.z;
}
using System;
using AppodealAds.Unity.Api;
using AppodealAds.Unity.Common;
using UnityEngine;
using System.Collections;

public class script_appodeal_video : MonoBehaviour {

	// Use this for initialization
	void Start () {
		Appodeal.show (Appodeal.NON_SKIPPABLE_VIDEO);
	}
	
	// Update is called once per frame
	void Update () {

	}
}

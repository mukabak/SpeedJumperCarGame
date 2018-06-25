using System;
using AppodealAds.Unity.Api;
using AppodealAds.Unity.Common;
using UnityEngine;
using System.Collections;

public class script_appodeal_level : MonoBehaviour {

	// Use this for initialization
	void Start () {
		String appKey = "0d325b3ff3ae5c6fdc25096f2f800f199b6a60ab58874e83";
		Appodeal.initialize (appKey, Appodeal.NON_SKIPPABLE_VIDEO);
		Appodeal.show (Appodeal.INTERSTITIAL);
		Appodeal.hide (Appodeal.BANNER_TOP);
	}
	
	// Update is called once per frame
	void Update () {

	}
}

using System;
using AppodealAds.Unity.Api;
using AppodealAds.Unity.Common;
using UnityEngine;
using System.Collections;

public class script_appodeal_garage : MonoBehaviour {
	public GameObject ad;
	// Use this for initialization
	void Start () {
		String appKey = "0d325b3ff3ae5c6fdc25096f2f800f199b6a60ab58874e83";
		Appodeal.initialize (appKey, Appodeal.INTERSTITIAL);
		Appodeal.hide (Appodeal.BANNER_TOP);
	}

	// Update is called once per frame
	void Update () {
		if (Appodeal.isLoaded (Appodeal.NON_SKIPPABLE_VIDEO)) {
			ad.SetActive(true);
		}
	}
}

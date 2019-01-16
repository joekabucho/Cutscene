#pragma strict

var radius = 5.0;
var power = 10.0;

private var CameraScript : CameraSwitch;
	
function Explode () 
{
CameraScript = GameObject.Find("Main Camera").GetComponent(CameraSwitch);

// Applies an explosion force to all nearby rigidbodies
var explosionPos : Vector3 = transform.position;
var colliders : Collider[] = Physics.OverlapSphere (explosionPos, radius);
		
		for (var hit : Collider in colliders) 
		{
			if (!hit)
				continue;
			
			if (hit.rigidbody)
				hit.rigidbody.AddExplosionForce(power, explosionPos, radius, 3.0);
				GoBack();
		}
	}
	
function GoBack()
{
	yield WaitForSeconds (3);
	CameraScript.maincameraswitch();
	
}
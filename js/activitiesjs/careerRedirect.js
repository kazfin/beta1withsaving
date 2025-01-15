//Author(s): Ethan Scott//

console.log("careerRedirect.js loaded");

document.getElementById("briefcase").addEventListener("click", function() {
if (Age < 16) {
	revent = "too-young-to-get-job";
	localStorage.setItem("revent", revent);
	window.location.href = "./event.html";
} else if (Age >= 16) {
	if (hasJob === false) {
		console.log("hasJob is false");
		window.location.href = "./job-search-pg1.html"; //redirects the player to the job search page//
	} else if (hasJob === true) {
		console.log("hasJob is true");
		window.location.href = "./job.html"; //redirects player to their job//
	}
}
});
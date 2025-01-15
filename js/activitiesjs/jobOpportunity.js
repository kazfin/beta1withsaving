//Author(s): Ethan Scott//

function jobIcon(source) {
	document.getElementById("jobIcon").src = source;
}
function careerBranch(num, source) {
	document.getElementById("career-branch-"+num).src = source;
}
function changeText(elemID, content) {
	document.getElementById(elemID).innerHTML = content;
}

if (Job === "int-designer-select") {
	jobIcon("assets/armchair.svg");
	careerBranch(1, "assets/jobs/appr-int-designer.png");
	careerBranch(2, "assets/jobs/int-designer.png");
	careerBranch(3, "assets/jobs/sr-int-designer.png");
	changeText("jobOpportunityName", "Interior Designer");
	changeText("jobQualificationAge", "Age: Appr - 18 | Stnd - 18 | Sr - 24");
	changeText("jobQualificationEducation", "Education: Appr - High School | Stnd - Masters in Interior Design | Sr - Masters in Interior Design");
	changeText("jobQualificationJobExp", "Work experience: Appr - None | Stnd - None | Sr - Stnd Interior Designer");
	changeText("jobQualificationPay", "Pay: Appr - $45,000 /yr | Stnd - $60,000 /yr | Sr - $90,000 /yr");
	Logs = "I looked into local jobs at my local locality.";
	console.log("successfully updated job qualifications")
} else if (Job === "engineer-select") {
	jobIcon("assets/cog.svg");
	careerBranch(1, "assets/jobs/appr-engineer.png");
	careerBranch(2, "assets/jobs/engineer.png");
	careerBranch(3, "assets/jobs/sr-engineer.png");
	changeText("jobOpportunityName", "Engineer");
	changeText("jobQualificationAge", "Age: Appr - 18 | Stnd - 24 | Sr - 24");
	changeText("jobQualificationEducation", "Education: Appr - Bachelors in Engineering | Stnd - Bachelors in Engineering & Mathematics | Sr - Masters in Engineering & Mathematics");
	changeText("jobQualificationJobExp", "Work experience: Appr - None | Stnd - Appr Engineer | Sr - Stnd Engineer");
	changeText("jobQualificationPay", "Pay: Appr - $90,000 /yr | Stnd - $110,000 /yr | Sr - $140,000 /yr");
	Logs = "I looked into local jobs at my local locality.";
	console.log("successfully updated job qualifications")
};

localStorage.setItem("Logs", Logs);

document.getElementById("career-branch-1").addEventListener("click", function() { //if the player clicks on the first button (career-branch-1)//
	if (Job === "int-designer-select" && hasJob === false && Degree.includes("highSchool")) { //and they meet the qualifications//
		revent = "job-appr-int-designer-accepted"; //they get the job//
		console.log("successfully applied for job as apprentice interior designer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "int-designer-select" && (hasJob === false || !Degree.includes("highSchool"))) { //but if they don't meet the qualifications//
		revent = "job-appr-int-designer-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});

document.getElementById("career-branch-2").addEventListener("click", function() {
	if (Job === "int-designer-select" && hasJob === false && Degree.includes("highSchool")) {
		revent = "job-int-designer-accepted";
		console.log("successfully applied for job as standard interior designer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (Job === "int-designer-select" && (hasJob === false || !Degree.includes("highSchool"))) {
		revent = "job-int-designer-rejected";
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});

document.getElementById("career-branch-3").addEventListener("click", function() {
	if (Job === "int-designer-select" && hasJob === false && Degree.includes("masters-int-design") && workExperience.includes("int-designer")) {
		revent = "job-sr-int-designer-accepted";
		console.log("successfully applied for job as standard interior designer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (Job === "int-designer-select" && (hasJob === false || !Degree.includes("masters-int-design") || !workExperience.includes("int-designer"))) {
		revent = "job-sr-int-designer-rejected";
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});
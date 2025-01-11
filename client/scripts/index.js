document.addEventListener("DOMContentLoaded", async () => {
	// Example for a fetch
	const exampleText = document.getElementById("exampleText");

	const exampleFetch = async () => {
		const response = await fetch("/api/hello-world", { method: "GET" });
		const result = await response.text();
		exampleText.innerText = result;
	};

	exampleFetch();
});

<p id="message">Click the button to change this text.</p>
<button onclick="changeText()">Click Me</button>
<script>
function changeText() {
document.getElementById("message").innerText = "Text changed!";
}
</script>
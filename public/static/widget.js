function easyWidget(email) {
  mail_id = email;
  $.ajax({
    type: "POST",
    url: "https://easy-widget.vercel.app/api/validateWidget",
    data: { id: mail_id },
    success: function () {
      document.body.innerHTML += '<div id="easyWidget"></div>';
      var html = "";
      html += '<center><div id="myWidget" class="my-widget">';
      html += "<div id='content' class='my-widget-content'>";
      html +=
        "<input id='feedback' class='input-box' placeholder='what do you want us to know?' onkeyup='validate_feedback()'></input>";
      html +=
        "<button id='submit-btn' class='submit' onclick='submit_feedback()' disabled>Submit</button>";
      html += "</div>";

      html +=
        '<button onclick="expandWidget()" class="feedback-btn">Give Feedback</button>';
      html += "</div></center>";
      document.getElementById("easyWidget").innerHTML = html;
    },
    error: function (error) {
      console.log(error);
    },
  });
}

function expandWidget() {
  document.getElementById("content").classList.toggle("show");
}

function validate_feedback() {
  var input = document.getElementById("feedback");
  if (input.value == "") document.getElementById("submit-btn").disabled = true;
  else document.getElementById("submit-btn").disabled = false;
}

function submit_feedback(feedback) {
  var feedback = document.getElementById("feedback").value;
  $.ajax({
    type: "POST",
    url: "https://easy-widget.vercel.app/api/sendEmail",
    data: { id: mail_id, feedback: feedback },
    success: () => {
      console.log("Successfully submitted");
      document.getElementById("feedback").value = "";
      var widgetContent = document.getElementById("content");
      if (widgetContent.classList.contains("show")) {
        widgetContent.classList.remove("show");
      }
    },
    error: () => {
      console.log("couldnt send mail");
    },
  });
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (
    !event.target.matches(".feedback-btn") &&
    !event.target.matches(".my-widget-content") &&
    !event.target.matches(".submit") &&
    !event.target.matches(".input-box")
  ) {
    var widgetContent = document.getElementsByClassName("my-widget-content");
    if (widgetContent.classList.contains("show")) {
      widgetContent.classList.remove("show");
    }
  }
};

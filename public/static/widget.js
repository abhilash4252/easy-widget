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
      html += "<label class='top-label'><h2>Tell us anything!</h2></label>";
      html +=
        "<button class='close-btn' onclick='clear_input()'><img src='https://img.icons8.com/small/16/000000/multiply.png'/></button>";

      html +=
        "<textarea name='text' id='feedback' class='input-box' placeholder='what do you want us to know?' onkeyup='validate_feedback()'></textarea>";
      html +=
        "<div id='submit-btn' class='submit' onclick='submit_feedback()' disabled>Send Feedback</div>";

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

function clear_input() {
  document.getElementById("feedback").value = "";
  document.getElementById("submit-btn").disabled = true;
  document.getElementById("submit-btn").classList.remove("submit-onfocus");
}

function validate_feedback() {
  var input = document.getElementById("feedback");
  if (input.value == "") {
    document.getElementById("submit-btn").disabled = true;
    document.getElementById("submit-btn").classList.remove("submit-onfocus");
  } else {
    document.getElementById("submit-btn").disabled = false;
    document.getElementById("submit-btn").classList.add("submit-onfocus");
  }
}

function submit_feedback(feedback) {
  var feedback = document.getElementById("feedback").value;
  if (feedback != "") {
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
  } else console.log("empty feedback cannot be submitted");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (
    !event.target.matches(".feedback-btn") &&
    !event.target.matches(".my-widget-content") &&
    !event.target.matches(".submit") &&
    !event.target.matches(".input-box") &&
    !event.target.matches(".top-label")
  ) {
    var widgetContent = document.getElementById("content");
    if (widgetContent.classList.contains("show")) {
      widgetContent.classList.remove("show");
    }
  }
};

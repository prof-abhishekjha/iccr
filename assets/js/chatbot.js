jQuery(document).ready(function ($) {
    jQuery(document).on("click", ".iconInner", function (e) {
      jQuery(this).parents(".botIcon").addClass("showBotSubject");
      $("[name='msg']").focus();
  
      // Show welcome message and buttons
      $(".Messages_list").html(`
          <div class="msg">
            <span class="avtr">
              <figure style="background-image: url('assets/img/chatbot/iccr-logo.png')"></figure>
            </span>
            <span class="responsText">
              Welcome to ICCR!<br><br>
              
            </span>
          </div>
        `);
    });

    // <button class="btn btn-primary btn-sm me-2" id="btn-bharathanatyam">Bharathanatyam</button>
    //           <button class="btn btn-success btn-sm" id="btn-quiz">Quiz</button>
  
    jQuery(document).on("click", ".closeBtn, .chat_close_icon", function (e) {
      jQuery(this)
        .parents(".botIcon")
        .removeClass("showBotSubject showMessenger");
    });
  
    jQuery(document).on("submit", "#botSubject", function (e) {
      e.preventDefault();
      jQuery(this)
        .parents(".botIcon")
        .removeClass("showBotSubject")
        .addClass("showMessenger");
    });
  
    // $(document).on("submit", "#messenger", function (e) {
    //   e.preventDefault();
  
    //   var val = $("[name=msg]").val().toLowerCase();
    //   var mainval = $("[name=msg]").val();
    //   var name = "";
    //   var nowtime = new Date();
    //   var nowhoue = nowtime.getHours();
  
    //   function userMsg(msg) {
    //     $(".Messages_list").append(
    //       `<div class="msg user"><span class="responsText">${mainval}</span></div>`
    //     );
    //   }
  
    //   function appendMsg(msg) {
    //     $(".Messages_list").append(`
    //         <div class="msg">
    //           <span class="avtr">
    //             <figure style="background-image: url('https://mrseankumar25.github.io/Sandeep-Kumar-Frontend-Developer-UI-Specialist/images/avatar.png')"></figure>
    //           </span>
    //           <span class="responsText">${msg}</span>
    //         </div>
    //       `);
    //     $("[name='msg']").val("");
    //   }
  
    //   userMsg(mainval);
  
    //   if (
    //     val.includes("hello") ||
    //     val.includes("hi") ||
    //     val.includes("good morning") ||
    //     val.includes("good afternoon") ||
    //     val.includes("good evening") ||
    //     val.includes("good night")
    //   ) {
    //     if (nowhoue >= 12 && nowhoue <= 16) appendMsg("good afternoon");
    //     else if (nowhoue >= 10 && nowhoue <= 12) appendMsg("hi");
    //     else if (nowhoue >= 0 && nowhoue <= 10) appendMsg("good morning");
    //     else appendMsg("good evening");
  
    //     appendMsg("what's your name?");
    //   } else if (val.includes("i have problem with")) {
    //     if (val.includes("girlfriend") || val.includes("gf")) {
    //       appendMsg("Take out your girlfriend, for dinner or movie.");
    //       appendMsg("Is it helpful? (yes/no)");
    //     } else if (val.includes("boyfriend") || val.includes("bf")) {
    //       appendMsg("Buy something for him.");
    //       appendMsg("Is it helpful? (yes/no)");
    //     } else {
    //       appendMsg(
    //         "Sorry, I'm not able to get your point, please ask something else."
    //       );
    //     }
    //   } else if (val.includes("yes")) {
    //     appendMsg("It's my pleasure that I could help you.");
    //     saybye();
    //   } else if (val.includes("no")) {
    //     appendMsg("It's unfortunate I couldn't help. Please try again later.");
    //     saybye();
    //   } else if (
    //     val.includes("my name is ") ||
    //     val.includes("i am ") ||
    //     val.includes("i'm ") ||
    //     val.split(" ").length < 2
    //   ) {
    //     if (val.includes("my name is"))
    //       name = val.replace("my name is", "").trim();
    //     else if (val.includes("i am")) name = val.replace("i am", "").trim();
    //     else if (val.includes("i'm")) name = val.replace("i'm", "").trim();
    //     else name = mainval;
  
    //     appendMsg("Hi " + name + ", how can I help you?");
    //   } else {
    //     appendMsg("Sorry I'm not able to understand what you want to say.");
    //   }
  
    //   function saybye() {
    //     if (nowhoue <= 10) appendMsg("Have a nice day! :)");
    //     else if (nowhoue >= 11 || nowhoue <= 20) appendMsg("Bye!");
    //     else appendMsg("Good night!");
    //   }
  
    //   var lastMsg = $(".Messages_list").find(".msg").last().offset().top;
    //   $(".Messages").animate({ scrollTop: lastMsg }, "slow");
    // });




    $(document).on("submit", "#messenger", function (e) {
      e.preventDefault();
      var val = $("[name=msg]").val().toLowerCase().trim();
      var mainval = $("[name=msg]").val();
      var name = "";
      var nowtime = new Date();
      var nowhoue = nowtime.getHours();

      function userMsg(msg) {
        $(".Messages_list").append(`<div class="msg user"><span class="responsText">${msg}</span></div>`);
      }

      function appendMsg(msg, theme = "default", avatar = "") {
        if (avatar === "") {
          avatar = "assets/img/chatbot/iccr-logo.png"; // Default bot avatar
        }

        $("#chatbotTheme")
          .removeClass("chatbot-theme-default chatbot-theme-event chatbot-theme-bharatanatyam chatbot-theme-quiz")
          .addClass("chatbot-theme-" + theme);

        $(".Messages_list").append(`
          <div class="msg">
            <span class="avtr">
              <figure style="background-image: url('${avatar}')"></figure>
            </span>
            <span class="responsText">${msg}</span>
          </div>
        `);
        $("[name='msg']").val("");
      }

      function saybye() {
        if (nowhoue <= 10) appendMsg("Have a nice day! :)");
        else if (nowhoue >= 11 && nowhoue <= 20) appendMsg("Bye!");
        else appendMsg("Good night!");
      }

      userMsg(mainval);

      // Greetings
      if (
        val.includes("hello") || val.includes("hi") ||
        val.includes("good morning") || val.includes("good afternoon") ||
        val.includes("good evening") || val.includes("good night")
      ) {
        if (nowhoue >= 12 && nowhoue <= 16) appendMsg("Good afternoon!");
        else if (nowhoue >= 10 && nowhoue <= 12) appendMsg("Hi!");
        else if (nowhoue >= 0 && nowhoue <= 10) appendMsg("Good morning!");
        else appendMsg("Good evening!");
        appendMsg("What's your name?");
      }

      // Event Info
      else if (val.includes("event")) {
        appendMsg(
          "We are hosting two amazing events: Bharatanatyam and Quiz. Ask more to learn about each!",
          "event",
          "assets/img/chatbot/event-icon.png"
        );
      }

      // Bharatanatyam Info
      else if (val.includes("bharatanatyam")) {
        appendMsg(
          "Bharatanatyam is a classical dance performance happening on Saturday at 6 PM in the Main Auditorium.",
          "bharatanatyam",
          "assets/img/chatbot/bharatanatyam-icon.png"
        );
      }

      // Quiz Info
      else if (val.includes("quiz")) {
        appendMsg(
          "Quiz competition is on Sunday at 10 AM in the Conference Hall. Topics: GK, Science & Pop Culture.",
          "quiz",
          "assets/img/chatbot/quiz-icon.png"
        );
      }

      // Name Response
      else if (
        val.includes("my name is") || val.includes("i am") || val.includes("i'm") || val.split(" ").length < 2
      ) {
        if (val.includes("my name is")) name = val.replace("my name is", "").trim();
        else if (val.includes("i am")) name = val.replace("i am", "").trim();
        else if (val.includes("i'm")) name = val.replace("i'm", "").trim();
        else name = mainval;
        appendMsg("Hi " + name + ", how can I help you?");
      }

      // Yes/No Follow-ups
      else if (val.includes("yes")) {
        appendMsg("It's my pleasure that I could help you.");
        saybye();
      } else if (val.includes("no")) {
        appendMsg("Sorry to hear that. Feel free to ask again!");
        saybye();
      }

      // Unknown
      else {
        appendMsg("Sorry, I'm not able to understand that. Try asking about our event or specific topics.");
      }

      // Scroll to bottom
      var lastMsg = $(".Messages_list").find(".msg").last().offset().top;
      $(".Messages").animate({ scrollTop: lastMsg }, "slow");
    });






  
    // Handle Bharathanatyam button click
    $(document).on("click", "#btn-bharathanatyam", function () {
      $(".Messages_list").append(`
          <div class="msg user"><span class="responsText">Bharathanatyam</span></div>
          <div class="msg">
            <span class="avtr">
              <figure style="background-image: url('assets/img/logo.svg')"></figure>
            </span>
            <span class="responsText">
              Bharathanatyam is one of the oldest classical dance forms of India. It originated in Tamil Nadu.
            </span>
          </div>
        `);
    });
  
    // Handle Quiz button click
    $(document).on("click", "#btn-quiz", function () {
      $("#quizModal").modal("show");
    });
  });
  
  const botIcon = document.querySelector(".botIcon");
  const scrollTop = document.getElementById("scroll-top");
  let isChatOpen = false;
  
  botIcon.addEventListener("click", () => {
    isChatOpen = !isChatOpen;
    if (scrollTop) {
      if (isChatOpen) scrollTop.classList.add("hidden");
      else scrollTop.classList.remove("hidden");
    }
  });
  
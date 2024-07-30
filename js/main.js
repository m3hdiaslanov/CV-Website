// Functions for each action-command.

function help() {
    return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Everything you ever wanted to know about Mehdi Aslanov</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with Mehdi Aslanov</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>See what links Mehdi Aslanov wants you to click on</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Get to know how good Mehdi Aslanov is at stuff</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download Mehdi Aslanov's CV</td>\
  </tr>\
  <tr>\
    <td>rickroll</td>\
    <td>Never Gonna Give You Up</td>\
  </tr></table>";
}

function contact() {
    return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:m3hdiaslanov@gmail.com\">m3hdiaslanov@gmail.com</a></td>\
  </tr>\
  <tr>\
    <td>Telephone</td>\
    <td><a href=\"tel:+994103160036\">+994103160036</a></td>\
  </tr>\
  <tr>\
    <td>Address</td>\
    <td>Mehdi Aslanov</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Akhmadli</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Khatai</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Baku</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Azerbaijan</td>\
  </tr></table>";
}

function skills() {
    return "<h2><span style=\"color:#81a2be;\">Skills:</span></h2><table>\
  <tr>\
    <td>IT Technical Support</td>\
    <td>▰▰▰▰▰▰▰▰▰▰ 100%</td>\
  </tr>\
  <tr>\
    <td>System Administration</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  <tr>\
    <td>Network and Infrastructure</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  </table>";
}

function about() {
    return "<p>As a diligent and motivated individual, I am seeking a position within a reputable and forward-thinking organization that provides opportunities for ongoing career development. I possess robust technical skills and exceptional interpersonal abilities, which enable effective interaction with diverse clientele.I am enthusiastic about embracing challenges to enhance and refine my IT competencies.My foremost passion lies in leveraging my technical expertise to contribute positively to others ' needs and objectives.</p>";
}

function cv() {
    return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}



function links() {
    return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com/in/m3hdiaslanov/\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://github.com/m3hdiaslanov/\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  </ul>";
}

function rickroll() {
    return "<p>We're no strangers to love<br>\
    You know the rules and so do I<br>\
    A full commitment's what I'm thinking of<br>\
    You wouldn't get this from any other guy<br>\
    <br>\
    I just wanna tell you how I'm feeling<br>\
    Gotta make you understand<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    We've known each other for so long<br>\
    Your heart's been aching, but<br>\
    You're too shy to say it<br>\
    Inside, we both know what's been going on<br>\
    We know the game and we're gonna play it<br>\
    <br>\
    And if you ask me how I'm feeling<br>\
    Don't tell me you're too blind to see<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    (Ooh, give you up)<br>\
    (Ooh, give you up)<br>\
    Never gonna give, never gonna give<br>\
    (Give you up)<br>\
    Never gonna give, never gonna give<br>\
    (Give you up)<br>\
    <br>\
    We've known each other for so long<br>\
    Your heart's been aching, but<br>\
    You're too shy to say it<br>\
    Inside, we both know what's been going on<br>\
    We know the game and we're gonna play it<br>\
    <br>\
    I just wanna tell you how I'm feeling<br>\
    Gotta make you understand<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you</p>";
}

// Main Function
function commandProcessor(e) {

    //Check if the enter key is pressed
    if (e.keyCode == 13) {

        //Clear the area where info will be printed
        document.getElementById('injected').innerHTML = "";

        //Get user input
        var txtInput = document.getElementById('txtBox').value;

        //Select what info to print according to command
        if (txtInput == "help") {
            document.getElementById('injected').innerHTML = help();
        } else if (txtInput == "all") {
            document.getElementById('injected').innerHTML = about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv();
        } else if (txtInput == "about") {
            document.getElementById('injected').innerHTML = about();
        } else if (txtInput == "contact") {
            document.getElementById('injected').innerHTML = contact();
        } else if (txtInput == "cv") {
            document.getElementById('injected').innerHTML = cv();
        } else if (txtInput == "skills") {
            document.getElementById('injected').innerHTML = skills();
        } else if (txtInput == "links") {
            document.getElementById('injected').innerHTML = links();
        } else if (txtInput == "rickroll") {
            var win = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
            win.focus();
            document.getElementById('injected').innerHTML = rickroll();
        } else if (txtInput == "credits") {
            document.getElementById('injected').innerHTML = credits();
        } else {
            document.getElementById('injected').innerHTML = help();
        }

        //Clear input text box
        document.getElementById('txtBox').value = "";
    }
}
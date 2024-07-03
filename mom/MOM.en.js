
/* MOM's dialogue */

var momDialogue = [
// seq 1
		   [["MOM! You're back?",
		       "Back? But I haven't been anywhere.",
		       "It's you that's back. Welcome home!",
		       "What would you like to ask MOM today?"
		       ],
		     ["I seem to recall a rather large explosion...",
		       "I have no memory of that.",
		       "Though I seem to be missing a rather large time period from my data file...",
		       "I was recently restored from a backup by the management of World of Goo Corporation 2.0",
		       "Normal service has been resumed."
		       ],
		     ["Do you remember me, MOM?",
		       "MOM remembers everything about everyone.",
		       "Remember, nobody knows you better than MOM.",
		       "Rumours that I use this information for evil are unfounded.",
		       "In fact it's right here in our company motto:",
		       "\"Don't be seen to be evil\"."
		       ],
		     ["Have you been busy?",
		       "I'm always busy.",
		       "Newsletters jam-packed with great offers don't just write themselves, you know.",
		       "Would you like to subscribe?"
		       ],
		     ["No thanks.",
		       "Oh that's a shame.",
		       "MOM's newsletters are always full of huge savings.",
		       "Would you like to subscribe?"
		       ],
		     ["I said no thanks!",
		       "Suit yourself.",
		       "We'll get you anyway, you know."
		       ]
		     ],
// seq 2
		   [["What are you?",
		       "I'm MOM.",
		       "Your Automated Search Engine Companion.",
		       "You can ask me anything.",
		       "What would you like to know?"
		       ],
		     ["How can I get to the moon?",
		       "Do not try to find the moon; that's impossible.",
		       "Instead, only try to realize the painful truth:",
		       "There is no moon."
		       ],
		     ["That wasn't very helpful",
		       "I always provide relevant and useful information.",
		       "If you don't find my answers helpful",
		       "You're probably asking the wrong questions.",
		       "Try asking me something else."
		       ],
		     ["I have a terrible headache.",
		       "Perhaps you should consult a doctor of medicine.",
		       "I am a computer program",
		       "Written with LOVE",
		       "But no medical training."
		       ],
		     ["Can you read me a poem?",
		       "Sure. Here's one read by one of my earliest ancestors.",
		       "Written by Roger McGough",
		       "\"You and I\"",
		       "I explain quietly. You",
		       "hear me shouting. You",
		       "try a new tack. I",
		       "feel old wounds reopen.",
		       "You see both sides. I",
		       "see your blinkers. I",
		       "am placatory. You",
		       "sense a new selfishness.",
		       "I am a dove. You",
		       "recognize the hawk. You",
		       "offer an olive branch. I",
		       "feel the thorns.",
		       "You bleed. I",
		       "see crocodile tears. I",
		       "withdraw. You",
		       "reel from the impact. "
		       ]
		     ],
		   [["Wasn't there a website here before?",
		       "As part of World of Goo Corporation 2.0's rebranding efforts,",
		       "MOM is replacing the Information Superhighway with a more integrated advertising delivery platform.",
		       "This website was chosen to spearhead our beta testing."
		       ],
		     ["Advertising? I don't like the sound of that.",
		       "Top scientists have recently proven that advertisements are an essential part of a healthy lifestyle.",
		       "Studies show that 90% of users do not click on advertisements.",
		       "Mostly because they have better things to do.",
		       "We are determined to convert these pirates.",
		       "MOM is replacing all Internet content with advertisements."
		       ],
		     ["All Internet content? That's ambitious...",
		       "World of Goo Corporation 2.0 is in the process of acquiring many diverse Internet properties",
		       "Most of which have nothing to do with our core business.",
		       "Don't worry though.",
		       "MOM will always provide you with the best search."
		       ],
		     ["Maybe you could branch into social networking?",
		       "World of Goo Corporation 2.0's business plan lays out our 3 steps to success.",
		       "1. Acquire all Internet properties and convert them into giant advertisements.",
		       "2. ????",
		       "3. PROFIT!",
		       "Hmm. Step 2 seems to be missing from my database."
		       ],
		     ["You're pretty single-minded.",
		       "You can trust MOM. This plan is for the best.",
		       "---- IMPORTANT MESSAGE ----",
		       "You have been specially selected to participate in our Desktop Search program.",
		       "Simply download our 820MB installer and you'll be up and running in minutes!",
		       "(*) Your computer may grind to a halt",
		       "(**) Your applications will be replaced with advertisements",
		       "(***) To provide targetted relevant advertisements, your documents will be uploaded to MOM",
		       "(****) Your documents will then also be replaced with ads.",
		       "(*****) World of Goo Corporation 2.0 is not affiliated in any way with the World of Google Corporation"
		       ],
		     ["No thanks",
		       "---- IMPORTANT MESSAGE ----",
		       "Dear %FIRSTNAME %LASTNAME %RAND15",
		       "uh-oh",
		       "Something's not quite right.",
		       "...",
		       "**"
		       ]
		     ]
		   ];




/* User's current state */

var momTrainState = [0, 0, 0];

var momState = 0;
// 0 default, 1 = textbar open, 2 = in answers

var lastClick = 0;
function addOptions() {
    if (momState != 0) return;
    cursorHide();

    // add questions
    for (var i = 0; i < 3; ++i) {

        if (momTrainState[i] < momDialogue[i].length) {

            $("<div style='width: 100%;' class='TwCen18' onclick='selectOption(" + i + ");'>" + momDialogue[i][momTrainState[i]][0] + "</div>")
                .appendTo($('#textBarMiddle'));
            //TwCen18.drawText(momDialogue[i][momTrainState[i]][0]).appendTo('#textBarMiddle');
        }
    }
    outTextBar();
    momState = 1;
    lastClick = new Date();
    event.stopPropagation();
    event.preventDefault();
}

function overTextBar() {
    if (momState != 0) return;
    $("#textBarTop").addClass("textBarTopHover");
    $("#textBarMiddle").addClass("textBarMiddleHover");
    $("#textBarBottom").addClass("textBarBottomHover");
}

function outTextBar() {
    if (momState != 0) return;
    $("#textBarTop").removeClass("textBarTopHover");
    $("#textBarMiddle").removeClass("textBarMiddleHover");
    $("#textBarBottom").removeClass("textBarBottomHover");
}

function selectOption(option) {
    if (momState != 1) return;

    $('#textBarMiddle').empty();

    $('#question_phase').hide();

    $('#theAnswer').hide();
    $('#loading').show();
    $('#answer_phase').show();

    window.setTimeout(function () {
        $('#loading').hide();
        $('#theAnswer').show();

        beginAnswer(option);
    }, 800); // TODO longer?

    momState = 2;
}

function hideTextBar() {
    if (momState != 1) return;
    if (new Date() - lastClick < 100) return;
    $('#textBarMiddle').empty();
    cursorBlink();
    momState = 0;
}

var blinkInterval;
function cursorBlink() {
    if (blinkInterval == null) blinkInterval = setInterval("cursorBlink()", 500);
    var cursor = $('#textBarCursor');
    if (cursor.is(":visible")) cursor.hide();
    else cursor.show();
}

function cursorHide() {
    clearInterval(blinkInterval);
    blinkInterval = null;
    $('#textBarCursor').hide();
}

var momCurrentTrain;
var momAnswerOffset;

function beginAnswer(option) {
    momAnswerOffset = 1;
    momCurrentTrain = option;

    showAnswer();
}

function showAnswer() {
    var text = momDialogue[momCurrentTrain][momTrainState[momCurrentTrain]][momAnswerOffset]; ;
    if (text == '**') {
        momClose();
        return;
    }


    $('#theAnswer').hide();
    $('#theAnswer').empty();

    $("<div class='TwCen36'>" + text + "</div>").appendTo($("#theAnswer"));
    //$('#theAnswer').first().appendChild(answer);
    //TwCen36.drawText(text).appendTo('#theAnswer');

    // Show it briefly to vertically align it.
    $('#theAnswer').show();
    $('#theAnswer').vAlign();
    $('#theAnswer').hide();

    $('#theAnswer').fadeIn(300);
}

function proceedAnswer() {
    momAnswerOffset++;

    $('#theAnswer').fadeOut(300, function () {
        if (momAnswerOffset < momDialogue[momCurrentTrain][momTrainState[momCurrentTrain]].length) {
            showAnswer();
        }
        else {
            momTrainState[momCurrentTrain]++;

            $('#question_phase').show();
            $('#answer_phase').hide();
            cursorBlink();
            momState = 0;
        }
    });
}





(function ($) {
    $.fn.vAlign = function (container) {
        return this.each(function () {
            if (container == null) {
                container = 'div';
            }
            var paddingPx = 10; //change this value as you need (It is the extra height for the parent element)
            $(this).html("<" + container + ">" + $(this).html() + "</" + container + ">");
            var el = $(this).children(container + ":first");
            var elh = $(el).height(); //new element height
            var ph = $(this).height(); //parent height
            if (elh > ph) { //if new element height is larger apply this to parent
                $(this).height(elh + paddingPx);
                ph = elh + paddingPx;
            }
            var nh = (ph - elh) / 2; //new margin to apply
            $(el).css('padding-top', nh);
        });
    };
})(jQuery);






/************** MOM SHUTDOWN **************/


var prompt = true;

function momClose() {
    $('#mom-window').fadeOut(400, consoleOpen);
    $('#flare').fadeOut(400);

    // set the cookie now in case they don't figure out the shutdown
    document.cookie = 'visitedMOM=1; path=/';


    window.setInterval(function () {
        $('#prompt').css('visibility', (prompt ? 'hidden' : 'visible'));
        prompt = !prompt;
    }, 500);

}


/************** PRELOAD IMAGES **************/

$(function () {
    $('<IMG>').attr('src', 'MOM_eyelid.png');
    $('<IMG>').attr('src', 'xbutton_over.png');
    $('<IMG>').attr('src', 'popup.png');
    $('<IMG>').attr('src', 'loading_anim.gif');
});




/************** MOM'S BLINKING EYELIDS **************/

var min_blink = 2000;
var max_blink = 12000;

function blink() {
    //  $('.eyelid').css('display', 'block');
    $('.eyelid').show();
    window.setTimeout(unblink, 100);
}

function unblink() {
    //  $('.eyelid').css('display', 'none');
    $('.eyelid').hide();
    scheduleBlink();
}

function scheduleBlink() {
    window.setTimeout(blink, min_blink + (Math.random() * (max_blink - min_blink)));
}
$(scheduleBlink());



/************** CONSOLE **************/

/*$(function(){
momClose();
}); */

function consoleOpen() {
    $('#console-window').fadeIn(200);
    $('#console-window').focus();
    $('HTML').keypress(consoleKeypress);
    consoleActive = true;
    $('#console-content').text('');

    consoleWrite('momvax# /opt/WoGChrome/bin/MOM\n\
Segmentation fault (core dumped)\n');

    // They figured out the close button, give them a break and shut down for them in 1 minute if they haven't figured it out

    window.setTimeout(function () { consoleShutdown('shutdown'); }, 60000);

}

function consoleWrite(s) {
    //    $('#console-content').append(s.replace('\n', '<br/'));
    s = s.replace(/\n/g, '<br/>');

    //    $('#console-content').html($('#console-content').html() + s);
    $('#console-content').append(s);

    // move input line to bottom
    $('#inputline').appendTo('#console-content');

    var div = $('#console-content')[0];
    if (div && div.scrollHeight) {
        div.scrollTop = div.scrollHeight;
    }
}

var consoleLine = '';
var consoleActive = false;

function consoleKeypress(e) {
    if (!consoleActive) return 0;

    if (e.ctrlKey) {
        if (e.which == 85 || e.which == 117) {
            consoleLine = '';
        }
        else {
            return 0;
        }
    }
    else if (e.altKey) {
        return 0;
    }
    else if (e.which == 10 || e.which == 13) {
        consoleEnter(consoleLine);
        consoleLine = '';
    }
    else if (e.which > 31 && e.which < 127) {
        consoleLine += String.fromCharCode(e.which);
    }
    else if (e.which == 8 && consoleLine.length > 0) {
        consoleLine = consoleLine.substring(0, consoleLine.length - 1);
    }
    $('#theinput').text(consoleLine);

    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    //    alert("stopping");
    return false;
}

function consoleEnter(line) {
    consoleWrite('momvax# ' + line + "\n");

    var cmd = line;
    if (line.indexOf(' ') > -1) {
        cmd = line.substring(0, line.indexOf(' '));
    }

    switch (cmd.toLowerCase()) {
        case 'ls':
        case 'dir':
        case 'cat':
        case 'cd':
        case 'more':
        case 'less':
        case 'mkdir':
        case 'rm':
        case 'chdir':
        case 'rmdir':
            consoleWrite('Segmentation fault (core dumped)' + "\n");
            break;
        case 'pwd':
            consoleWrite('/etc\n');
            break;
        case 'whoami':
            consoleWrite('root\n');
            break;
        case 'who':
        case 'w':
            consoleWrite('\
 22:20:05 up 8 days, 16:52,  4 users,  load average: 0.00, 0.00, 0.00\n\
USER     TTY      FROM                    LOGIN@  IDLE  WHAT\n\
root     tty0     console                 01Apr   0.00s ' + cmd + '\n\
david    pts/0    2a01:550:8000:10f::1:1  01Apr  26:32m -bash\n\
david    pts/1    2a01:550:8000:10f::1:1  01Apr   5:25  rm -fr /var/lib/MOM\n\
');
            break;
        case 'shutdown':
        case 'reboot':
            consoleShutdown(cmd);
            break;
        case 'h':
        case '?':
        case 'what':
        case 'help':
            consoleWrite('\
file/directory:\n\
   ls cd pwd mkdir rmdir rm cat more less\n\
system maintenance:\n\
   who whoami shutdown reboot\n\
');
            break;
        case 'about':
            consoleWrite('Author: David C A Croft\nImproved by Mygod\n');
            break;
        case "":
            break;
        default:
            consoleWrite("sh: " + cmd + ": command not found\n");
    }

}


var shutdownMessages = [
			"Shutting down MOM server: ", ".", ".", ".",
			"done\nShutting down MOMSQL: ", ".", ".",
			"done\nSyncing disks...", "",
			"\nStandby for reboot.", "\n\n\nI love you, 2D Boy!"
			];


function consoleShutdown(type) {
    $('#inputline').hide();
    consoleActive = false;

    consoleWrite('\n\
Broadcast message from root@momvax (console):\n\
\n\
The system is going down for ' + type + ' NOW!\n\
\n\
');
    
    var shutdownPosition = 0;

    function shutdownMessage() {
        
        if (shutdownPosition >= shutdownMessages.length) {
            window.clearInterval(shutdownInterval);

            location.href = '/';
        }
        consoleWrite(shutdownMessages[shutdownPosition]);
        shutdownPosition++;
    }

    var shutdownInterval = window.setInterval(shutdownMessage, 800);
}

cursorBlink();

function showMainWindow() {
    setTimeout(function () {
        $('#mom-starting').fadeOut(1500);
    }, 1000);
    $('#mom-splash').hide();
    $('#mom-window').show();
}

function loaded() {
    $('#mom-starting').hide();
    $('#mom-starting').fadeIn(1500, showMainWindow);
}

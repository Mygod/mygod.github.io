
/* MOM's dialogue */

var momDialogue = [
// seq 1
		   [["MOM！你回来了？",
		       "回来？我还没走呢。",
		       "应该是你回来了。欢迎回来！",
		       "你今天想问MOM什么？"
		       ],
		     ["我似乎还记得有一场很大的爆炸……",
		       "我不记得了。",
		       "虽说我似乎丢了很长一段时间的数据文件。",
		       "最近，粘粘世界 2.0的管理员从备份中恢复了我。",
		       "现在正常的服务已经恢复了。"
		       ],
		     ["MOM，你还记得我吗？",
		       "MOM记得所有人的所有事情。",
		       "记住，没有人比MOM更了解你。",
		       "有谣言说我用这些信息做坏事。这是毫无根据的。",
		       "事实上，我们公司的座右铭是：",
		       "“做坏事时别被人看到。”"
		       ],
		     ["你很忙吗？",
		       "我一直很忙。",
		       "要知道，挤满报纸的那些优惠不是天上掉下来的。",
		       "你想要订阅一份吗？"
		       ],
		     ["不用了。",
		       "啊！真是个耻辱！",
		       "MOM的报纸可以让你省下一大笔钱。",
		       "你想要订阅一份吗？"
		       ],
		     ["真的不用了！",
		       "随便你。",
		       "要知道我们早晚会让你订的。"
		       ]
		     ],
// seq 2
		   [["你是谁？",
		       "我是MOM。",
		       "你的自动搜索引擎伴侣。",
		       "你什么都可以问我。",
		       "你想知道什么？"
		       ],
		     ["我怎样去月球？",
		       "别想了，那不可能。",
		       "相反，你们会知道一个残酷的事实：",
		       "根本没有月球。"
		       ],
		     ["这帮助不大。",
		       "我总是能提供相关的或有用的信息。",
		       "如果你觉得我说的对你帮助不大，",
		       "你很可能是问错了。",
		       "问我别的试试？"
		       ],
		     ["我头疼得厉害。",
		       "也许你该找医生开药。",
		       "我是一个计算机程序",
		       "——一个用爱写成的计算机程序，",
		       "可是我尚未接受医疗培训。"
		       ],
		     ["你会念诗吗？",
		       "当然。听着，这首是由我最早的祖先之一读过的。",
		       "静夜思",
		       "李白",
		       "床前明月光，",
		       "疑是地上霜。",
		       "举头望明月，",
		       "低头思故乡。"
		       ]
		     ],
		   [["这里以前不是有个网站吗？",
		       "作为粘粘公司 2.0品牌重塑努力的一部分，",
		       "MOM正在把信息高速公路改造成一个更加一体化的广告投送平台。",
		       "这个网站被选中参加我们首批beta测试。"
		       ],
		     ["广告？这我可不太喜欢。",
		       "世界顶尖科学家最近证明得出广告是健康生活方式的一个重要组成部分。",
		       "研究证明，90%的客户并不点击广告。",
		       "主要是因为他们有更好的事情要做。",
		       "我们有决心让这些海盗改邪归正。",
		       "MOM正在把互联网上的所有内容改成广告。"
		       ],
		     ["互联网上的所有内容？真是野心勃勃。",
		       "粘粘公司 2.0正在收购许多不同的互联网财产",
		       "——那些和我们的核心业务无关的互联网财产。",
		       "不过别担心，",
		       "MOM将永远为您提供最好的搜索。"
		       ],
		     ["也许你们可以拓展到社交网络？",
		       "粘粘世界 2.0的业务计划明确指出我们成功的三个步骤：",
		       "1. 收购所有的互联网财产，并把他们改成巨大的广告。",
		       "2. ????",
		       "3. 获得巨大的利润！",
		       "嗯……我的数据库中似乎找不到第二步了。"
		       ],
		     ["你真是专一。",
		       "你可以相信MOM。这个计划是最好的。",
		       "---- 重要消息 ----",
		       "你已经被选中参与我们的桌面搜索程序测试。",
		       "只需下载820MB的安装程序，几分钟之内就能运行！",
		       "(*) 您的计算机可能瘫痪。",
		       "(**) 你的所有应用程序将被换成广告。",
		       "(***) 为了为您提供更具针对性的相关广告，您的文档将被上传到MOM。",
		       "(****) 然后你的文档也将被换成广告。",
		       "(*****) 粘粘公司 2.0绝对不以任何方式隶属于谷歌世界公司。"
		       ],
		     ["不用了。",
		       "---- 重要消息 ----",
		       "尊敬的 %FIRSTNAME %LASTNAME %RAND15：",
		       "啊哦……",
		       "有什么地方不太对劲。",
		       "……",
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
    $('<IMG>').attr('src', 'http://goofans.com/MOM/images/MOM_eyelid.png');
    $('<IMG>').attr('src', 'http://goofans.com/MOM/images/xbutton_over.png');
    $('<IMG>').attr('src', 'http://goofans.com/MOM/images/popup.png');
    $('<IMG>').attr('src', 'http://goofans.com/MOM/images/loading_anim.gif');
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
分区故障 (核心转储)\n');

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
            consoleWrite('分区故障 (核心转储)' + "\n");
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
 22:20:05 持续 8 天, 16:52,  4 个用户,  平均负载: 0.00, 0.00, 0.00\n\
用户     终端设备 来自                    登陆时间 离开   做什么\n\
root     tty0     console                 01Apr    0.00s  ' + cmd + '\n\
david    pts/0    2a01:550:8000:10f::1:1  01Apr    26:32m -bash\n\
david    pts/1    2a01:550:8000:10f::1:1  01Apr    5:25   rm -fr /var/lib/MOM\n\
');
            break;
        case 'shutdown':
        case 'reboot':
            consoleShutdown(cmd);
            break;
        case 'mygod':
            consoleShutdown('shutdown');
            break;
        case 'h':
        case '?':
        case 'what':
        case 'help':
            consoleWrite('\
文件/目录：\n\
   ls cd pwd mkdir rmdir rm cat more less\n\
系统维护：\n\
   who whoami shutdown reboot\n\
其他：\n\
   h ? what about help about\n\
');
            break;
        case 'about':
            consoleWrite('\
此程序由 MG太软 于 2012.2.12 进行改进并汉化，于 2012.7.29 再次改进。\n\
原作者：David C A Croft\n\
goofans原版：http://goofans.com/MOM/\n');
            break;
        case "":
            break;

        default:
            consoleWrite("嘘: " + cmd + ": 命令未找到\n");
    }

}


var shutdownMessages = [
			"正在关闭MOM服务器: ", ".", ".", ".",
			"完成！\n正在关闭MOMSQL: ", ".", ".", ".",
			"完成！\n同步磁盘……", "",
			"\n准备重启。", "\n\n\n我爱你，2D Boy！"
			];


function consoleShutdown(type) {
    $('#inputline').hide();
    consoleActive = false;

    consoleWrite('\n\
从 root@momvax 来的广播消息 (控制台):\n\
\n\
系统正在' + (type == 'shutdown' ? "关机" : "重启") + '！\n\
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
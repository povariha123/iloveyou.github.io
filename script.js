var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 2202;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++)
{
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars()
{
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars()
{
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight)
{
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText()
{
    var fontSize = Math.min(30, window.innerWidth / 24); 
    var lineHeight = 8;

    context.textAlign = "center";
    
    context.shadowColor = "rgba(130, 130, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if (frameNumber < 250)
    {
        context.fillStyle = `rgba(130, 130, 255, ${opacity})`;
        context.fillText("я не могу поверить, как мне повезло с тобой", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }

    if (frameNumber >= 250 && frameNumber < 500)
    {
        context.fillStyle = `rgba(130, 130, 255, ${opacity})`;
        context.fillText("я не могу поверить, как мне повезло с тобой", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if (frameNumber == 500)
    {
        opacity = 0;
    }

    if (frameNumber > 500 && frameNumber < 750)
    {
        context.fillStyle = `rgba(130, 130, 255, ${opacity})`;

        if (window.innerWidth < 600)
        {
            drawTextWithLineBreaks(["первая встреча с тобой - ", "это лучшее событие в моей жизни"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }
        else
        {
            context.fillText("первая встреча с тобой - это лучшее событие в моей жизни", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }

    if (frameNumber >= 750 && frameNumber < 1000)
    {
        context.fillStyle = `rgba(130, 130, 255, ${opacity})`;
        
        if (window.innerWidth < 600)
        {
            drawTextWithLineBreaks(["первая встреча с тобой - ", "это лучшее событие в моей жизни"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }
        else
        {
            context.fillText("первая встреча с тобой - это лучшее событие в моей жизни", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if (frameNumber == 1000)
    {
        opacity = 0;
    }

    if (frameNumber > 1000 && frameNumber < 1250)
    {
        context.fillStyle = `rgba(130, 130, 255, ${opacity})`;

        if (window.innerWidth < 600)
        {
            drawTextWithLineBreaks(["с тех пор каждый день", "ты делаешь меня счастливым"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }
        else
        {
            context.fillText("с тех пор каждый день ты делаешь меня счастливым", canvas.width / 2, canvas.height / 2);
        }

        opacity = opacity + 0.01;
    }

    if (frameNumber >= 1250 && frameNumber < 1500)
    {
        context.fillStyle = `rgba(130, 130, 255, ${opacity})`;

        if (window.innerWidth < 600)
        {
            drawTextWithLineBreaks(["с тех пор каждый день", "ты делаешь меня счастливым"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }
        else
        {
            context.fillText("с тех пор каждый день ты делаешь меня счастливым", canvas.width / 2, canvas.height / 2);
        }

        opacity = opacity - 0.01;
    }

    if (frameNumber == 1500)
    {
        opacity = 0;
    }

    if (frameNumber > 1500 && frameNumber < 1750)
    {
        context.fillStyle = `rgba(130, 130, 255, ${opacity})`;
        context.fillText("ты самая прекрасная девочка на свете", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }

    if (frameNumber >= 1750 && frameNumber < 2000)
    {
        context.fillStyle = `rgba(130, 130, 255, ${opacity})`;
        context.fillText("ты самая прекрасная девочка на свете", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if (frameNumber == 2000)
    {
        opacity = 0;
    }

    if (frameNumber > 2000 && frameNumber < 2250)
    {
        context.fillStyle = `rgba(130, 130, 255, ${opacity})`;

        if (window.innerWidth < 600)
        {
            drawTextWithLineBreaks(["все эти 2202 звёздочки для тебя,", "Златочка"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }
        else
        {
            context.fillText("все эти 2202 звёздочки для тебя, Златочка", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }

    if (frameNumber >= 2250 && frameNumber < 2500)
    {
        context.fillStyle = `rgba(130, 130, 255, ${opacity})`;

        if (window.innerWidth < 600)
        {
            drawTextWithLineBreaks(["все эти 2202 звёздочки для тебя,", "Златочка"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }
        else
        {
            context.fillText("все эти 2202 звёздочки для тебя, Златочка", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if (frameNumber == 2500)
    {
        opacity = 0;
    }

    if (frameNumber > 2500 && frameNumber < 99999)
    {
        context.fillStyle = `rgba(130, 130, 255, ${opacity})`;

        if (window.innerWidth < 600)
        {
            drawTextWithLineBreaks(["я люблю тебя сильнее всех на свете", "и хочу провести с тобой всю свою жизнь"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }
        else
        {
            context.fillText("я люблю тебя сильнее всех на свете и хочу провести с тобой всю свою жизнь", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if (frameNumber >= 2750 && frameNumber < 99999)
    {
        context.fillStyle = `rgba(130, 130, 255, ${secondOpacity})`;
        context.fillText("мы будем самой счастливой парой", canvas.width / 2, (canvas.height / 2 + 50));
        secondOpacity = secondOpacity + 0.01;
    }

    if (frameNumber >= 3000 && frameNumber < 99999)
    {
        context.fillStyle = `rgba(130, 130, 255, ${thirdOpacity})`;
        context.fillText("с Днём святого Валентина <3", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;
    }   

     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function ()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

    for (var i = 0; i < stars; i++)
    {
        starArray[i].x = Math.random() * canvas.offsetWidth;
        starArray[i].y = Math.random() * canvas.offsetHeight;
    }
});

window.requestAnimationFrame(draw);

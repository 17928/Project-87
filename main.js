var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;
block_image_width=350;
block_image_height=430;
var block_image_object="";
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object=Img;
        block_image_object=scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    
    if(keyPressed == '82')
    {
        new_image('https://lh3.googleusercontent.com/proxy/eAXsnZb0AHJdTeECnnZv5vG_4oqylwAOauwQcOEjR1_AqIA4xVhTDOiQTnUOvtOV9PkiDhlC6FhLspid7yhdUctsPhtI95jgIUgZyAZKFyiUMbMtijgJxIG6cRGzm9gAnVv1SXQD7DM6l-DV0BB5V7xfHcg');
        console.log("r");
    }
    if(keyPressed == '71')
    {
        block_x=200;
        new_image('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8079e40c-49c5-4171-91d2-e12c7f3b6deb/d6kqsgu-42285ab1-b286-4666-8632-d6652c449f32.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwNzllNDBjLTQ5YzUtNDE3MS05MWQyLWUxMmM3ZjNiNmRlYlwvZDZrcXNndS00MjI4NWFiMS1iMjg2LTQ2NjYtODYzMi1kNjY1MmM0NDlmMzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CWiniyf5CpzPyToz52wjevI6xcNjYPwmVr0xpQiWy-Q');
        console.log("g");
    }
    if(keyPressed == '89')
    {
        block_x=350;
        new_image('https://media.forbiddenplanet.com/products/28/4f/7febe531305deb6899ca16faf36090ced019.png');
        console.log("y");
    }
    if(keyPressed == '80')
    {
        block_x=600;
        new_image('https://www.previewsworld.com/SiteImage/MainImage/STL181547.jpg');
        console.log("p");
    }
    if(keyPressed == '66')
    {
        block_x = 700;
        new_image('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8079e40c-49c5-4171-91d2-e12c7f3b6deb/d6kqshu-03451491-c99a-4c0c-a06b-ac752a1be39e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwNzllNDBjLTQ5YzUtNDE3MS05MWQyLWUxMmM3ZjNiNmRlYlwvZDZrcXNodS0wMzQ1MTQ5MS1jOTlhLTRjMGMtYTA2Yi1hYzc1MmExYmUzOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7j2wWambqFz7A-ntmZvQ4R7_TA-Wq8YlGiux-wIxf1M');
        console.log("b");
    }
}
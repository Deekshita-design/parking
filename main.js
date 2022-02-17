//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
car_width=75;
car_height=100;

background_image = "parkingLot.jpg";
car_image = "car2.png";

//Set initial position for a car image.
car_x=50;
car_y=225;


function add()
{
	background_image_1=new Image();
	background_image_1.onload= uploadBackground;
	background_image_1.src=background_image;

	car_image_1=new Image();
	car_image_1.onload= uploadgreencar;
	car_image_1.src=car_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_image_1,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_image_1,car_x,car_y,car_width,car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keypresse = e.keyCode;
	console.log(keypresse);
		if(keypresse == '38')
		{
			up();
			console.log("up");
		}
	
		if(keypresse == '40')
		{
			down();
			console.log("down");
		}
		
		if(keypresse == '37')
		{
			left();
			console.log("left");
		}
	
		if(keypresse == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(car_y>0)
	{
        car_y=car_y-10;
        console.log("Up arrow key is pressed "+car_y);
        uploadBackground();
        uploadgreencar();
	}

}

function down()
{
	//Define function to move the car downward
	if(car_y<800)
	{
        car_y=car_y+10;
        console.log("Down arrow key is pressed "+car_y);
        uploadBackground();
        uploadgreencar();
	}

}

function left()
{
	//Define function to move the car left side
	if(car_x>0)
	{
        car_x=car_x-10;
        console.log("Left arrow key is pressed "+car_x);
        uploadBackground();
        uploadgreencar();
	}


}

function right()
{
	//Define function to move the car right side
	if(car_x<400)
	{
        car_x=car_x+10;
        console.log("Right arrow key is pressed "+car_x);
        uploadBackground();
        uploadgreencar();

	}
}
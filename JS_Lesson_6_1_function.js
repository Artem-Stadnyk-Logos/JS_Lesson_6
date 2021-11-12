function Robot(){
    this.name;
    this.iDo;

    this.model = function Robot (name, iDo){
        this.name = name;
        this.iDo = iDo;
    }

    this.model("Robot", "просто працюю");

    this.work = function work (){
        console.log( "Я " + this.name + " - я " + this.iDo ); 
              }
    }
  
function CoffeeRobot() {
	Robot.call(this);

	this.model("CoffeeRobot", "просто варю каву");
}

function RobotCooker() {
	Robot.call(this);

	this.model("RobotCooker", "просто готую");
}

function RobotDanser() {
	Robot.call(this);

	this.model("RobotDanser", "просто танцую");
}

let robot = new Robot();
let coffeeRobot = new CoffeeRobot();
let robotDanser = new RobotDanser();
let robotCooker = new RobotCooker();

robot.work();
coffeeRobot.work();
robotDanser.work();
robotCooker.work();

console.log("-------------------------------------");

let robotArray = [];
robotArray[0] = robot;
robotArray[1] = coffeeRobot;
robotArray[2] = robotDanser;
robotArray[3] = robotCooker;

for (let i = 0; i < robotArray.length; i++) {
	robotArray[i].work();
}
function Robot(){
    this.name;
    this.iDo;
    
    Robot.prototype.model = function Robot (name, iDo){
        this.name = name;
        this.iDo = iDo;
    }

    Robot.prototype.model("Robot", "просто працюю");

    Robot.prototype.work = function work (){
        console.log( "Я " + this.name + " - я " + this.iDo ); 
              }
    }
  
function CoffeeRobot() {}
	CoffeeRobot.prototype = Object.create(Robot.prototype);
    CoffeeRobot.prototype.model = CoffeeRobot;

    CoffeeRobot.prototype.model("CoffeeRobot", "просто варю каву");


function RobotCooker() {}
	RobotCooker.prototype = Object.create(Robot.prototype);
    RobotCooker.prototype.model = RobotCooker;

	RobotCooker.prototype.model("RobotCooker", "просто готую");


function RobotDanser() {}
	RobotDanser.prototype = Object.create(Robot.prototype);
    RobotDanser.prototype.model = RobotDanser;

	RobotDanser.prototype.model("RobotDanser", "просто танцую");


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
let engine = Matter.Engine.create();
let Runner = Matter.Runner;

let render = Matter.Render.create({
    element: document.body,
    engine:engine,
    options:{
        width: window.innerWidth,
      height: window.innerHeight,
      wireframes: false,
      background: 'white',
    }
    
});

let ground = Matter.Bodies.rectangle(400, 600, 810, 60, {
    render: {
        fillStyle: "none",
        strokeStyle: 'black',
         lineWidth: 2,
    },
    isStatic: true});
// let boxA = Matter.Bodies.rectangle(400, 200, 80, 80,{
//     render: {
//         fillStyle: "none",
//         strokeStyle: 'black',
//          lineWidth: 2,
//     },
// });
// let boxB = Matter.Bodies.rectangle(450, 50, 80, 80,{
//     render: {
//         fillStyle: "none",
//         strokeStyle: 'black',
//          lineWidth: 2,
//     }
// });


let stack = Matter.Composites.stack(200,200, 4,4,0,0, function(x,y){
    return Matter.Bodies.rectangle(x, y, 80, 80, {
        render: {
            fillStyle: "none",
            strokeStyle: "black",
            lineWidth: 2,
        }
    })

});

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render: {visible: false}
    }
});

render.mouse = mouse;
Matter.World.add(engine.world, [stack, ground, mouseConstraint]);

// Matter.Engine.run(engine);
Matter.Render.run(render);
let runner = Runner.create();
Runner.run(runner, engine);
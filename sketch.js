var PLAY = 1
var END = 0
var ghost,ghostImg,crawlerImg,crawler
var player,playerImg
var gameover, restart, gamestate = PLAY
var wall,wall2, wallImg, wall2Img, ground, groundImg
var crawlerGroup,wall2Group

function preload(){
    ghostImg = loadImage("ghost.png")
    playerImg = loadImage("dood.png")
    crawlerImg = loadAnimation("crawler.png","crawler2.png")
    wallImg = loadImage("wall.png")
    wall2Img = loadImage("spooks.png")
}   

function setup() {
    createCanvas(800,300)
    crawlerGroup = new Group()
    wall = createSprite(10,10,10,10)
    wall.addImage("wall",wall2Img)
    ghost = createSprite(120,210,10,10)
    ghost.addImage("ghost",ghostImg)
    ghost.scale = 0.4
    ghost.debug = true
    ghost.setCollider("rectangle",-200,0,200,300)
    player = createSprite(130,200,10,10)
    player.addImage("dood",playerImg)
    player.scale = 0.4
    player.debug = true
    player.setCollider("rectangle",0,0,130,360)
}

function draw() {
    background(20)
    wall.velocityX = 5
    crawlers()

    drawSprites()
}

function crawlers(){
    if (frameCount%100===0) {
        crawler = createSprite(900,230,10,10)
        crawler.addAnimation("crawling",crawlerImg)
        crawler.scale = 0.3
        crawler.velocityX = -5
        crawler.depth = player.depth
        crawler.lifetime = 200
        crawlerGroup.add(crawler)

    }
}
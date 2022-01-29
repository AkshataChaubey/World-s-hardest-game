var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["35f848f2-cd59-4942-befc-e5bbcdf56dfb","af8017a8-bce1-4f26-81e2-a46ecfb0d8c3","10d92652-7fab-415e-b718-bd2c1b98d540"],"propsByKey":{"35f848f2-cd59-4942-befc-e5bbcdf56dfb":{"name":"red_alien_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PHeFO1Wvqtn9yXIG11PmQB9eDVZJgkZV/category_fantasy/red_alien.png","frameSize":{"x":318,"y":333},"frameCount":1,"looping":true,"frameDelay":2,"version":"PHeFO1Wvqtn9yXIG11PmQB9eDVZJgkZV","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":318,"y":333},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PHeFO1Wvqtn9yXIG11PmQB9eDVZJgkZV/category_fantasy/red_alien.png"},"af8017a8-bce1-4f26-81e2-a46ecfb0d8c3":{"name":"santa_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"},"10d92652-7fab-415e-b718-bd2c1b98d540":{"name":"pngkey.com-space-shuttle-png-1000849.png_1","sourceUrl":"assets/v3/animations/PxDf1VzjtFcSiKFL4sCHETTFEJozhhwcbQ-kcKTh4WY/10d92652-7fab-415e-b718-bd2c1b98d540.png","frameSize":{"x":903,"y":819},"frameCount":1,"looping":true,"frameDelay":4,"version":"Rgtf.ofjQX54Xr2skdBBk7rKgcDYxasG","loadedFromSource":true,"saved":true,"sourceSize":{"x":903,"y":819},"rootRelativePath":"assets/v3/animations/PxDf1VzjtFcSiKFL4sCHETTFEJozhhwcbQ-kcKTh4WY/10d92652-7fab-415e-b718-bd2c1b98d540.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg=createSprite(200,200);
bg.setAnimation("santa_1");

var player=createSprite(189,390,20,20);
player.shapeColor='yellow';

var alien1=createSprite(27,109,20,20);
alien1.setAnimation("red_alien_1");
alien1.scale='0.1';

var alien2=createSprite(377,140,20,20);
alien2.setAnimation("red_alien_1");
alien2.scale='0.1';

var alien3=createSprite(27,250,20,20);
alien3.setAnimation("red_alien_1");
alien3.scale='0.1';

var alien4=createSprite(377,300,20,20);
alien4.setAnimation("red_alien_1");
alien4.scale='0.1';

var lives=0;

var spacecraft=createSprite(192,22,20,20);
spacecraft.setAnimation("pngkey.com-space-shuttle-png-1000849.png_1");
spacecraft.scale=0.1

alien1.setVelocity(15,0);
alien2.setVelocity(-15,0);
alien3.setVelocity(15,0);
alien4.setVelocity(-15,0);

function draw()
{
  drawSprites();
  
 createEdgeSprites();
   alien1.bounceOff(edges);
   alien2.bounceOff(edges);
   alien3.bounceOff(edges);
   alien4.bounceOff(edges);
   
   if (keyDown("UP_ARROW")) {
   player.y+=-4;
       
   }
 if (keyDown("DOWN_ARROW")) {
   player.y+=4;
   
}
 if (player.isTouching(alien1)||player.isTouching(alien2)||player.isTouching(alien3)||player.isTouching(alien4)) {
          lives+=1;
           player.x=189;
           player.y=390;
 }     
 textSize(30);
 text("Lives "+ lives,280,26);

                                       
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

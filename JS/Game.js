class Game{
    constructor(){

    }

    getstate(){
        var gameStateRef = databse.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }

    async start(){
        if (gameState == 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            background(bg_image);
            player.getCount();
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();

        Player.getplayerInfo();

        player.getPlayerAtEnd();

        background(movie1);
    }
    display(){
        
    }
}
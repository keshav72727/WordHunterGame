class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.rank = null;
        this.score = 0;
        this.answer = null;
    }

    getCount()
    {
        var playerStateRef = database.ref('playerCount');
        playerStateRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count)
    {
        database.ref('/').update({
            playercount:count
        })
    }

    getplayerAtEnd(){
        var PlayerAtEnd = database.ref('PlayerAtEnd');
        PlayerAtEnd.on("value",function(data){
            this.rank = data.val();
        })
    }

    static updatePlayeratEnd(rank)
    {
        database.ref('/').update({
            playerAtEnd : rank
        })
    }

    update()
    {
        var playerIndex = 'Players/Player'+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            playerAnswer :this.answer
        })
    }

    static getPlayerInfo()
    {
        var playerInforef = database.ref('Players');
        playerInforef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
    display(){
        
    }
}
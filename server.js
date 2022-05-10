function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hour = data.getHours()
    //definir hour
    //var hour = 22
    if(hour >= 0 && hour < 12) {
        //morning
        img.src = 'imgmorning.png'
        document.body.style.background = '#D7DF01'
        msg.innerHTML = `Now it's ${hour} in the morning. Reading this time of morning brings a more creative day with more benefits, as it stimulates the brain upon waking up.`
    } else if (hour >= 12 && hour <= 18 ){
        //Afternoon
        img.src = 'imgafternoon.png'
        document.body.style.background = '#01DFA5'
        msg.innerHTML = `Now it's ${hour} in the afternoon, this time is the best time to read a good book, and reduce the stress generated when waking up`
    } else {
        img.src = 'imgnight.png'
        document.body.style.background = '#6E6E6E'
        msg.innerHTML = `Now it's ${hour} of the night. Before going to sleep read a little about the subject you like the most, in addition to being more possible to memorize, it will make you more relaxed`
    }
}

let score = 0
let mistake = 0

$('body').keydown(function(event){



    let text = $('#text').val().split('')

    
    if(event.key == text[0]){
        text.shift()
        score++
        $('#text').val(text.join(''))
    }
    else{
    	mistake++
    	.text()
    }


})

$('.f1').click(function(){
	alert('f')
	window.close()
})
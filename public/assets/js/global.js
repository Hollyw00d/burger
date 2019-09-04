$(document).ready(function() {
    // Add burger
    $('#add-burger').on('click', function() {
        var addBurgerInput = $('#addBurgerInput').val();

        console.log(`/api/addnewburger/${addBurgerInput}`);

        $.post(`/api/addnewburger/${addBurgerInput}`)
            .then(function(data, error) {
                console.log('blah');
                if(error) throw error;
                location.reload();
            });

    });

    // Devour burger
    $('#devour-burger').on('click', function() {
        var firstBurgerNotDevouredId = +($('li').first().attr('data-id'));
       
        $.ajax({
            url: `/api/burgerdevoured/${firstBurgerNotDevouredId}`, 
            type: 'PUT',
            data  : firstBurgerNotDevouredId
        })
            .then(function(data) {
                console.log('blah');
                location.reload();
            });
    });
});
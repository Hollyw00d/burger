$(document).ready(function() {
    // Add burger
    $('#add-burger').on('click', function() {
        var addBurgerInput = $('#addBurgerInput').val();

        console.log(`/api/addnewburger/${addBurgerInput}`);

        $.post(`/api/addnewburger/${addBurgerInput}`)
            .then(function() {
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
        .then(function() {
            location.reload();
        });
    });

    // Delete all burgers 
    $('#delete').on('click', function() {

        $.ajax({
            url: '/api/burger/delete/all',
            type: 'DELETE'
        })
        .then(function() {
            location.reload();
        });
    });
});
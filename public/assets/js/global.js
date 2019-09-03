$(document).ready(function() {
    // Devour burger
    $('#devour-burger').on('click', function() {
        var firstBurgerNotDevouredId = +($('li').first().attr('data-id'));
       
        $.ajax({
            url: `/api/burgerdevoured/${firstBurgerNotDevouredId}`, 
            type: 'PUT',
            data  : firstBurgerNotDevouredId
        })
            .done(function(response) {
                console.log(response);
                location.reload();
            })
            .fail(function(xhr, status, error) {
                console.log(`Error: ${xhr.status}`);
            });

    });
});
$(document).ready(function() {
    // Devour burger
    $('#devour-burger').on('click', function(e) {
        e.preventDefault();
        var firstBurgerNotDevouredId = +($('li').first().attr('data-id'));
        var firstBurgerNotDevouredIdObj = {
            firstBurgerNotDevouredId
        };

        $.post('/api/burgerdevoured', firstBurgerNotDevouredIdObj)
            .done(function(response) {
                console.log(response);
            })
            .fail(function(xhr, status, error) {
                console.log(`Error: ${xhr.responseText}`);
            });

    });
});
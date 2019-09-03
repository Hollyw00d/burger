$(document).ready(function() {
    // Add burger
    $('#add-burger').on('click', function() {
        var addBurgerInput = $('#addBurgerInput').val();
        console.log(addBurgerInput);

        $.post(`/api/addnewburger/${addBurgerInput}`)
            .done(function(data) {
                console.log(data);
            })
            .fail(function(xhr, status, error) {
                console.log(`Error: ${xhr.status}`);
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
            .done(function(data) {
                console.log(data);
                location.reload();
            })
            .fail(function(xhr, status, error) {
                console.log(`Error: ${xhr.status}`);
            });
    });
});
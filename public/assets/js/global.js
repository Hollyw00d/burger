$(document).ready(function() {
    // Add burger
    $('#add-burger').on('click', function() {
        var addBurgerInput = $('#addBurgerInput').val();

        console.log(`/api/addnewburger/${addBurgerInput}`);

        $.post(`/api/addnewburger/${addBurgerInput}`)
            .then(function(status) {
                console.dir(status)
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
            .then(function(status) {
                console.log(status);
                location.reload();
                // find the element data-id
                // take the li with data-id whatever off
                // add the li to the second list wherever you want
            });
    });
});
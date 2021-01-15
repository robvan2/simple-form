var ingredients = [];
const enableDatePicker = () => {
    $('#picked-date').attr('disabled', false);
}
const disableDatePicker = () => {
    $('#picked-date').attr('disabled', true);
}
const dateValue = (element) => {
    $('#choosed').val(element.value);
}
const addIngredient = () => {
    ingredients.push($('#ingredient').val());
    $('#ingredients').html('');
    ingredients.map((ingredient, index) => {
        let item = `<div class="ingredient__item" id="ingredient-${index}">
                        <button onclick="deleteIngredient(${index});" type="button" class="ingredient__item__delete"><i>-</i></button> 
                        <span>${ingredient}</span>
                    </div>`;
        $('#ingredients').append(item);
    })

    $('#ingredient').val('');
    console.log(ingredients);
}
const deleteIngredient = (ingredient) => {
    $(`#ingredient-${ingredient}`).remove();
    ingredients.splice(ingredient, 1);
}
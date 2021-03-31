$(document).ready(
    $('.saveBtn').on('click', function() {

        let value = $(this).siblings('.description').val()
        let time = $(this).parent().attr('id')
    
        localStorage.setItem(time, value)
    }
    )

)
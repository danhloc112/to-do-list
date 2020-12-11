const jd = $.noConflict();
let content = '';
let date;
    
    // Thêm thẻ li
    function addTask() {
        jd('#task').prepend(
            `<li class="note-item"> 
            <div class="row">
                <span class="col l-10 m-10 c-10" id="task-item"></span>
                <input class="col l-1 m-1 c-1 task-check" type="checkbox" name="checked"> 
                <i class="fas fa-trash-alt col l-1 m-1 c-1 trash"></i>
            </div>
        </li>  `
        )
    }

    // Thêm nội dung task vào li
    function addContent() {
        jd('#task-item').text(`${date}  ${content}`)
    }

    // Ấn nút thêm ghi chú
    jd('.add-button').on('click', function(event) {
        let taskValue = jd('#task-input').val();
        let taskDate = jd('#task-date').val();  
        event.preventDefault();
        // console.log(taskValue)
        if(taskValue !== '') {
            if(taskDate !== '') {
                date = taskDate;
            }
            else {
                date = ' '
            }
                content = taskValue;
                addTask();
                addContent();
        }
        else {
            alert('Vui lòng thêm ghi chú!')
        }
    })
    // Đánh dấu đã xong
    jd('.task-check').on('change', function() {
        console.log(jd(this).val())
        if(jd(this).is(':checked') == true) {
            jd(this).parent().parent().addClass('done')
        }
        if(jd(this).is(':checked') == false) {
            jd(this).parent().parent().removeClass('done')
        }
    })
   
  // Xoá task
  jd('.trash').on('click',function() {
    jd(this).parent().parent().remove()
})
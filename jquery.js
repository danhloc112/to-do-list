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
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14 trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
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
    jd(document).on('change','.task-check', function() {
        console.log(jd('.task-check').val())
        if(jd('.task-check').is(':checked') == true) {
            jd(this).parent().parent().addClass('done')
        }
        if(jd('.task-check').is(':checked') == false) {
            jd(this).parent().parent().removeClass('done')
        }
    })
   
  // Xoá task
  jd(document).on('click','.trash',function() {
    jd(this).parent().parent().remove()
})
$.event.props.push('dataTransfer');
$(document).ready(function() {
    var $this, $log = $('#log');
 
    $('tr td').on({
        dragstart: function(e) {
            $this = $(this);
            e.dataTransfer.setData('text', $this.html());
        },
        dragenter: function(e) {
            e.preventDefault();
        },
        dragleave: function() {
        },
        dragover: function(e) {
            e.preventDefault();
        },
        drop: function(e) {
			if (true)
			{
                var data = e.dataTransfer.getData('text');;
				$log.html(data + ' > ' + $(this).html());
				$this.text($(this).text());
                $(this).html(data);
            }
        },
        dragend: function() {
        },
        click: function() {
            alert("Pour pouvoir déplacer un pion merci de rester cliquer dessus et de le bouger ou vous souhaitez");
        }
		
		});
});


